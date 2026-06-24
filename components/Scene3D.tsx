"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Environment, Stars } from "@react-three/drei";
import { useRef, useMemo, Suspense, useEffect, useState } from "react";
import * as THREE from "three";

function WireframeGlobe() {
  const meshRef = useRef<THREE.Mesh>(null);
  const { pointer } = useThree();

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x = state.clock.elapsedTime * 0.03 + pointer.y * 0.2;
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.05 + pointer.x * 0.2;
  });

  return (
    <mesh ref={meshRef} scale={3}>
      <icosahedronGeometry args={[1, 2]} />
      <meshBasicMaterial
        color="#ffffff"
        wireframe
        transparent
        opacity={0.08}
      />
    </mesh>
  );
}

function FloatingTorus() {
  const ref = useRef<THREE.Mesh>(null);
  const { pointer } = useThree();

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.x = state.clock.elapsedTime * 0.1 + pointer.y * 0.1;
    ref.current.rotation.y = state.clock.elapsedTime * 0.15 + pointer.x * 0.1;
  });

  return (
    <mesh ref={ref} position={[2.5, -0.5, -2]} scale={0.8}>
      <torusKnotGeometry args={[0.8, 0.25, 128, 16]} />
      <meshStandardMaterial
        color="#1a1a1a"
        metalness={0.95}
        roughness={0.1}
        envMapIntensity={2}
      />
    </mesh>
  );
}

function ParticleField() {
  const pointsRef = useRef<THREE.Points>(null);
  const count = 300;

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 25;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 25;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 25;
    }
    return arr;
  }, []);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.008;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.012}
        color="#ffffff"
        transparent
        opacity={0.35}
        sizeAttenuation
      />
    </points>
  );
}

function MovingGrid() {
  const ref = useRef<THREE.GridHelper>(null);

  useFrame((state) => {
    if (ref.current) {
      ref.current.position.z = (state.clock.elapsedTime * 0.5) % 2;
    }
  });

  return (
    <gridHelper
      ref={ref}
      args={[40, 40, "#1a1a1a", "#0d0d0d"]}
      position={[0, -4, 0]}
      rotation={[0, 0, 0]}
    />
  );
}

export default function Scene3D() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="hero-canvas">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 50 }}
        dpr={[1, isMobile ? 1 : 1.5]}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.2} />
          <directionalLight position={[5, 5, 5]} intensity={0.5} />
          <pointLight position={[-4, 3, -4]} intensity={0.3} color="#ffffff" />

          <WireframeGlobe />
          {!isMobile && <FloatingTorus />}
          <ParticleField />
          <MovingGrid />
          <Stars radius={80} depth={60} count={isMobile ? 500 : 1500} factor={2} fade speed={0.3} />

          <Environment preset="night" />
        </Suspense>
      </Canvas>
    </div>
  );
}
