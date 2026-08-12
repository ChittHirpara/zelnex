"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js";
import { mergeVertices } from "three/examples/jsm/utils/BufferGeometryUtils.js";
import gsap from "gsap";

type GlassmorphismCanvasProps = {
  surfaceRef: React.RefObject<HTMLDivElement | null>;
  bleed?: number;
};

const BACKDROP_SELECTOR = ".hz-bg-img";
const BEAD_SELECTOR = "[data-glass-bead]";

const CAMERA_DISTANCE_FACTOR = 2.1;
const MAX_PIXEL_RATIO = 2;
const TRANSMISSION_SCALE = 1;
const BAKE_MAX_EDGE = 2600;
const SLAB_TILT = 0;

const BG_VERTEX = /* glsl */ `
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

const BG_FRAGMENT = /* glsl */ `
uniform sampler2D uMap;
uniform vec2 uMapOffset;
uniform vec2 uMapScale;
uniform vec2 uCanvas;
uniform vec4 uBar;
uniform float uRadius;
uniform float uVeil;
uniform vec3 uCausticColor;
uniform float uCaustic;
uniform float uLightX;
varying vec2 vUv;

vec3 srgbToLinear(vec3 c) {
  return mix(pow((c + 0.055) / 1.055, vec3(2.4)), c / 12.92, step(c, vec3(0.04045)));
}

float roundedBox(vec2 p, vec2 halfSize, float r) {
  vec2 q = abs(p) - halfSize + r;
  return min(max(q.x, q.y), 0.0) + length(max(q, 0.0)) - r;
}

