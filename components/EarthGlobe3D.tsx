"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import Image from "next/image";
import { ShieldCheck, RotateCcw } from "lucide-react";

export interface MarketLocation {
  name: string;
  region: string;
  lat: number;
  lng: number;
  status: string;
  volume: string;
  products: string;
}

export const GLOBAL_MARKETS: MarketLocation[] = [
  { name: "India", region: "Global Manufacturing Hub", lat: 20.5937, lng: 78.9629, status: "HQ & Production Center", volume: "800+ Products Active", products: "Tablets, Injectables, Vials, Syrups" },
  { name: "Kenya", region: "East Africa", lat: -1.2921, lng: 36.8219, status: "Active Distribution Network", volume: "45+ Formulations", products: "Antibiotics, Anti-Malarials, Analgesics" },
  { name: "Nigeria", region: "West Africa", lat: 9.082, lng: 8.6753, status: "Authorized Sourcing Center", volume: "60+ Formulations", products: "Cardiovascular, Cephalosporins, Nutra" },
  { name: "Ghana", region: "West Africa", lat: 7.9465, lng: -1.0232, status: "Active Distribution Network", volume: "35+ Formulations", products: "Anti-Infectives, Gastro, Multivitamins" },
  { name: "Uganda", region: "East Africa", lat: 1.3733, lng: 32.2903, status: "Market Cleared & Registered", volume: "28+ Formulations", products: "Sterile Injectables, Oral Liquids" },
  { name: "Ivory Coast", region: "West Africa", lat: 7.54, lng: -5.5471, status: "Direct Importer Network", volume: "30+ Formulations", products: "Antibiotics, Pain Relievers, Derma" },
  { name: "Congo", region: "Central Africa", lat: -4.0383, lng: 21.7587, status: "Active Distribution Network", volume: "22+ Formulations", products: "Anti-Malarials, Syrups, Softgels" },
  { name: "Sudan", region: "North Africa", lat: 12.8628, lng: 30.2176, status: "MOH Tender Cleared", volume: "18+ Formulations", products: "Critical Care Vials, Tablets" },
  { name: "Zambia", region: "Southern Africa", lat: -13.1339, lng: 27.8493, status: "Active Distribution Network", volume: "25+ Formulations", products: "Essential Generic Formulations" },
  { name: "Iraq", region: "Middle East", lat: 33.2232, lng: 43.6793, status: "MOH Registered Partner", volume: "50+ Formulations", products: "Cardiology, Oncology generics, CNS" },
  { name: "Yemen", region: "Middle East", lat: 15.5527, lng: 48.5164, status: "Active Distribution Network", volume: "40+ Formulations", products: "Antibiotics, Infusion fluids, Pain" },
  { name: "Afghanistan", region: "Central Asia", lat: 33.9391, lng: 67.71, status: "Import Partner Network", volume: "32+ Formulations", products: "Pediatric Drops, Anti-Infectives" },
  { name: "Sri Lanka", region: "South Asia", lat: 7.8731, lng: 80.7718, status: "Active Distribution Network", volume: "55+ Formulations", products: "Complete Solid Dosage Formats" },
  { name: "Myanmar", region: "Southeast Asia", lat: 21.9162, lng: 95.956, status: "Market Cleared & Registered", volume: "38+ Formulations", products: "Dermatology, Antibacterial, Nutra" },
  { name: "Cambodia", region: "Southeast Asia", lat: 12.5657, lng: 104.991, status: "Active Distribution Network", volume: "30+ Formulations", products: "Oral Suspension, Blister Tablets" },
  { name: "Vietnam", region: "Southeast Asia", lat: 14.0583, lng: 108.2772, status: "Authorized Sourcing Center", volume: "65+ Formulations", products: "Injectables, Lyophilized Vials, Tabs" },
  { name: "Mauritius", region: "Indian Ocean", lat: -20.3484, lng: 57.5522, status: "Active Distribution Network", volume: "20+ Formulations", products: "Cardio, Gastro, OTC generics" },
];

