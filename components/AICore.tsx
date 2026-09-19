"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Sparkles, Torus } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function NetworkNodes() {
  const groupRef = useRef<THREE.Group>(null);

  const nodes = useMemo(() => {
    return Array.from({ length: 34 }, (_, index) => {
      const phi = Math.acos(1 - (2 * (index + 0.5)) / 34);
      const theta = Math.PI * (1 + Math.sqrt(5)) * index;

      const radius = 1.85 + (index % 4) * 0.18;

      return new THREE.Vector3(
        radius * Math.sin(phi) * Math.cos(theta),
        radius * Math.cos(phi),
        radius * Math.sin(phi) * Math.sin(theta)
      );
    });
  }, []);

  useFrame((_, delta) => {
    if (!groupRef.current) return;

    groupRef.current.rotation.y += delta * 0.045;
    groupRef.current.rotation.x += delta * 0.012;
  });

  return (
    <group ref={groupRef}>
      {nodes.map((position, index) => (
        <group key={index} position={position}>
          <mesh>
            <sphereGeometry args={[index % 5 === 0 ? 0.045 : 0.025, 8, 8]} />

            <meshBasicMaterial
              color={index % 5 === 0 ? "#ff8792" : "#ff5363"}
              transparent
              opacity={index % 5 === 0 ? 0.9 : 0.55}
            />
          </mesh>

          {index % 5 === 0 && (
            <mesh scale={2.8}>
              <sphereGeometry args={[0.045, 8, 8]} />

              <meshBasicMaterial
                color="#ff5363"
                transparent
                opacity={0.08}
              />
            </mesh>
          )}
        </group>
      ))}
    </group>
  );
}

function ConnectionLines() {
  const lines = useMemo(() => {
    const result: THREE.Vector3[][] = [];

    for (let i = 0; i < 18; i++) {
      const a = new THREE.Vector3(
        (Math.random() - 0.5) * 3.8,
        (Math.random() - 0.5) * 3.8,
        (Math.random() - 0.5) * 3.8
      );

      const b = new THREE.Vector3(
        (Math.random() - 0.5) * 3.8,
        (Math.random() - 0.5) * 3.8,
        (Math.random() - 0.5) * 3.8
      );

      result.push([a, b]);
    }

    return result;
  }, []);

  return (
    <group>
      {lines.map((line, index) => {
        const geometry = new THREE.BufferGeometry().setFromPoints(line);

        return (
          <line key={index} geometry={geometry}>
            <lineBasicMaterial
              color="#ff5363"
              transparent
              opacity={0.07}
            />
          </line>
        );
      })}
    </group>
  );
}

function Core() {
  const coreRef = useRef<THREE.Group>(null);
  const nucleusRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    const time = state.clock.elapsedTime;

    if (coreRef.current) {
      coreRef.current.rotation.y += delta * 0.08;
      coreRef.current.rotation.z += delta * 0.025;
    }

    if (nucleusRef.current) {
      const pulse = 1 + Math.sin(time * 1.7) * 0.045;

      nucleusRef.current.scale.setScalar(pulse);
    }
  });

  return (
    <group ref={coreRef}>
      {/* Central nucleus */}
      <mesh ref={nucleusRef}>
        <sphereGeometry args={[0.48, 32, 32]} />

        <meshStandardMaterial
          color="#ff6977"
          emissive="#ff263f"
          emissiveIntensity={5}
          roughness={0.18}
          metalness={0.35}
        />
      </mesh>

      {/* Inner shell */}
      <mesh>
        <icosahedronGeometry args={[0.9, 2]} />

        <meshBasicMaterial
          color="#ff8792"
          wireframe
          transparent
          opacity={0.32}
        />
      </mesh>

      {/* Larger shell */}
      <mesh rotation={[0.5, 0.2, 0]}>
        <icosahedronGeometry args={[1.35, 2]} />

        <meshBasicMaterial
          color="#ff5363"
          wireframe
          transparent
          opacity={0.18}
        />
      </mesh>

      {/* Network */}
      <NetworkNodes />

      <ConnectionLines />

      {/* Orbital rings */}
      <Torus
        args={[1.7, 0.009, 8, 160]}
        rotation={[Math.PI / 2.4, 0.15, 0]}
      >
        <meshBasicMaterial
          color="#ff6875"
          transparent
          opacity={0.42}
        />
      </Torus>

      <Torus
        args={[2.05, 0.006, 8, 160]}
        rotation={[Math.PI / 3.2, 0.8, 0.3]}
      >
        <meshBasicMaterial
          color="#ff5363"
          transparent
          opacity={0.25}
        />
      </Torus>

      <Torus
        args={[2.35, 0.004, 8, 160]}
        rotation={[0.4, Math.PI / 2.5, 0.8]}
      >
        <meshBasicMaterial
          color="#ff9ca5"
          transparent
          opacity={0.16}
        />
      </Torus>

      {/* Particle field */}
      <Sparkles
        count={140}
        scale={[5.5, 5.5, 5.5]}
        size={1.2}
        speed={0.18}
        color="#ff7884"
      />
    </group>
  );
}

export default function AICore() {
  return (
    <div className="relative h-[420px] w-full md:h-[560px]">
      {/* Atmospheric glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[340px] w-[340px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ff334d]/10 blur-[100px]" />

      <Canvas
        camera={{
          position: [0, 0, 6.8],
          fov: 42,
        }}
        dpr={[1, 2]}
      >
        <ambientLight intensity={0.12} />

        <pointLight
          color="#ff334d"
          intensity={28}
          distance={7}
        />

        <pointLight
          color="#ff9ca5"
          intensity={8}
          distance={5}
          position={[2, 2, 2]}
        />

        <directionalLight
          position={[3, 3, 4]}
          intensity={1.2}
          color="#ffb8bd"
        />

        <Float
          speed={0.8}
          rotationIntensity={0.08}
          floatIntensity={0.2}
        >
          <Core />
        </Float>
      </Canvas>

      {/* Small identity label */}
      <div className="pointer-events-none absolute bottom-5 left-1/2 -translate-x-1/2">
        <div className="flex items-center gap-2 whitespace-nowrap">
          <span className="h-1.5 w-1.5 rounded-full bg-[#ff5363] shadow-[0_0_12px_#ff5363]" />

          <span className="text-[9px] uppercase tracking-[0.32em] text-white/25">
            exploring intelligent systems
          </span>
        </div>
      </div>
    </div>
  );
}