void main() {
  vec2 mapUv = clamp(vUv * uMapScale + uMapOffset, vec2(0.0008), vec2(0.9992));
  vec3 base = srgbToLinear(texture2D(uMap, mapUv).rgb);

  vec2 px = vec2(vUv.x * uCanvas.x, (1.0 - vUv.y) * uCanvas.y);
  vec2 center = uBar.xy + uBar.zw * 0.5;
  float inside = smoothstep(0.0, -uBar.w * 0.22, roundedBox(px - center, uBar.zw * 0.5, uRadius));

  vec3 lit = mix(base, vec3(1.0), inside * uVeil);

  float down = clamp((px.y - uBar.y) / max(uBar.w, 1.0), 0.0, 1.0);
  float travel = clamp((px.x - uBar.x) / max(uBar.z, 1.0), 0.0, 1.0);
  float sweep = 0.2 + 0.8 * exp(-pow((travel - uLightX) * 1.7, 2.0));
  float body = 0.35 + 0.65 * pow(down, 2.2);
  vec3 glow = uCausticColor * clamp(inside * body * sweep * uCaustic, 0.0, 1.0);

  gl_FragColor = vec4(1.0 - (1.0 - lit) * (1.0 - glow), 1.0);
}
`;

function roundedRectShape(width: number, height: number, radius: number) {
  const shape = new THREE.Shape();
  const hw = width / 2;
  const hh = height / 2;
  const r = Math.max(0.5, Math.min(radius, hw, hh));
  shape.moveTo(-hw + r, -hh);
  shape.lineTo(hw - r, -hh);
  shape.absarc(hw - r, -hh + r, r, -Math.PI / 2, 0, false);
  shape.lineTo(hw, hh - r);
  shape.absarc(hw - r, hh - r, r, 0, Math.PI / 2, false);
  shape.lineTo(-hw + r, hh);
  shape.absarc(-hw + r, hh - r, r, Math.PI / 2, Math.PI, false);
  shape.lineTo(-hw, -hh + r);
  shape.absarc(-hw + r, -hh + r, r, Math.PI, Math.PI * 1.5, false);
  return shape;
}

function buildSlabGeometry(width: number, height: number, radius: number, quality: number) {
  const bevel = Math.max(4, Math.min(10, height * 0.08));
  const shape = roundedRectShape(
    Math.max(12, width - bevel * 2),
    Math.max(12, height - bevel * 2),
    Math.max(1, radius - bevel),
  );
  const depth = bevel * 0.8;
  const raw = new THREE.ExtrudeGeometry(shape, {
    depth,
    bevelEnabled: true,
    bevelSegments: Math.round(7 * quality),
    steps: 1,
    bevelSize: bevel,
    bevelThickness: bevel * 0.6,
    curveSegments: Math.round(10 * quality),
  });
  raw.translate(0, 0, -depth);
  const geometry = mergeVertices(raw, 1e-4);
  geometry.computeVertexNormals();
  raw.dispose();
  return geometry;
}

function tintEnvironment(envScene: THREE.Scene) {
  const lampTint = new THREE.Color(0.96, 0.985, 1);
  const roomTint = new THREE.Color("#e6f1ff");
  envScene.traverse((object) => {
    const mesh = object as THREE.Mesh;
    const material = mesh.material as THREE.MeshStandardMaterial | undefined;
    if (!material || !material.color) return;
    if (material.color.r > 1 || material.color.g > 1 || material.color.b > 1) {
      material.color.multiply(lampTint);
    } else {
      material.color.lerp(roomTint, 0.55);
    }
  });

  const stripGeometry = new THREE.PlaneGeometry(1, 1);
  const lamps: THREE.Mesh[] = [];

  const addLamp = (
    color: THREE.Color,
    width: number,
    height: number,
    position: [number, number, number],
    rotation: [number, number, number],
  ) => {
    const lamp = new THREE.Mesh(stripGeometry, new THREE.MeshBasicMaterial({ color }));
    lamp.scale.set(width, height, 1);
    lamp.position.set(...position);
    lamp.rotation.set(...rotation);
    envScene.add(lamp);
    lamps.push(lamp);
  };

  addLamp(new THREE.Color(1, 0.995, 0.99).multiplyScalar(40), 16, 1.1, [-1, 4.9, 0.6], [Math.PI / 2, 0, 0]);
  addLamp(new THREE.Color(0.72, 0.88, 1).multiplyScalar(22), 14, 2.6, [2.4, 1.2, -4.6], [0, 0, 0]);
  addLamp(new THREE.Color(0.55, 0.8, 1).multiplyScalar(17), 15, 1.6, [0, -3.9, -0.8], [-Math.PI * 0.32, 0, 0]);
  addLamp(new THREE.Color(1, 0.98, 0.95).multiplyScalar(26), 2.4, 7, [-6.2, 1.6, 1.2], [0, Math.PI / 2, 0]);
  addLamp(new THREE.Color(1, 0.99, 0.98).multiplyScalar(24), 13, 3.4, [-3.6, 2.6, 6.4], [0, 0, -0.42]);
  addLamp(new THREE.Color(0.78, 0.9, 1).multiplyScalar(18), 9, 1.8, [4.2, -1.4, 6.2], [0, 0, -0.3]);

  return () => {
    lamps.forEach((lamp) => (lamp.material as THREE.Material).dispose());
    stripGeometry.dispose();
  };
}

export function GlassmorphismCanvas({ surfaceRef, bleed = 32 }: GlassmorphismCanvasProps) {
  const holderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const holder = holderRef.current;
    const surface = surfaceRef.current;
    if (!holder || !surface) return;

    const backdrop = document.querySelector<HTMLElement>(BACKDROP_SELECTOR);
    const sourceImage = backdrop?.querySelector("img") ?? null;
    if (!backdrop || !sourceImage) return;

    let disposed = false;
    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
        powerPreference: "high-performance",
      });
    } catch {
      return;
    }

    renderer.setClearColor(0x000000, 0);
    renderer.toneMapping = THREE.NoToneMapping;
    renderer.transmissionResolutionScale = TRANSMISSION_SCALE;
    renderer.domElement.style.display = "block";
    renderer.domElement.style.width = "100%";
    renderer.domElement.style.height = "100%";
    holder.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(30, 1, 10, 40000);

    const pmrem = new THREE.PMREMGenerator(renderer);
    const envScene = new RoomEnvironment();
    const releaseLamps = tintEnvironment(envScene);
    const envTarget = pmrem.fromScene(envScene, 0.035);
    scene.environment = envTarget.texture;
    scene.environmentIntensity = 0.9;
    releaseLamps();
    envScene.dispose();
    pmrem.dispose();

    const bakeCanvas = document.createElement("canvas");
    const bakeContext = bakeCanvas.getContext("2d");
    const bakeTexture = new THREE.CanvasTexture(bakeCanvas);
    bakeTexture.colorSpace = THREE.SRGBColorSpace;
    bakeTexture.minFilter = THREE.LinearFilter;
    bakeTexture.magFilter = THREE.LinearFilter;
    bakeTexture.wrapS = THREE.ClampToEdgeWrapping;
    bakeTexture.wrapT = THREE.ClampToEdgeWrapping;

    const backdropMaterial = new THREE.ShaderMaterial({
      uniforms: {
        uMap: { value: bakeTexture },
        uMapOffset: { value: new THREE.Vector2() },
        uMapScale: { value: new THREE.Vector2(1, 1) },
        uCanvas: { value: new THREE.Vector2(1, 1) },
        uBar: { value: new THREE.Vector4() },
        uRadius: { value: 24 },
        uVeil: { value: 0.06 },
        uCausticColor: { value: new THREE.Color("#cfeaff") },
        uCaustic: { value: 0.25 },
        uLightX: { value: 0.5 },
      },
      vertexShader: BG_VERTEX,
      fragmentShader: BG_FRAGMENT,
      depthWrite: false,
      depthTest: false,
    });

    const backdropGeometry = new THREE.PlaneGeometry(1, 1);
    const backdropMesh = new THREE.Mesh(backdropGeometry, backdropMaterial);
    backdropMesh.renderOrder = -1;
    backdropMesh.frustumCulled = false;
    backdropMesh.onBeforeRender = (target) => {
      backdropMaterial.colorWrite = target.getRenderTarget() !== null;
    };
    scene.add(backdropMesh);

    const glassMaterial = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color("#ffffff"),
      metalness: 0,
      roughness: 0.02,
      transmission: 1,
      thickness: 10,
      ior: 1.45,
      dispersion: 1.2,
      clearcoat: 0.8,
      clearcoatRoughness: 0.01,
      attenuationColor: new THREE.Color("#dceeff"),
      specularIntensity: 0.6,
      envMapIntensity: 0.9,
      transparent: true,
      side: THREE.DoubleSide,
    });

    const beadMaterial = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color("#ffffff"),
      metalness: 0,
      roughness: 0.008,
      transmission: 1,
      thickness: 0.85,
      ior: 1.52,
      dispersion: 3,
      clearcoat: 1,
      clearcoatRoughness: 0.01,
      attenuationColor: new THREE.Color("#e8f4ff"),
      envMapIntensity: 1.6,
      transparent: true,
      side: THREE.FrontSide,
    });

    const beadGeometry = new THREE.SphereGeometry(0.5, 44, 30);
    const beadMeshes: THREE.Mesh[] = [];

    const slabMesh = new THREE.Mesh(new THREE.BufferGeometry(), glassMaterial);
    slabMesh.renderOrder = 1;
    slabMesh.rotation.x = SLAB_TILT;
    scene.add(slabMesh);

    let bakedWidth = 0;
    let bakedHeight = 0;

    const bakeBackdrop = (rect: DOMRect) => {
      if (!bakeContext || rect.width < 2 || rect.height < 2) return;
      if (!sourceImage.complete || sourceImage.naturalWidth === 0) return;

      const scale = Math.min(
        Math.max(1, Math.min(window.devicePixelRatio || 1, MAX_PIXEL_RATIO)),
        BAKE_MAX_EDGE / Math.max(rect.width, rect.height),
      );
      const width = Math.max(2, Math.round(rect.width * scale));
      const height = Math.max(2, Math.round(rect.height * scale));
      if (bakeCanvas.width !== width || bakeCanvas.height !== height) {
        bakeCanvas.width = width;
        bakeCanvas.height = height;
        bakeTexture.dispose();
      }

      const cover = Math.max(
        width / sourceImage.naturalWidth,
        height / sourceImage.naturalHeight,
      );
      const drawWidth = sourceImage.naturalWidth * cover;
      const drawHeight = sourceImage.naturalHeight * cover;
      bakeContext.clearRect(0, 0, width, height);
      bakeContext.drawImage(
        sourceImage,
        width - drawWidth,
        (height - drawHeight) / 2,
        drawWidth,
        drawHeight,
      );

      const horizontal = bakeContext.createLinearGradient(0, 0, width, 0);
      horizontal.addColorStop(0, "rgba(234,246,255,0.85)");
      horizontal.addColorStop(0.4, "rgba(234,246,255,0.4)");
      horizontal.addColorStop(0.65, "rgba(234,246,255,0)");
      horizontal.addColorStop(1, "rgba(234,246,255,0)");
      bakeContext.fillStyle = horizontal;
      bakeContext.fillRect(0, 0, width, height);

      const vertical = bakeContext.createLinearGradient(0, 0, 0, height);
      vertical.addColorStop(0, "rgba(234,246,255,0.85)");
      vertical.addColorStop(0.6, "rgba(234,246,255,0.45)");
      vertical.addColorStop(1, "rgba(180,215,245,0.15)");
      bakeContext.fillStyle = vertical;
      bakeContext.fillRect(0, 0, width, height);

      bakeTexture.needsUpdate = true;
      bakedWidth = rect.width;
      bakedHeight = rect.height;
    };

    const syncBeads = (count: number) => {
      while (beadMeshes.length < count) {
        const bead = new THREE.Mesh(beadGeometry, beadMaterial);
        bead.renderOrder = 2;
        scene.add(bead);
        beadMeshes.push(bead);
      }
      while (beadMeshes.length > count) {
        const bead = beadMeshes.pop();
        if (bead) scene.remove(bead);
      }
    };

    const layout = () => {
      const holderRect = holder.getBoundingClientRect();
      const width = Math.round(holderRect.width);
      const height = Math.round(holderRect.height);
      if (width < 8 || height < 8) return;

      const cameraDistance = Math.max(width, height) * CAMERA_DISTANCE_FACTOR;

      renderer.setPixelRatio(Math.max(1, Math.min(window.devicePixelRatio || 1, MAX_PIXEL_RATIO)));
      renderer.setSize(width, height, false);

      camera.aspect = width / height;
      camera.fov = 2 * THREE.MathUtils.radToDeg(Math.atan(height / 2 / cameraDistance));
      camera.near = Math.max(1, cameraDistance * 0.2);
      camera.far = cameraDistance * 3;
      camera.position.set(0, 0, cameraDistance);
      camera.updateProjectionMatrix();

      const barWidth = Math.max(12, width - bleed * 2);
      const barHeight = Math.max(12, height - bleed * 2);
      const radius = Math.min(
        parseFloat(window.getComputedStyle(surface).borderTopLeftRadius) || 24,
        barWidth / 2,
        barHeight / 2,
      );
      const quality = width * height > 260000 ? 1 : 1.4;

      slabMesh.geometry.dispose();
      slabMesh.geometry = buildSlabGeometry(barWidth, barHeight, radius, quality);
      glassMaterial.thickness = Math.max(24, barHeight * 0.42);

      const backdropZ = -Math.max(40, barHeight * 0.9);
      const planeHeight = 2 * (cameraDistance - backdropZ) * Math.tan(THREE.MathUtils.degToRad(camera.fov) / 2);
      backdropMesh.scale.set(planeHeight * camera.aspect, planeHeight, 1);
      backdropMesh.position.z = backdropZ;

      backdropMaterial.uniforms.uCanvas.value.set(width, height);
      backdropMaterial.uniforms.uBar.value.set(bleed, bleed, barWidth, barHeight);
      backdropMaterial.uniforms.uRadius.value = radius;

      const beads = surface.querySelectorAll<HTMLElement>(BEAD_SELECTOR);
      syncBeads(beads.length);
      const surfaceRect = surface.getBoundingClientRect();
      const beadZ = barHeight * 0.14;
      const beadFit = (cameraDistance - beadZ) / cameraDistance;
      beads.forEach((element, index) => {
        const rect = element.getBoundingClientRect();
        const diameter = Math.max(6, rect.width);
        beadMaterial.attenuationDistance = diameter * 14;
        const centerX = rect.left + rect.width / 2 - (surfaceRect.left - bleed) - width / 2;
        const centerY = -(rect.top + rect.height / 2 - (surfaceRect.top - bleed) - height / 2);
        const bead = beadMeshes[index];
        bead.scale.set(diameter * beadFit, diameter * beadFit, diameter * 0.8);
        bead.position.set(centerX * beadFit, centerY * beadFit, beadZ);
      });

      const backdropRect = backdrop.getBoundingClientRect();
      if (
        Math.abs(backdropRect.width - bakedWidth) > 1 ||
        Math.abs(backdropRect.height - bakedHeight) > 1
      ) {
        bakeBackdrop(backdropRect);
      }
    };

    const syncBackdropUniforms = () => {
      const backdropRect = backdrop.getBoundingClientRect();
      if (backdropRect.width < 2 || backdropRect.height < 2) return;
      const holderRect = holder.getBoundingClientRect();
      backdropMaterial.uniforms.uMapScale.value.set(
        holderRect.width / backdropRect.width,
        holderRect.height / backdropRect.height,
      );
      backdropMaterial.uniforms.uMapOffset.value.set(
        (holderRect.left - backdropRect.left) / backdropRect.width,
        1 - (holderRect.top - backdropRect.top + holderRect.height) / backdropRect.height,
      );
    };

    let visible = true;
    const observer = new IntersectionObserver(
      (entries) => {
        visible = entries.some((entry) => entry.isIntersecting);
      },
      { rootMargin: "120px" },
    );
    observer.observe(holder);

    const resizeObserver = new ResizeObserver(() => layout());
    resizeObserver.observe(holder);

    const onImageReady = () => {
      bakedWidth = 0;
      layout();
    };
    sourceImage.addEventListener("load", onImageReady);

    const sheen = { x: 0.5 };
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const glideX = gsap.quickTo(sheen, "x", { duration: 0.7, ease: "power2.out" });

    const onPointerMove = (event: PointerEvent) => {
      const rect = holder.getBoundingClientRect();
      glideX(THREE.MathUtils.clamp((event.clientX - rect.left) / rect.width, -0.3, 1.3));
    };

    if (!reduceMotion.matches) {
      window.addEventListener("pointermove", onPointerMove, { passive: true });
    }

    let frame = 0;
    const renderLoop = () => {
      frame = requestAnimationFrame(renderLoop);
      if (!visible) return;
      syncBackdropUniforms();
      backdropMaterial.uniforms.uLightX.value = sheen.x;
      scene.environmentRotation.y = (sheen.x - 0.5) * 0.5;
      renderer.render(scene, camera);
    };

    layout();
    if (sourceImage.complete && sourceImage.naturalWidth > 0) bakeBackdrop(backdrop.getBoundingClientRect());
    renderLoop();

    return () => {
      if (disposed) return;
      disposed = true;
      cancelAnimationFrame(frame);
      observer.disconnect();
      resizeObserver.disconnect();
      sourceImage.removeEventListener("load", onImageReady);
      window.removeEventListener("pointermove", onPointerMove);
      gsap.killTweensOf(sheen);
      beadMeshes.forEach((bead) => scene.remove(bead));
      beadMeshes.length = 0;
      beadGeometry.dispose();
      beadMaterial.dispose();
      slabMesh.geometry.dispose();
      glassMaterial.dispose();
      backdropGeometry.dispose();
      backdropMaterial.dispose();
      bakeTexture.dispose();
      envTarget.dispose();
      scene.environment = null;
      if (holder.contains(renderer.domElement)) holder.removeChild(renderer.domElement);
      renderer.dispose();
      renderer.forceContextLoss();
    };
  }, [surfaceRef, bleed]);

  return (
    <div
      ref={holderRef}
      aria-hidden
      className="pointer-events-none absolute z-0"
      style={{ inset: `-${bleed}px` }}
    />
  );
}
