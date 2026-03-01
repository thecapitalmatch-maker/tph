import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, RoundedBox, Environment, Float, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';

const SegmentedC = () => {
    const groupRef = useRef<THREE.Group>(null);

    // Rotating slightly over time
    useFrame((state, delta) => {
        if (groupRef.current) {
            // Slowly rotating on its own
            groupRef.current.rotation.y += delta * 0.2;
        }
    });

    return (
        <group ref={groupRef} position={[0, -0.2, 0]} scale={1.8}>
            {/* Top Segment - Green Glassy/Glowing */}
            <RoundedBox args={[1.4, 0.5, 0.5]} radius={0.12} position={[0.25, 0.9, 0]}>
                <meshPhysicalMaterial
                    color="#10b981"
                    emissive="#047857"
                    emissiveIntensity={0.6}
                    roughness={0.05}
                    metalness={0.1}
                    transmission={0.9}
                    thickness={0.5}
                    clearcoat={1}
                />
            </RoundedBox>

            {/* Top Left small connector chunk - Green */}
            <RoundedBox args={[0.5, 0.5, 0.5]} radius={0.1} position={[-0.2, 0.9, 0]}>
                <meshPhysicalMaterial
                    color="#34d399"
                    emissive="#10b981"
                    emissiveIntensity={0.8}
                    roughness={0.1}
                    metalness={0.1}
                    transmission={0.9}
                    thickness={0.5}
                />
            </RoundedBox>

            {/* Left Segment - Grey Metallic */}
            <RoundedBox args={[0.5, 1.4, 0.5]} radius={0.12} position={[-0.2, 0, 0]}>
                <meshStandardMaterial
                    color="#1f2937"
                    roughness={0.3}
                    metalness={0.9}
                />
            </RoundedBox>

            {/* Bottom Segment - Dark Metallic */}
            <RoundedBox args={[1.4, 0.5, 0.5]} radius={0.12} position={[0.25, -0.9, 0]}>
                <meshStandardMaterial
                    color="#111827"
                    roughness={0.2}
                    metalness={1}
                />
            </RoundedBox>
        </group>
    );
}

export const ThreeDLogoWidget = () => {
    return (
        <div className="w-full h-full relative cursor-grab active:cursor-grabbing">
            <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
                <ambientLight intensity={0.7} />
                <spotLight position={[10, 10, 10]} angle={0.2} penumbra={1} intensity={2} color="#ffffff" />
                <pointLight position={[-10, -10, -10]} intensity={1} />
                <pointLight position={[0, 0, 5]} intensity={0.5} color="#10b981" />

                <Float speed={2.5} rotationIntensity={0.4} floatIntensity={1.2}>
                    <SegmentedC />
                </Float>

                <Environment preset="city" />

                {/* Soft shadow underneath the logo */}
                <ContactShadows position={[0, -2, 0]} opacity={0.6} scale={10} blur={2.5} far={4} color="#10b981" />

                <OrbitControls
                    enableZoom={false}
                    enablePan={false}
                    autoRotate={false}
                    minPolarAngle={Math.PI / 3}
                    maxPolarAngle={Math.PI / 1.5}
                />
            </Canvas>
        </div>
    )
}