function latLngToVector3(lat: number, lng: number, radius: number): THREE.Vector3 {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lng + 180) * (Math.PI / 180);
  const x = -(radius * Math.sin(phi) * Math.cos(theta));
  const z = radius * Math.sin(phi) * Math.sin(theta);
  const y = radius * Math.cos(phi);
  return new THREE.Vector3(x, y, z);
}

export function EarthGlobe3D({
  onSelectMarket,
  selectedMarket,
}: {
  onSelectMarket?: (market: MarketLocation | null) => void;
  selectedMarket?: MarketLocation | null;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredMarket, setHoveredMarket] = useState<MarketLocation | null>(null);
  const [autoRotate, setAutoRotate] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);
  const controlsRef = useRef<OrbitControls | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);

  const handleResetCamera = () => {
    if (!cameraRef.current || !controlsRef.current) return;
    cameraRef.current.position.set(0, 0.45, 3.4);
    controlsRef.current.target.set(0, 0, 0);
    controlsRef.current.update();
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight || 700;

    // 1. Scene Setup
    const scene = new THREE.Scene();

    // 2. Camera Setup (Centered Spherical View with zero boundary clipping)
    const camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 1000);
    camera.position.set(0, 0.45, 3.4);
    cameraRef.current = camera;

    // 3. WebGL Renderer with High Performance & Alpha
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    container.appendChild(renderer.domElement);

    // 4. OrbitControls (Smooth Drag Rotation, NO intrusive wheel zoom hijack)
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.rotateSpeed = 0.6;
    controls.enableZoom = false; // Disable disruptive mouse wheel zoom so it never gets stuck in a square box!
    controls.enablePan = false;  // Keep the globe naturally centered
    controls.autoRotate = autoRotate;
    controls.autoRotateSpeed = 0.55;
    controlsRef.current = controls;

    // 5. Lighting Setup - Natural Clean Daylight
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.4);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, 1.8);
    dirLight.position.set(5, 4, 4);
    scene.add(dirLight);

    const rimLight = new THREE.DirectionalLight(0x00e1ff, 0.8);
    rimLight.position.set(-4, -2, -3);
    scene.add(rimLight);

    const hemiLight = new THREE.HemisphereLight(0xffffff, 0xd0e8ff, 0.6);
    scene.add(hemiLight);

    // 6. Earth Geometry & High-Res Texture with LoadingManager
    const globeRadius = 1.32;
    const loadingManager = new THREE.LoadingManager(() => {
      setIsLoaded(true);
    });
    const textureLoader = new THREE.TextureLoader(loadingManager);

    const earthMap = textureLoader.load(
      "https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
    );
    earthMap.colorSpace = THREE.SRGBColorSpace;

    const bumpMap = textureLoader.load(
      "https://unpkg.com/three-globe/example/img/earth-topology.png"
    );

    const specularMap = textureLoader.load(
      "https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_specular_2048.jpg"
    );

    // Earth Sphere Mesh
    const earthGeometry = new THREE.SphereGeometry(globeRadius, 64, 64);
    const earthMaterial = new THREE.MeshStandardMaterial({
      map: earthMap,
      bumpMap: bumpMap,
      bumpScale: 0.035,
      roughnessMap: specularMap,
      roughness: 0.42,
      metalness: 0.05,
    });
    const earthMesh = new THREE.Mesh(earthGeometry, earthMaterial);
    earthMesh.position.set(0, 0, 0);
    scene.add(earthMesh);

    // 7. Atmospheric Clouds Layer
    const cloudsMap = textureLoader.load(
      "https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_clouds_1024.png"
    );
    const cloudsGeometry = new THREE.SphereGeometry(globeRadius * 1.018, 64, 64);
    const cloudsMaterial = new THREE.MeshStandardMaterial({
      alphaMap: cloudsMap,
      transparent: true,
      opacity: 0.4,
      blending: THREE.AdditiveBlending,
      color: 0xffffff,
      depthWrite: false,
    });
    const cloudsMesh = new THREE.Mesh(cloudsGeometry, cloudsMaterial);
    cloudsMesh.position.copy(earthMesh.position);
    scene.add(cloudsMesh);

    // 8. Outer Atmospheric Cyan-White Fresnel Glow Corona
    const atmosphereGeometry = new THREE.SphereGeometry(globeRadius * 1.12, 48, 48);
    const atmosphereMaterial = new THREE.ShaderMaterial({
      vertexShader: `
        varying vec3 vNormal;
        void main() {
          vNormal = normalize(normalMatrix * normal);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        varying vec3 vNormal;
        void main() {
          float intensity = pow(0.60 - dot(vNormal, vec3(0, 0, 1.0)), 2.2);
          gl_FragColor = vec4(0.0, 0.75, 1.0, 1.0) * intensity * 0.7;
        }
      `,
      blending: THREE.AdditiveBlending,
      side: THREE.BackSide,
      transparent: true,
      depthWrite: false,
    });
    const atmosphereMesh = new THREE.Mesh(atmosphereGeometry, atmosphereMaterial);
    atmosphereMesh.position.copy(earthMesh.position);
    scene.add(atmosphereMesh);

    // 9. Market Pins & 3D Transit Arcs Group
    const markersGroup = new THREE.Group();
    earthMesh.add(markersGroup);

    const pinMeshes: { mesh: THREE.Mesh; ring: THREE.Mesh; market: MarketLocation }[] = [];
    const indiaPos = latLngToVector3(20.5937, 78.9629, globeRadius);

    const packetData: { mesh: THREE.Mesh; curve: THREE.QuadraticBezierCurve3; speed: number; progress: number }[] = [];

    GLOBAL_MARKETS.forEach((market) => {
      const isIndia = market.name === "India";
      const pos = latLngToVector3(market.lat, market.lng, globeRadius);

      // Radar Ring
      const ringGeo = new THREE.RingGeometry(isIndia ? 0.026 : 0.016, isIndia ? 0.042 : 0.028, 32);
      const ringMat = new THREE.MeshBasicMaterial({
        color: isIndia ? 0xff9900 : 0x00d8f6,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.9,
      });
      const ringMesh = new THREE.Mesh(ringGeo, ringMat);
      ringMesh.position.copy(pos.clone().multiplyScalar(1.002));
      ringMesh.lookAt(pos.clone().multiplyScalar(2));
      markersGroup.add(ringMesh);

      // Center Pin Core
      const pinGeo = new THREE.SphereGeometry(isIndia ? 0.03 : 0.02, 16, 16);
      const pinMat = new THREE.MeshStandardMaterial({
        color: isIndia ? 0xffaa00 : 0x00e1ff,
        emissive: isIndia ? 0xff7700 : 0x0088ff,
        emissiveIntensity: 0.9,
        metalness: 0.6,
        roughness: 0.2,
      });
      const pinMesh = new THREE.Mesh(pinGeo, pinMat);
      pinMesh.position.copy(pos.clone().multiplyScalar(1.006));
      markersGroup.add(pinMesh);

      pinMeshes.push({ mesh: pinMesh, ring: ringMesh, market });

      // Curved Flight Transit Arcs from India
      if (!isIndia) {
        const midPoint = new THREE.Vector3().addVectors(indiaPos, pos).multiplyScalar(0.5);
        const distance = indiaPos.distanceTo(pos);
        const elevation = globeRadius + Math.min(0.42, distance * 0.26);
        midPoint.normalize().multiplyScalar(elevation);

        const curve = new THREE.QuadraticBezierCurve3(indiaPos, midPoint, pos);
        const points = curve.getPoints(45);
        const arcGeo = new THREE.BufferGeometry().setFromPoints(points);

        const arcMat = new THREE.LineDashedMaterial({
          color: 0x00f2fe,
          linewidth: 1.5,
          scale: 1,
          dashSize: 0.07,
          gapSize: 0.04,
          transparent: true,
          opacity: 0.75,
        });
        const arcLine = new THREE.Line(arcGeo, arcMat);
        arcLine.computeLineDistances();
        markersGroup.add(arcLine);

        // Transit Light Particle
        const packetGeo = new THREE.SphereGeometry(0.012, 12, 12);
        const packetMat = new THREE.MeshBasicMaterial({
          color: 0xffffff,
          transparent: true,
          opacity: 0.95,
        });
        const packetMesh = new THREE.Mesh(packetGeo, packetMat);
        markersGroup.add(packetMesh);

        packetData.push({
          mesh: packetMesh,
          curve: curve,
          speed: 0.2 + Math.random() * 0.15,
          progress: Math.random(),
        });
      }
    });

    // 10. Raycaster for Interactive Hover & Click
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    const handlePointerMove = (e: MouseEvent) => {
      const rect = renderer.domElement.getBoundingClientRect();
      mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);
      const targets = pinMeshes.map((p) => p.mesh);
      const intersects = raycaster.intersectObjects(targets);

      if (intersects.length > 0) {
        const hit = pinMeshes.find((p) => p.mesh === intersects[0].object);
        if (hit) {
          setHoveredMarket(hit.market);
          document.body.style.cursor = "pointer";
        }
      } else {
        setHoveredMarket(null);
        document.body.style.cursor = "default";
      }
    };

    const handleClick = () => {
      raycaster.setFromCamera(mouse, camera);
      const targets = pinMeshes.map((p) => p.mesh);
      const intersects = raycaster.intersectObjects(targets);

      if (intersects.length > 0) {
        const hit = pinMeshes.find((p) => p.mesh === intersects[0].object);
        if (hit && onSelectMarket) {
          onSelectMarket(hit.market);
        }
      }
    };

    renderer.domElement.addEventListener("mousemove", handlePointerMove);
    renderer.domElement.addEventListener("click", handleClick);

    // 11. Responsive Resize Observer
    const resizeObserver = new ResizeObserver((entries) => {
      if (!entries[0]) return;
      const { width: newW, height: newH } = entries[0].contentRect;
      camera.aspect = newW / (newH || 700);
      camera.updateProjectionMatrix();
      renderer.setSize(newW, newH || 700);
    });
    resizeObserver.observe(container);

    // 12. Animation Loop (using standard performance.now for smooth 60fps)
    let animationFrameId: number;
    let lastTime = performance.now();
    let totalTime = 0;

    const animate = () => {
      const now = performance.now();
      const delta = Math.min((now - lastTime) / 1000, 0.1);
      lastTime = now;
      totalTime += delta;

      // Rotate clouds
      cloudsMesh.rotation.y += delta * 0.016;

      // Pulse Radar Rings
      pinMeshes.forEach((p, idx) => {
        const scale = 1 + 0.3 * Math.sin(totalTime * 3 + idx);
        p.ring.scale.set(scale, scale, 1);
      });

      // Animate Light Packet Particles
      packetData.forEach((pkt) => {
        pkt.progress = (pkt.progress + delta * pkt.speed) % 1;
        const pt = pkt.curve.getPoint(pkt.progress);
        pkt.mesh.position.copy(pt);
      });

      controls.update();
      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    // 13. Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      renderer.domElement.removeEventListener("mousemove", handlePointerMove);
      renderer.domElement.removeEventListener("click", handleClick);

      earthGeometry.dispose();
      earthMaterial.dispose();
      cloudsGeometry.dispose();
      cloudsMaterial.dispose();
      atmosphereGeometry.dispose();
      atmosphereMaterial.dispose();
      renderer.dispose();

      if (container && renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [autoRotate, onSelectMarket]);

  useEffect(() => {
    if (controlsRef.current) {
      controlsRef.current.autoRotate = autoRotate;
    }
  }, [autoRotate]);

  const activeData = hoveredMarket || selectedMarket;

  return (
    <div className="relative w-full h-[480px] sm:h-[620px] md:h-[740px] flex items-center justify-center select-none">
      {/* Loading Skeleton */}
      {!isLoaded && (
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-20 animate-pulse">
          <div className="w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full bg-gradient-to-tr from-[#006EDC]/20 via-[#00B8F2]/10 to-transparent border border-[#006EDC]/30 shadow-[0_0_50px_rgba(0,110,220,0.15)] flex items-center justify-center">
            <div className="w-40 h-40 sm:w-52 sm:h-52 md:w-60 md:h-60 rounded-full bg-gradient-to-bl from-[#006EDC]/15 via-transparent to-slate-100/50 border border-white/40 animate-spin [animation-duration:8s]" />
          </div>
          <p className="mt-4 text-xs font-semibold text-slate-400 tracking-wider uppercase">
            Loading 3D Global Network...
          </p>
        </div>
      )}

      {/* 3D Canvas Mount Element */}
      <div
        ref={containerRef}
        className={`w-full h-full cursor-grab active:cursor-grabbing relative z-10 transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* ── Seamless Ethereal Fluffy Cloud Bed at Bottom of Globe (Zero Square Box Cutoff) ── */}
      <div className="pointer-events-none absolute bottom-0 inset-x-0 z-20 h-[180px] sm:h-[240px] md:h-[280px] flex items-end">
        <div className="relative w-full h-full">
          <Image
            src="/cloud-bed.jpg"
            alt="Ethereal Clouds"
            fill
            sizes="100vw"
            className="object-cover object-bottom mix-blend-multiply opacity-85"
            style={{
              maskImage: "linear-gradient(to top, black 30%, rgba(0,0,0,0.8) 60%, transparent 100%)",
              WebkitMaskImage: "linear-gradient(to top, black 30%, rgba(0,0,0,0.8) 60%, transparent 100%)",
            }}
            priority
          />
          {/* Natural atmospheric feathering to merge into section background */}
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(to bottom, transparent 0%, rgba(255,255,255,0.4) 40%, rgba(255,255,255,0.92) 80%, #ffffff 100%)",
            }}
          />
        </div>
      </div>

      {/* Floating Interactive Controls Pill */}
      <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-30 flex items-center gap-1.5 sm:gap-2 bg-white/80 backdrop-blur-md p-1 sm:p-1.5 rounded-full border border-slate-200/80 shadow-md">
        <button
          onClick={() => setAutoRotate(!autoRotate)}
          className={`px-2.5 sm:px-3 py-1 text-[11px] sm:text-xs font-bold rounded-full transition-all ${
            autoRotate ? "bg-[#006EDC] text-white shadow-xs" : "bg-slate-100 text-slate-600 hover:bg-slate-200"
          }`}
          title="Toggle Auto Rotation"
        >
          {autoRotate ? "Auto Rotating" : "Paused"}
        </button>
        <button
          onClick={handleResetCamera}
          className="p-1 sm:p-1.5 text-slate-500 hover:text-[#006EDC] hover:bg-slate-100 rounded-full transition-colors"
          title="Reset Camera View"
        >
          <RotateCcw className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Dynamic Hover/Click Inspection Card */}
      {activeData && (
        <div className="absolute top-14 right-4 sm:top-16 sm:right-6 z-40 w-[calc(100%-32px)] max-w-sm sm:w-80 rounded-2xl bg-white/95 p-4 text-[#082B61] backdrop-blur-2xl border border-slate-200 shadow-2xl animate-in fade-in zoom-in-95 duration-200">
          <div className="flex items-center justify-between pb-2.5 border-b border-slate-100 mb-2.5">
            <div className="flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#006EDC] text-white font-extrabold text-xs">
                ✦
              </span>
              <h4 className="font-display font-extrabold text-base text-[#082B61]">
                {activeData.name}
              </h4>
            </div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#006EDC] bg-[#006EDC]/10 px-2.5 py-0.5 rounded-full border border-[#006EDC]/20">
              {activeData.region}
            </span>
          </div>

          <div className="space-y-2 text-xs text-[#4A5568]">
            <p className="flex items-center justify-between">
              <span className="text-slate-500">Export Status:</span>
              <span className="font-bold text-[#082B61]">{activeData.status}</span>
            </p>
            <p className="flex items-center justify-between">
              <span className="text-slate-500">Therapeutic Volume:</span>
              <span className="font-bold text-teal">{activeData.volume}</span>
            </p>
            <p className="flex items-start justify-between gap-2">
              <span className="text-slate-500 shrink-0">Product Scope:</span>
              <span className="font-semibold text-[#082B61] text-right">{activeData.products}</span>
            </p>
            <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-[#006EDC] font-bold">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-teal" />
                <span>WHO-GMP & CTD Ready</span>
              </span>
              <span>Direct Supply →</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default EarthGlobe3D;
