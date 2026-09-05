'use client';

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface CapsuleFlow3DProps {
  className?: string;
}

export function CapsuleFlow3D({ className = '' }: CapsuleFlow3DProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let animId: number;
    let isVisible = true;

    // ── 1. Scene & Camera Setup ──
    const scene = new THREE.Scene();

    const getDimensions = () => ({
      w: container.clientWidth || 1000,
      h: container.clientHeight || 400,
    });

    let { w, h } = getDimensions();

    const camera = new THREE.PerspectiveCamera(42, w / h, 0.1, 100);
    camera.position.set(0, 0, 15);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(w, h);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.domElement.style.position = 'absolute';
    renderer.domElement.style.top = '0';
    renderer.domElement.style.left = '0';
    renderer.domElement.style.width = '100%';
    renderer.domElement.style.height = '100%';
    renderer.domElement.style.pointerEvents = 'auto';

    container.appendChild(renderer.domElement);

    // ── 2. Cinematic Pharmaceutical Lighting ──
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.9);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffffff, 1.8);
    keyLight.position.set(12, 16, 14);
    scene.add(keyLight);

    const rimLight = new THREE.DirectionalLight(0xffd5b3, 1.1);
    rimLight.position.set(-12, -8, -5);
    scene.add(rimLight);

    // Interactive cursor point light
    const cursorLight = new THREE.PointLight(0xffedd5, 35, 18);
    cursorLight.position.set(-999, -999, 5);
    scene.add(cursorLight);

    // ── 3. Shared High-Grade Geometries & Materials ──
    // Shared geometries to maximize performance & reduce draw-calls
    const capRadius = 0.42;
    const cylHeight = 0.52;
    const cylGeo = new THREE.CylinderGeometry(capRadius, capRadius, cylHeight, 24);
    const topDomeGeo = new THREE.SphereGeometry(
      capRadius,
      24,
      14,
      0,
      Math.PI * 2,
      0,
      Math.PI / 2
    );
    const botDomeGeo = new THREE.SphereGeometry(
      capRadius,
      24,
      14,
      0,
      Math.PI * 2,
      Math.PI / 2,
      Math.PI / 2
    );
    const ringGeo = new THREE.CylinderGeometry(
      capRadius + 0.015,
      capRadius + 0.015,
      0.045,
      24
    );

    // Medical Materials
    const matOrange = new THREE.MeshStandardMaterial({
      color: '#ff5e00',
      roughness: 0.15,
      metalness: 0.1,
      emissive: '#e64a00',
      emissiveIntensity: 0.05,
    });

    const matWhite = new THREE.MeshStandardMaterial({
      color: '#ffffff',
      roughness: 0.12,
      metalness: 0.06,
    });

    const matAmber = new THREE.MeshStandardMaterial({
      color: '#f59e0b',
      roughness: 0.18,
      metalness: 0.1,
      emissive: '#d97706',
      emissiveIntensity: 0.04,
    });

    const matTeal = new THREE.MeshStandardMaterial({
      color: '#0f9d8f',
      roughness: 0.16,
      metalness: 0.1,
      emissive: '#0b7d72',
      emissiveIntensity: 0.05,
    });

    const matRing = new THREE.MeshStandardMaterial({
      color: '#e2e8f0',
      roughness: 0.2,
      metalness: 0.6,
    });

    const colorVariants = [
      { top: matOrange, bot: matWhite }, // Zelnex Signature Orange & White
      { top: matWhite, bot: matOrange }, // Inverted Orange & White
      { top: matWhite, bot: matWhite },  // Clinical Pure White Solid
      { top: matTeal, bot: matWhite },   // Medical Teal & White
      { top: matAmber, bot: matWhite },  // Amber Gelcap & White
    ];

    function createTwoToneCapsule(variantIdx: number) {
      const group = new THREE.Group();
      const { top, bot } = colorVariants[variantIdx % colorVariants.length];

      // Top Half
      const topCyl = new THREE.Mesh(cylGeo, top);
      topCyl.position.y = cylHeight / 2;
      group.add(topCyl);

      const topDome = new THREE.Mesh(topDomeGeo, top);
      topDome.position.y = cylHeight;
      group.add(topDome);

      // Bottom Half
      const botCyl = new THREE.Mesh(cylGeo, bot);
      botCyl.position.y = -cylHeight / 2;
      group.add(botCyl);

      const botDome = new THREE.Mesh(botDomeGeo, bot);
      botDome.position.y = -cylHeight;
      group.add(botDome);

      // Center Join Seam Ring
      const ring = new THREE.Mesh(ringGeo, matRing);
      ring.position.y = 0;
      group.add(ring);

      return group;
    }

    // ── 4. Capsule Flow Physics & Configuration (From test.html) ──
    const config = {
      particleCount: 95,       // Rich river density while keeping 60 FPS
      flowSpeed: 0.038,        // Speed of the river flow
      arcCurvature: 2.2,       // Height of the S-curve wave
      waveFrequency: 0.2,      // Sine wave frequency across the card
      riverWidth: 3.5,         // Vertical thickness of the flow
      depthSpread: 7.0,        // 3D parallax depth
      baseScale: 0.52,         // Size of capsules
      cursorRadius: 3.4,       // Proximity radius where cursor repels capsules
      repulsionStrength: 0.18, // Push force away from cursor
      damping: 0.91,           // Friction return to baseline
    };

    interface CapsuleNode {
      group: THREE.Group;
      xProgress: number;
      yOffset: number;
      zOffset: number;
      rotSpeedX: number;
      rotSpeedY: number;
      rotSpeedZ: number;
      velocityX: number;
      velocityY: number;
      velocityZ: number;
    }

    const capsules: CapsuleNode[] = [];

    // Distribute particles across the S-curve path
    for (let i = 0; i < config.particleCount; i++) {
      const capsuleGroup = createTwoToneCapsule(i);

      // Individual scale variance
      const scale = config.baseScale * (0.65 + Math.random() * 0.7);
      capsuleGroup.scale.set(scale, scale, scale);

      // Distribute from off-screen left to off-screen right
      const initX = -18 + Math.random() * 38;

      const node: CapsuleNode = {
        group: capsuleGroup,
        xProgress: initX,
        yOffset: Math.random() - 0.5,
        zOffset: Math.random() - 0.5,
        rotSpeedX: (Math.random() - 0.5) * 0.04,
        rotSpeedY: (Math.random() - 0.5) * 0.04,
        rotSpeedZ: (Math.random() - 0.5) * 0.04,
        velocityX: 0,
        velocityY: 0,
        velocityZ: 0,
      };

      capsuleGroup.rotation.set(
        Math.random() * Math.PI * 2,
        Math.random() * Math.PI * 2,
        Math.random() * Math.PI * 2
      );

      scene.add(capsuleGroup);
      capsules.push(node);
    }

    // ── 5. Mouse Interaction & Raycasting (test.html system) ──
    const mouse = new THREE.Vector2(-100, -100);
    const mouseWorldPos = new THREE.Vector3(-999, -999, 0);
    const raycaster = new THREE.Raycaster();
    const plane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0);

    const onMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);
      raycaster.ray.intersectPlane(plane, mouseWorldPos);

      cursorLight.position.copy(mouseWorldPos);
      cursorLight.position.z = 2.5;
    };

    const onMouseLeave = () => {
      mouseWorldPos.set(-999, -999, 0);
      cursorLight.position.set(-999, -999, 5);
    };

    container.addEventListener('mousemove', onMouseMove);
    container.addEventListener('mouseleave', onMouseLeave);

    // ── 6. Visibility Observer (Pause when off-screen) ──
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
      },
      { threshold: 0.05 }
    );
    observer.observe(container);

    // ── 7. Animation Loop ──
    const animate = () => {
      animId = requestAnimationFrame(animate);

      if (!isVisible) return;

      for (let i = 0; i < capsules.length; i++) {
        const c = capsules[i];

        // Advance along the X axis
        c.xProgress += config.flowSpeed;

        // Wave formula from test.html: S-Curve along the flow
        const targetY =
          Math.sin(c.xProgress * config.waveFrequency) * config.arcCurvature;
        const finalY = targetY + c.yOffset * config.riverWidth;
        const finalZ = c.zOffset * config.depthSpread;

        // Physics Cursor Repulsion
        const dist = c.group.position.distanceTo(mouseWorldPos);
        if (dist < config.cursorRadius) {
          const forceDir = new THREE.Vector3()
            .subVectors(c.group.position, mouseWorldPos)
            .normalize();
          const forceMultiplier =
            (config.cursorRadius - dist) / config.cursorRadius;

          c.velocityX +=
            forceDir.x * config.repulsionStrength * forceMultiplier;
          c.velocityY +=
            forceDir.y * config.repulsionStrength * forceMultiplier;
          c.velocityZ +=
            forceDir.z * config.repulsionStrength * forceMultiplier;
        }

        // Apply Damping (Friction)
        c.velocityX *= config.damping;
        c.velocityY *= config.damping;
        c.velocityZ *= config.damping;

        // Set Position
        c.group.position.set(
          c.xProgress + c.velocityX,
          finalY + c.velocityY,
          finalZ + c.velocityZ
        );

        // Tumbling Rotation
        c.group.rotation.x += c.rotSpeedX;
        c.group.rotation.y += c.rotSpeedY;
        c.group.rotation.z += c.rotSpeedZ;

        // Infinite Recycling: Loop back from right edge to off-screen left
        if (c.xProgress > 21) {
          c.xProgress = -18 - Math.random() * 5;
          c.velocityX = 0;
          c.velocityY = 0;
          c.velocityZ = 0;
        }
      }

      renderer.render(scene, camera);
    };

    animate();

    // ── 8. Dynamic Resizing ──
    const onResize = () => {
      const dims = getDimensions();
      w = dims.w;
      h = dims.h;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    const resizeObserver = new ResizeObserver(onResize);
    resizeObserver.observe(container);

    // ── 9. Cleanup on Unmount ──
    return () => {
      cancelAnimationFrame(animId);
      observer.disconnect();
      resizeObserver.disconnect();
      container.removeEventListener('mousemove', onMouseMove);
      container.removeEventListener('mouseleave', onMouseLeave);

      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }

      renderer.dispose();
      cylGeo.dispose();
      topDomeGeo.dispose();
      botDomeGeo.dispose();
      ringGeo.dispose();
      matOrange.dispose();
      matWhite.dispose();
      matAmber.dispose();
      matTeal.dispose();
      matRing.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-full overflow-hidden ${className}`}
      style={{ touchAction: 'none' }}
    />
  );
}
