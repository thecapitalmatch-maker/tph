import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, RoundedBox, Float } from '@react-three/drei';
import * as THREE from 'three';

const SegmentedC = () => {
    const groupRef = useRef<THREE.Group>(null);

    useFrame((state, delta) => {
        if (groupRef.current) {
            // Very slow, elegant auto-rotation
            groupRef.current.rotation.y += delta * 0.15;
            // Gentle hovering bob
            groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 1.5) * 0.1;
        }
    });

    // Make the logo significantly thicker (Z-axis = 1.2) so it looks dense and premium from all angles
    const thickness = 1.2;

    return (
        <group ref={groupRef} position={[0, -0.1, 0]} scale={0.9}>
            {/* Top Arc Segment - Glowing Mint Glass */}
            <RoundedBox args={[1.6, 0.5, thickness]} radius={0.15} position={[0.2, 1.0, 0]}>
                <meshPhysicalMaterial
                    color="#10b981"
                    emissive="#047857"
                    emissiveIntensity={0.5}
                    roughness={0.1}
                    metalness={0.5}
                    transmission={0.4}
                    thickness={0.5}
                    clearcoat={1.0}
                    clearcoatRoughness={0.1}
                />
            </RoundedBox>

            {/* Top Left Connector - Bright Cyan/Mint */}
            <RoundedBox args={[0.5, 0.5, thickness]} radius={0.12} position={[-0.35, 1.0, 0]}>
                <meshPhysicalMaterial
                    color="#34d399"
                    emissive="#10b981"
                    emissiveIntensity={0.8}
                    roughness={0.05}
                    metalness={0.2}
                    clearcoat={1.0}
                />
            </RoundedBox>

            {/* Main Left Pillar - Premium Titanium/Grey */}
            <RoundedBox args={[0.5, 1.6, thickness]} radius={0.15} position={[-0.35, 0, 0]}>
                <meshStandardMaterial
                    color="#374151"
                    roughness={0.2}
                    metalness={0.8}
                />
            </RoundedBox>

            {/* Bottom Arc Segment - Deep Dark Metal */}
            <RoundedBox args={[1.6, 0.5, thickness]} radius={0.15} position={[0.2, -1.0, 0]}>
                <meshStandardMaterial
                    color="#111827"
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
            <Canvas
                camera={{ position: [0, 0, 6], fov: 45 }}
                gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
                style={{ background: 'transparent' }}
            >
                <ambientLight intensity={2.0} color="#ffffff" />
                <directionalLight position={[10, 10, 10]} intensity={3.5} color="#ffffff" />
                <directionalLight position={[-10, 5, -10]} intensity={2.0} color="#10b981" />
                <pointLight position={[0, -5, 5]} intensity={1.5} color="#00e6a0" />
                <pointLight position={[3, 3, 5]} intensity={2.5} color="#ffffff" distance={10} />

                <Float speed={2.5} rotationIntensity={0.2} floatIntensity={0.5}>
                    <SegmentedC />
                </Float>

                <OrbitControls
                    enableZoom={false}
                    enablePan={false}
                    autoRotate={true}
                    autoRotateSpeed={0.8}
                    // Constrain angles to prevent looking at it purely from top or side
                    minPolarAngle={Math.PI / 2.5}
                    maxPolarAngle={Math.PI / 1.8}
                    minAzimuthAngle={-Math.PI / 4}
                    maxAzimuthAngle={Math.PI / 4}
                />
            </Canvas>
        </div>
    )
}
