"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export function FloatingPills({ active }: { active: boolean }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!active || !containerRef.current) return;

    const container = containerRef.current;

    const getDimensions = () => {
      const rect = container.getBoundingClientRect();
      return {
        w: rect.width || window.innerWidth,
        h: rect.height || window.innerHeight,
      };
    };

    let { w, h } = getDimensions();

    // 1. SCENE SETUP
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2('#0b1e48', 0.022);

    const camera = new THREE.PerspectiveCamera(45, w / h, 0.1, 100);
    camera.position.set(0, 0, 16);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(w, h);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    renderer.domElement.style.position = "absolute";
    renderer.domElement.style.top = "0";
    renderer.domElement.style.left = "0";
    renderer.domElement.style.width = "100%";
    renderer.domElement.style.height = "100%";
    renderer.domElement.style.pointerEvents = "none";

    container.appendChild(renderer.domElement);

    // 2. LIGHTING & ATMOSPHERE
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.85);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffffff, 1.4);
    keyLight.position.set(10, 15, 12);
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0x00bfb5, 0.8);
    fillLight.position.set(-10, -10, -5);
    scene.add(fillLight);

    const cursorLight = new THREE.PointLight(0x00f2fe, 50, 20);
    cursorLight.position.set(0, 0, 5);
    scene.add(cursorLight);

    // 3. TWO-TONE 3D PHARMA CAPSULES GENERATOR
    // Builds hyper-realistic 2-tone capsules (half colored / half white or gold)
    function createTwoToneCapsule(color1: string, color2: string) {
      const group = new THREE.Group();

      const mat1 = new THREE.MeshStandardMaterial({
        color: color1,
        roughness: 0.12,
        metalness: 0.2,
        emissive: color1,
        emissiveIntensity: 0.08,
      });

      const mat2 = new THREE.MeshStandardMaterial({
        color: color2,
        roughness: 0.1,
        metalness: 0.15,
        emissive: color2,
        emissiveIntensity: 0.05,
      });

      // Top Half Dome + Cylinder
      const topGeo = new THREE.CylinderGeometry(0.5, 0.5, 0.6, 24, 1, false);
      const topDomeGeo = new THREE.SphereGeometry(0.5, 24, 16, 0, Math.PI * 2, 0, Math.PI / 2);

      const topMesh = new THREE.Mesh(topGeo, mat1);
      topMesh.position.y = 0.3;
      group.add(topMesh);

      const topDome = new THREE.Mesh(topDomeGeo, mat1);
      topDome.position.y = 0.6;
      group.add(topDome);

      // Bottom Half Dome + Cylinder
      const botGeo = new THREE.CylinderGeometry(0.5, 0.5, 0.6, 24, 1, false);
      const botDomeGeo = new THREE.SphereGeometry(0.5, 24, 16, 0, Math.PI * 2, Math.PI / 2, Math.PI / 2);

      const botMesh = new THREE.Mesh(botGeo, mat2);
      botMesh.position.y = -0.3;
      group.add(botMesh);

      const botDome = new THREE.Mesh(botDomeGeo, mat2);
      botDome.position.y = -0.6;
      group.add(botDome);

      return group;
    }

    const colorPairs = [
      { c1: '#00e5ff', c2: '#ffffff' }, // Teal & White
      { c1: '#00bfb5', c2: '#132a5c' }, // Teal & Navy
      { c1: '#ffffff', c2: '#0b1e48' }, // White & Deep Navy
      { c1: '#38ef7d', c2: '#ffffff' }, // Mint Green & White
      { c1: '#00bfb5', c2: '#ffffff' }, // Cyan & White
    ];

    const numCapsules = 55;
    const capsulesData: any[] = [];

    // Spread across entire section width and height
    for (let i = 0; i < numCapsules; i++) {
      const pair = colorPairs[i % colorPairs.length];
      const capsuleGroup = createTwoToneCapsule(pair.c1, pair.c2);

      const baseScale = 0.45 + Math.random() * 0.55;
      capsuleGroup.scale.set(baseScale, baseScale, baseScale);

      // Random starting coordinates across full viewport field
      const initX = (Math.random() - 0.5) * 36;
      const initY = (Math.random() - 0.5) * 18;
      const initZ = (Math.random() - 0.5) * 12 - 2;

      capsuleGroup.position.set(initX, initY, initZ);
      capsuleGroup.rotation.set(
        Math.random() * Math.PI * 2,
        Math.random() * Math.PI * 2,
        Math.random() * Math.PI * 2
      );

      scene.add(capsuleGroup);

      capsulesData.push({
        group: capsuleGroup,
        baseX: initX,
        baseY: initY,
        baseZ: initZ,
        phase: Math.random() * Math.PI * 2,
        floatSpeed: 0.4 + Math.random() * 0.6,
        rotSpeedX: (Math.random() - 0.5) * 0.02,
        rotSpeedY: (Math.random() - 0.5) * 0.02,
        rotSpeedZ: (Math.random() - 0.5) * 0.02,
        vx: 0,
        vy: 0,
        vz: 0,
      });
    }

    // 4. MOUSE PARALLAX & CURSOR PHYSICS
    const targetMouse = { x: 0, y: 0 };
    const currentMouse = { x: 0, y: 0 };
    const mouse3D = new THREE.Vector3(-9999, -9999, 0);

    const raycaster = new THREE.Raycaster();
    const plane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0);

    const onMouseMove = (e: MouseEvent) => {
      const r = container.getBoundingClientRect();
      const nx = ((e.clientX - r.left) / r.width) * 2 - 1;
      const ny = -((e.clientY - r.top) / r.height) * 2 + 1;

      targetMouse.x = nx;
      targetMouse.y = ny;
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });

    // 5. ANIMATION LOOP WITH ORYZO PARALLAX & DRIFT
    let animId: number;
    const startTime = performance.now();

    const animate = () => {
      const elapsed = (performance.now() - startTime) / 1000;

      // Lerp mouse for ultra-smooth camera parallax
      currentMouse.x += (targetMouse.x - currentMouse.x) * 0.05;
      currentMouse.y += (targetMouse.y - currentMouse.y) * 0.05;

      // Camera drift based on mouse (Oryzo.ai style)
      camera.position.x = currentMouse.x * 2.2;
      camera.position.y = currentMouse.y * 1.5;
      camera.lookAt(0, 0, 0);

      // Project mouse into 3D space for repulsion physics
      raycaster.setFromCamera(new THREE.Vector2(currentMouse.x, currentMouse.y), camera);
      const intersects = raycaster.ray.intersectPlane(plane, mouse3D);

      if (intersects) {
        cursorLight.position.copy(mouse3D);
        cursorLight.position.z = 4;
      }

      // Animate each 3D capsule
      capsulesData.forEach((cap) => {
        // Micro-gravity sine float
        const timeOffset = elapsed * cap.floatSpeed + cap.phase;
        const targetY = cap.baseY + Math.sin(timeOffset) * 0.7;
        const targetX = cap.baseX + Math.cos(timeOffset * 0.8) * 0.4;

        // Apply friction/damping to velocity
        cap.vx *= 0.92;
        cap.vy *= 0.92;
        cap.vz *= 0.92;

        // Spring force pulling back to base orbit
        cap.vx += (targetX - cap.group.position.x) * 0.015;
        cap.vy += (targetY - cap.group.position.y) * 0.015;
        cap.vz += (cap.baseZ - cap.group.position.z) * 0.015;

        // Cursor Repulsion Force (pushes capsules away dynamically)
        if (intersects) {
          const dx = cap.group.position.x - mouse3D.x;
          const dy = cap.group.position.y - mouse3D.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          const radius = 5.0;
          if (dist < radius && dist > 0.01) {
            const force = (1 - dist / radius) * 0.18;
            cap.vx += (dx / dist) * force;
            cap.vy += (dy / dist) * force;
            cap.vz += (Math.random() - 0.5) * force;
          }
        }

        // Update position
        cap.group.position.x += cap.vx;
        cap.group.position.y += cap.vy;
        cap.group.position.z += cap.vz;

        // Continuous tumbling rotation
        cap.group.rotation.x += cap.rotSpeedX;
        cap.group.rotation.y += cap.rotSpeedY;
        cap.group.rotation.z += cap.rotSpeedZ;
      });

      renderer.render(scene, camera);
      animId = requestAnimationFrame(animate);
    };

    animate();

    // 6. RESIZE HANDLER
    const onResize = () => {
      const dim = getDimensions();
      camera.aspect = dim.w / dim.h;
      camera.updateProjectionMatrix();
      renderer.setSize(dim.w, dim.h);
    };

    window.addEventListener("resize", onResize);

    // 7. CLEANUP
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(animId);

      if (container && renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }

      scene.traverse((obj) => {
        if (obj instanceof THREE.Mesh) {
          obj.geometry.dispose();
          if (Array.isArray(obj.material)) {
            obj.material.forEach((m) => m.dispose());
          } else {
            obj.material.dispose();
          }
        }
      });
      renderer.dispose();
    };
  }, [active]);

  if (!active) {
    return (
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at center, rgba(0, 191, 181, 0.25) 0%, rgba(11, 30, 72, 0) 70%)",
        }}
      >
        <style>{`
          @keyframes floatCapsuleAnim {
            0% { transform: translateY(0) rotate(0deg); }
            100% { transform: translateY(-25px) rotate(20deg); }
          }
        `}</style>
        {/* CSS Fallback Capsules */}
        <div
          className="absolute top-[15%] left-[8%] w-[110px] h-[45px] rounded-[50px] bg-gradient-to-r from-[#00e5ff] via-[#00bfb5] to-white opacity-80 shadow-2xl"
          style={{ animation: "floatCapsuleAnim 6s alternate infinite" }}
        />
        <div
          className="absolute top-[55%] left-[18%] w-[120px] h-[48px] rounded-[50px] bg-gradient-to-r from-white to-[#132a5c] opacity-70 shadow-2xl"
          style={{ animation: "floatCapsuleAnim 5.5s alternate infinite 1s" }}
        />
        <div
          className="absolute top-[25%] right-[12%] w-[100px] h-[40px] rounded-[50px] bg-gradient-to-r from-[#00bfb5] to-[#0b1e48] opacity-85 border border-[#00e5ff]/50 shadow-2xl"
          style={{ animation: "floatCapsuleAnim 7s alternate infinite 0.5s" }}
        />
        <div
          className="absolute top-[70%] right-[15%] w-[130px] h-[52px] rounded-[50px] bg-gradient-to-r from-[#38ef7d] to-white opacity-75 shadow-2xl"
          style={{ animation: "floatCapsuleAnim 8s alternate infinite 2s" }}
        />
        <div
          className="absolute top-[40%] left-[45%] w-[90px] h-[36px] rounded-[50px] bg-gradient-to-r from-white to-[#00e5ff] opacity-60 shadow-2xl"
          style={{ animation: "floatCapsuleAnim 4.8s alternate infinite 1.5s" }}
        />
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none z-0 overflow-hidden"
    />
  );
}
