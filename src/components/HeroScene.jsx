import { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere, PerspectiveCamera } from '@react-three/drei';

function AbstractShape() {
    const meshRef = useRef()
    const [hovered, setHover] = useState(false)

    useFrame((state) => {
        const t = state.clock.getElapsedTime()
        meshRef.current.rotation.x = Math.cos(t / 4) / 4
        meshRef.current.rotation.y = Math.sin(t / 4) / 4
    })

    return (
        <Float speed={2} rotationIntensity={1} floatIntensity={2}>
            <Sphere
                ref={meshRef}
                args={[1, 100, 200]}
                scale={2.2}
                onPointerOver={() => setHover(true)}
                onPointerOut={() => setHover(false)}
            >
                <MeshDistortMaterial
                    color={hovered ? "#60a5fa" : "#3b82f6"}
                    attach="material"
                    distort={0.4}
                    speed={2}
                    roughness={0.1}
                    metalness={0.9}
                />
            </Sphere>
        </Float>
    )
}

export default function HeroScene() {
    return (
        <div className="absolute inset-0 z-0">
            <Canvas>
                <PerspectiveCamera makeDefault position={[0, 0, 5]} />
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 20, 10]} intensity={1.5} />
                <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} />
                <AbstractShape />
            </Canvas>
        </div>
    )
}