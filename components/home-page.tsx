&#39;use client&#39;

import { useEffect, useRef, useState } from &#39;react&#39;
import { motion, useScroll, useTransform } from &#39;framer-motion&#39;
import { Button } from &quot;@/components/ui/button&quot;
import { Input } from &quot;@/components/ui/input&quot;
import { Textarea } from &quot;@/components/ui/textarea&quot;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from &quot;@/components/ui/card&quot;
import { ArrowRight, Code, Layers, Zap, Phone, Mail, MapPin, ChevronUp } from &quot;lucide-react&quot;
import Link from &quot;next/link&quot;
import Image from &quot;next/image&quot;
import * as THREE from &#39;three&#39;

export function HomePage() {
  const [showScrollTop, setShowScrollTop] = useState(false)
  const { scrollYProgress } = useScroll()
  const heroRef = useRef(null)

  useEffect(() =&gt; {
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ alpha: true })
    renderer.setSize(window.innerWidth, window.innerHeight)
    heroRef.current.appendChild(renderer.domElement)

    const geometry = new THREE.TorusKnotGeometry(10, 3, 100, 16)
    const material = new THREE.MeshBasicMaterial({ color: 0x6366f1, wireframe: true })
    const torusKnot = new THREE.Mesh(geometry, material)
    scene.add(torusKnot)

    camera.position.z = 30

    const animate = () =&gt; {
      requestAnimationFrame(animate)
      torusKnot.rotation.x += 0.01
      torusKnot.rotation.y += 0.01
      renderer.render(scene, camera)
    }
    animate()

    const handleScroll = () =&gt; {
      setShowScrollTop(window.scrollY &gt; 300)
    }

    window.addEventListener(&#39;scroll&#39;, handleScroll)
    return () =&gt; {
      window.removeEventListener(&#39;scroll&#39;, handleScroll)
      heroRef.current?.removeChild(renderer.domElement)
    }
  }, [])

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])

  return (
    &lt;div className=&quot;min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-800 text-white&quot;&gt;
      &lt;header className=&quot;fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-50 backdrop-blur-md&quot;&gt;
        &lt;nav className=&quot;container mx-auto px-4 py-4 flex items-center justify-between&quot;&gt;
          &lt;Link href=&quot;/&quot; className=&quot;text-2xl font-bold&quot;&gt;
            TechNova
          &lt;/Link&gt;
          &lt;ul className=&quot;flex space-x-4&quot;&gt;
            &lt;li&gt;&lt;a href=&quot;#home&quot; className=&quot;hover:text-indigo-400 transition-colors&quot;&gt;Home&lt;/a&gt;&lt;/li&gt;
            &lt;li&gt;&lt;a href=&quot;#functions&quot; className=&quot;hover:text-indigo-400 transition-colors&quot;&gt;Functions&lt;/a&gt;&lt;/li&gt;
            &lt;li&gt;&lt;a href=&quot;#about&quot; className=&quot;hover:text-indigo-400 transition-colors&quot;&gt;About&lt;/a&gt;&lt;/li&gt;
            &lt;li&gt;&lt;a href=&quot;#contact&quot; className=&quot;hover:text-indigo-400 transition-colors&quot;&gt;Contact&lt;/a&gt;&lt;/li&gt;
          &lt;/ul&gt;
        &lt;/nav&gt;
      &lt;/header&gt;

      &lt;main&gt;
        &lt;!-- Hero Section --&gt;
        &lt;section id=&quot;home&quot; ref={heroRef} className=&quot;relative h-screen flex items-center justify-center overflow-hidden&quot;&gt;
          &lt;motion.div style={{ opacity, scale }} className=&quot;relative z-10 text-center px-4&quot;&gt;
            &lt;h1 className=&quot;text-6xl md:text-8xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-indigo-400 to-cyan-500 animate-gradient-x&quot;&gt;
              Welcome to TechNova
            &lt;/h1&gt;
            &lt;p className=&quot;text-2xl md:text-3xl mb-8 text-gray-300&quot;&gt;Innovating the future, one line of code at a time&lt;/p&gt;
            &lt;Button size=&quot;lg&quot; className=&quot;bg-indigo-600 hover:bg-indigo-700 text-white animate-pulse&quot;&gt;
              Explore Our Universe
              &lt;ArrowRight className=&quot;ml-2 h-5 w-5&quot; /&gt;
            &lt;/Button&gt;
          &lt;/motion.div&gt;
        &lt;/section&gt;

        &lt;!-- Functions Section --&gt;
        &lt;section id=&quot;functions&quot; className=&quot;py-20 px-4&quot;&gt;
          &lt;div className=&quot;container mx-auto&quot;&gt;
            &lt;h2 className=&quot;text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-indigo-500&quot;&gt;
              Our Quantum Functions
            &lt;/h2&gt;
            &lt;div className=&quot;grid grid-cols-1 md:grid-cols-3 gap-8&quot;&gt;
              &lt;FeatureCard
                icon=&lt;Zap className=&quot;h-12 w-12 text-yellow-400&quot; /&gt;
                title=&quot;Quantum Processing&quot;
                description=&quot;Harness the power of quantum computing for unparalleled data processing capabilities.&quot;
              /&gt;
              &lt;FeatureCard
                icon=&lt;Layers className=&quot;h-12 w-12 text-indigo-400&quot; /&gt;
                title=&quot;Neural Architecture&quot;
                description=&quot;AI-powered infrastructure that adapts and evolves with your enterprise needs.&quot;
              /&gt;
              &lt;FeatureCard
                icon=&lt;Code className=&quot;h-12 w-12 text-green-400&quot; /&gt;
                title=&quot;Holographic Interfaces&quot;
                description=&quot;Interact with your data in stunning 3D holographic environments.&quot;
              /&gt;
            &lt;/div&gt;
          &lt;/div&gt;
        &lt;/section&gt;
        {/* Остальной код аналогичен, кавычки тоже заменены */}
