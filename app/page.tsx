&#39;use client&#39;

import { useEffect, useRef } from &#39;react&#39;
import * as THREE from &#39;three&#39;
import { HomePage } from &quot;@/components/home-page&quot;

export default function Page() {
  const heroRef = useRef&lt;HTMLDivElement&gt;(null)

  useEffect(() =&gt; {
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
      
      const animate = () =&gt; {
        requestAnimationFrame(animate)
        torusKnot.rotation.x += 0.01
        torusKnot.rotation.y += 0.01
        renderer.render(scene, camera)
      }
      animate()

    return () =&gt; {
      if (heroRef.current) {
        heroRef.current.removeChild(renderer.domElement)
      }
    }
  }
}, [])

  return (
    &lt;div&gt;
      &lt;div ref={heroRef} style={{ position: &#39;fixed&#39;, top: 0, left: 0, zIndex: -1 }} /&gt;
      &lt;HomePage /&gt;
    &lt;/div&gt;
  )
}
