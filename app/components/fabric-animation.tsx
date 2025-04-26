"use client"

import { useRef, useMemo } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Environment, OrbitControls } from "@react-three/drei"
import * as THREE from "three"

function Fabric({ position = [0, 0, 0], color = "#ff0000" }) {
  const meshRef = useRef<THREE.Mesh>(null!)
  const planeSegments = 20

  // Create a simplex noise function for the animation
  const time = useRef(0)

  // Create vertices for the plane
  const { positions } = useMemo(() => {
    const positions = new Float32Array((planeSegments + 1) * (planeSegments + 1) * 3)
    let i = 0
    for (let y = 0; y <= planeSegments; y++) {
      for (let x = 0; x <= planeSegments; x++) {
        positions[i++] = x / planeSegments - 0.5
        positions[i++] = y / planeSegments - 0.5
        positions[i++] = 0
      }
    }
    return { positions }
  }, [planeSegments])

  // Animation
  useFrame((state) => {
    if (!meshRef.current) return

    time.current += 0.01

    const geometry = meshRef.current.geometry
    const positionAttribute = geometry.getAttribute("position")
    const vertex = new THREE.Vector3()

    // Update vertices based on time and position
    for (let i = 0; i < positionAttribute.count; i++) {
      vertex.fromBufferAttribute(positionAttribute, i)

      // Original position
      const originalX = positions[i * 3]
      const originalY = positions[i * 3 + 1]

      // Calculate wave
      const distance = Math.sqrt(originalX * originalX + originalY * originalY)
      const amplitude = 0.1
      const frequency = 2
      const phase = time.current

      // Apply wave
      const z = amplitude * Math.sin(distance * frequency * Math.PI + phase)

      // Set new position
      positionAttribute.setZ(i, z)
    }

    positionAttribute.needsUpdate = true
    geometry.computeVertexNormals()
  })

  return (
    <mesh ref={meshRef} position={position} rotation={[-Math.PI / 4, 0, 0]} castShadow receiveShadow>
      <planeGeometry args={[4, 4, planeSegments, planeSegments]} />
      <meshStandardMaterial color={color} side={THREE.DoubleSide} metalness={0.2} roughness={0.8} wireframe={false} />
    </mesh>
  )
}

export function FabricAnimation() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas shadows camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight
          position={[5, 5, 5]}
          intensity={1}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />
        <Fabric position={[0, 0, 0]} color="#ff0000" />
        <Environment preset="studio" />
      </Canvas>
    </div>
  )
}

export function FabricAnimationWithControls() {
  return (
    <div className="w-full h-[400px]">
      <Canvas shadows camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight
          position={[5, 5, 5]}
          intensity={1}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />
        <Fabric position={[0, 0, 0]} color="#ff0000" />
        <Environment preset="studio" />
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  )
}
