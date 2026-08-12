"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export function GlassmorphismCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;

    const width = container.clientWidth;
    const height = container.clientHeight;

    if (width === 0 || height === 0) return;

    // 1. Scene, Camera & Renderer with Filmic Tone Mapping
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 5);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.3;

    container.appendChild(renderer.domElement);

    // 2. Procedural Studio Laboratory Environment Map for Realistic Glass Reflections
    const envScene = new THREE.Scene();
    const envLight1 = new THREE.Mesh(
      new THREE.PlaneGeometry(10, 10),
      new THREE.MeshBasicMaterial({ color: new THREE.Color("#ffffff") })
    );
    envLight1.position.set(5, 5, -2);
    envScene.add(envLight1);

    const envLight2 = new THREE.Mesh(
      new THREE.PlaneGeometry(8, 8),
      new THREE.MeshBasicMaterial({ color: new THREE.Color("#8edcff") })
    );
    envLight2.position.set(-5, -3, -2);
    envScene.add(envLight2);

    const envLight3 = new THREE.Mesh(
      new THREE.CircleGeometry(4, 16),
      new THREE.MeshBasicMaterial({ color: new THREE.Color("#00d2ff") })
    );
    envLight3.position.set(0, 4, -2);
    envScene.add(envLight3);

    const pmremGenerator = new THREE.PMREMGenerator(renderer);
    pmremGenerator.compileEquirectangularShader();
    const envMap = pmremGenerator.fromScene(envScene).texture;
    scene.environment = envMap;

    // 3. Multi-angle Physical Studio Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffffff, 3.0);
    keyLight.position.set(5, 6, 4);
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0x8edcff, 2.2);
    fillLight.position.set(-5, -4, 3);
    scene.add(fillLight);

    const rimLight = new THREE.PointLight(0x00d2ff, 4.5, 12);
    rimLight.position.set(0, 2.5, 3);
    scene.add(rimLight);

    // 4. Rounded Beveled Geometry (Catching Light on Rounded Edges)
    const roundedRectShape = new THREE.Shape();
    const x = -4.5,
      y = -1.0,
      w = 9.0,
      h = 2.0,
      r = 0.42;

    roundedRectShape.moveTo(x + r, y);
    roundedRectShape.lineTo(x + w - r, y);
    roundedRectShape.quadraticCurveTo(x + w, y, x + w, y + r);
    roundedRectShape.lineTo(x + w, y + h - r);
    roundedRectShape.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
    roundedRectShape.lineTo(x + r, y + h);
    roundedRectShape.quadraticCurveTo(x, y + h, x, y + h - r);
    roundedRectShape.lineTo(x, y + r);
    roundedRectShape.quadraticCurveTo(x, y, x + r, y);

    const extrudeSettings = {
      depth: 0.2,
      bevelEnabled: true,
      bevelSegments: 10,
      steps: 2,
      bevelSize: 0.09,
      bevelThickness: 0.09,
    };
    const geometry = new THREE.ExtrudeGeometry(roundedRectShape, extrudeSettings);
    geometry.center();

    // 5. Physically-Inspired Frosted Pharmaceutical Glass Material
    const glassMaterial = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color("#DCEFFF"),
      metalness: 0,
      roughness: 0.15,
      transmission: 0.95,
      thickness: 0.25,
      ior: 1.5,
      transparent: true,
      opacity: 0.45,
      clearcoat: 0.35,
      clearcoatRoughness: 0.08,
      attenuationColor: new THREE.Color("#8EDCFF"),
      attenuationDistance: 3.0,
      side: THREE.DoubleSide,
    });

    const glassMesh = new THREE.Mesh(geometry, glassMaterial);
    scene.add(glassMesh);

    // 6. Fresnel Edge Rim Overlay Shader for Luminous Glass Perimeter Highlights
    const fresnelShaderMaterial = new THREE.ShaderMaterial({
      vertexShader: `
        varying vec3 vNormal;
        varying vec3 vViewPosition;
        void main() {
          vec4 worldPosition = modelMatrix * vec4(position, 1.0);
          vec4 mvPosition = viewMatrix * worldPosition;
          vNormal = normalize(normalMatrix * normal);
          vViewPosition = -mvPosition.xyz;
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        varying vec3 vNormal;
        varying vec3 vViewPosition;
        void main() {
          vec3 normal = normalize(vNormal);
          vec3 viewDir = normalize(vViewPosition);
          float fresnel = pow(1.0 - abs(dot(normal, viewDir)), 3.0);
          vec3 rimColor = mix(vec3(1.0, 1.0, 1.0), vec3(0.0, 0.82, 1.0), 0.4);
          gl_FragColor = vec4(rimColor, fresnel * 0.75);
        }
      `,
      transparent: true,
      blending: THREE.AdditiveBlending,
      side: THREE.FrontSide,
    });

    const fresnelMesh = new THREE.Mesh(geometry.clone(), fresnelShaderMaterial);
    fresnelMesh.scale.set(1.002, 1.002, 1.002);
    scene.add(fresnelMesh);

    // 7. Render Animation Loop
    let animationFrameId: number;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };
    animate();

    // 8. Handle Window Resize
    const handleResize = () => {
      if (!container) return;
      const newW = container.clientWidth;
      const newH = container.clientHeight;
      if (newW === 0 || newH === 0) return;
      camera.aspect = newW / newH;
      camera.updateProjectionMatrix();
      renderer.setSize(newW, newH);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      pmremGenerator.dispose();
      envMap.dispose();
      if (container && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      geometry.dispose();
      glassMaterial.dispose();
      fresnelShaderMaterial.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0 rounded-[42px] overflow-hidden"
    />
  );
}
