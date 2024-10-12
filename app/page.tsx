'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { HomePage } from "@/components/home-page"

export default function Page() {
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const renderer = new THREE.WebGLRenderer({ alpha: true })
    renderer.setSize(window.innerWidth, window.innerHeight)
    
    if (heroRef.current) {
      heroRef.current.appendChild(renderer.domElement)
    
      const geometry = new THREE.TorusKnotGeometry(10, 3, 100, 16)
      const material = new THREE.MeshBasicMaterial({ color: 0x6366f1, wireframe: true })
      const torusKnot = new THREE.Mesh(geometry, material)
      
      const scene = new THREE.Scene()
      scene.add(torusKnot)
      
      const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
      camera.position.z = 30
      
      const animate = () => {
        requestAnimationFrame(animate)
        torusKnot.rotation.x += 0.01
        torusKnot.rotation.y += 0.01
        renderer.render(scene, camera)
      }
      animate()

    return () => {
      if (heroRef.current) {
        heroRef.current.removeChild(renderer.domElement)
      }
    }
  }
}, [])

  return (
    <div>
      <div ref={heroRef} style={{ position: 'fixed', top: 0, left: 0, zIndex: -1 }} />
      <HomePage />
    </div>
  )
}