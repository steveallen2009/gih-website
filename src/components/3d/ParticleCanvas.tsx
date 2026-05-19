'use client'

import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function FloatingParticles({ count = 600 }: { count?: number }) {
  const mesh = useRef<THREE.Points>(null!)
  const time = useRef(0)

  const { positions, colors } = useMemo(() => {
    const positions = new Float32Array(count * 3)
    const colors = new Float32Array(count * 3)

    const palette = [
      new THREE.Color('#1B4FD8'),
      new THREE.Color('#0D2B8A'),
      new THREE.Color('#D4A843'),
      new THREE.Color('#60A5FA'),
      new THREE.Color('#E8C068'),
    ]

    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 30
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20
      positions[i * 3 + 2] = (Math.random() - 0.5) * 15

      const color = palette[Math.floor(Math.random() * palette.length)]
      colors[i * 3] = color.r
      colors[i * 3 + 1] = color.g
      colors[i * 3 + 2] = color.b
    }

    return { positions, colors }
  }, [count])

  useFrame((_, delta) => {
    time.current += delta * 0.15
    if (mesh.current) {
      mesh.current.rotation.y = time.current * 0.12
      mesh.current.rotation.x = Math.sin(time.current * 0.08) * 0.1
    }
  })

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.06}
        vertexColors
        transparent
        opacity={0.55}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  )
}

export default function ParticleCanvas() {
  return (
    <Canvas
      camera={{ position: [0, 0, 12], fov: 60 }}
      gl={{ antialias: false, alpha: true }}
      style={{ width: '100%', height: '100%' }}
      aria-hidden="true"
    >
      <ambientLight intensity={0.5} />
      <FloatingParticles count={700} />
    </Canvas>
  )
}