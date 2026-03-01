import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, RoundedBox, Float } from '@react-three/drei';
import * as THREE from 'three';

const SegmentedC = () => {
    const groupRef = useRef<THREE.Group>(null);

    // Rotating slightly over time
    useFrame((state, delta) => {
        if (groupRef.current) {
            // Slowly rotating on its own
            groupRef.current.rotation.y += delta * 0.25;
            // Add a very subtle bobbing
            groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 1.5) * 0.1 - 0.2;
        }
    });

    return (
        <group ref={groupRef} position={[0, -0.2, 0]} scale={1.8}>
            {/* Top Segment - Green Glassy/Glowing */}
            <RoundedBox args={[1.4, 0.5, 0.5]} radius={0.12} position={[0.25, 0.9, 0]}>
                <meshStandardMaterial
                    color="#10b981"
                    emissive="#047857"
                    emissiveIntensity={0.8}
                    roughness={0.1}
                    metalness={0.8}
                />
            </RoundedBox>

            {/* Top Left small connector chunk - Green */}
            <RoundedBox args={[0.5, 0.5, 0.5]} radius={0.1} position={[-0.2, 0.9, 0]}>
                <meshStandardMaterial
                    color="#34d399"
                    emissive="#10b981"
                    emissiveIntensity={1.0}
                    roughness={0.1}
                    metalness={0.6}
                />
            </RoundedBox>

            {/* Left Segment - Grey Metallic */}
            <RoundedBox args={[0.5, 1.4, 0.5]} radius={0.12} position={[-0.2, 0, 0]}>
                <meshStandardMaterial
                    color="#4b5563"
                    roughness={0.4}
                    metalness={0.8}
                />
            </RoundedBox>

            {/* Bottom Segment - Dark Metallic */}
            <RoundedBox args={[1.4, 0.5, 0.5]} radius={0.12} position={[0.25, -0.9, 0]}>
                <meshStandardMaterial
                    color="#1f2937"
                    roughness={0.3}
                    metalness={0.9}
                />
            </RoundedBox>
        </group>
    );
}

export const ThreeDLogoWidget = () => {
    return (
        <div className="w-full h-full relative cursor-grab active:cursor-grabbing">
            {/* Setting precise transparent styling to ensure no white flash */}
            <Canvas
                camera={{ position: [0, 0, 5], fov: 55 }}
                gl={{ alpha: true, antialias: true }}
                style={{ background: 'transparent' }}
            >
                {/* Clean, high-performance lighting setup */}
                <ambientLight intensity={1.5} color="#ffffff" />
                <directionalLight position={[5, 10, 5]} intensity={2.5} color="#ffffff" />
                <directionalLight position={[-5, -5, -5]} intensity={1.0} color="#10b981" />
                <pointLight position={[0, 0, 5]} intensity={1.5} color="#34d399" />

                <Float speed={2.0} rotationIntensity={0.5} floatIntensity={1.0}>
                    <SegmentedC />
                </Float>

                <OrbitControls
                    enableZoom={false}
                    enablePan={false}
                    autoRotate={true}
                    autoRotateSpeed={1.5}
                    minPolarAngle={Math.PI / 3}
                    maxPolarAngle={Math.PI / 1.5}
                />
            </Canvas>
        </div>
    )
}
