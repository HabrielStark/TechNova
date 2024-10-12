'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Code, Layers, Zap, Phone, Mail, MapPin, ChevronUp } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import * as THREE from 'three'

export function HomePage() {
  const [showScrollTop, setShowScrollTop] = useState(false)
  const { scrollYProgress } = useScroll()
  const heroRef = useRef(null)

  useEffect(() => {
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

    const animate = () => {
      requestAnimationFrame(animate)
      torusKnot.rotation.x += 0.01
      torusKnot.rotation.y += 0.01
      renderer.render(scene, camera)
    }
    animate()

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      heroRef.current?.removeChild(renderer.domElement)
    }
  }, [])

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-800 text-white">
      <header className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-50 backdrop-blur-md">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold">
            TechNova
          </Link>
          <ul className="flex space-x-4">
            <li><a href="#home" className="hover:text-indigo-400 transition-colors">Home</a></li>
            <li><a href="#functions" className="hover:text-indigo-400 transition-colors">Functions</a></li>
            <li><a href="#about" className="hover:text-indigo-400 transition-colors">About</a></li>
            <li><a href="#contact" className="hover:text-indigo-400 transition-colors">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section id="home" ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
          <motion.div style={{ opacity, scale }} className="relative z-10 text-center px-4">
            <h1 className="text-6xl md:text-8xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-indigo-400 to-cyan-500 animate-gradient-x">
              Welcome to TechNova
            </h1>
            <p className="text-2xl md:text-3xl mb-8 text-gray-300">Innovating the future, one line of code at a time</p>
            <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white animate-pulse">
              Explore Our Universe
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </section>

        {/* Functions Section */}
        <section id="functions" className="py-20 px-4">
          <div className="container mx-auto">
            <h2 className="text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-indigo-500">
              Our Quantum Functions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <FeatureCard
                icon={<Zap className="h-12 w-12 text-yellow-400" />}
                title="Quantum Processing"
                description="Harness the power of quantum computing for unparalleled data processing capabilities."
              />
              <FeatureCard
                icon={<Layers className="h-12 w-12 text-indigo-400" />}
                title="Neural Architecture"
                description="AI-powered infrastructure that adapts and evolves with your enterprise needs."
              />
              <FeatureCard
                icon={<Code className="h-12 w-12 text-green-400" />}
                title="Holographic Interfaces"
                description="Interact with your data in stunning 3D holographic environments."
              />
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 px-4 bg-black bg-opacity-50">
          <div className="container mx-auto">
            <h2 className="text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
              About TechNova
            </h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="TechNova Team"
                  width={600}
                  height={400}
                  className="rounded-lg"
                />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4">Our Cosmic Mission</h3>
                <p className="mb-4">
                  At TechNova, we're on a mission to revolutionize the tech universe through innovative solutions and cutting-edge research. Our team of passionate cosmic experts is dedicated to pushing the boundaries of what's possible in quantum software development, artificial superintelligence, and intergalactic cloud computing.
                </p>
                <h3 className="text-2xl font-semibold mb-4">Our Stellar Values</h3>
                <ul className="list-disc list-inside mb-4 space-y-2">
                  <li>Innovation at the speed of light</li>
                  <li>Commitment to excellence across galaxies</li>
                  <li>Collaboration beyond space and time</li>
                  <li>Ethical and responsible technology for all sentient beings</li>
                </ul>
                <Button className="bg-indigo-600 hover:bg-indigo-700 text-white">Join Our Cosmic Team</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-4">
          <div className="container mx-auto">
            <h2 className="text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-indigo-500">
              Contact the TechNova Nexus
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-gray-800 bg-opacity-50 border-indigo-500">
                <CardHeader>
                  <CardTitle>Send Us a Cosmic Message</CardTitle>
                  <CardDescription>We'll respond faster than light speed.</CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <Input placeholder="Your Name" className="bg-gray-700 text-white" />
                    <Input type="email" placeholder="Your Email" className="bg-gray-700 text-white" />
                    <Textarea placeholder="Your Message" className="bg-gray-700 text-white" />
                    <Button type="submit" className="bg-indigo-600 hover:bg-indigo-700 text-white">Transmit Message</Button>
                  </form>
                </CardContent>
              </Card>
              <div className="space-y-6">
                <Card className="bg-gray-800 bg-opacity-50 border-indigo-500">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Phone className="mr-2 h-4 w-4" />
                      Quantum Hotline
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>+1 (555) TECH-NOVA</p>
                  </CardContent>
                </Card>
                <Card className="bg-gray-800 bg-opacity-50 border-indigo-500">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Mail className="mr-2 h-4 w-4" />
                      Subspace Email
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>contact@technova-universe.com</p>
                  </CardContent>
                </Card>
                <Card className="bg-gray-800 bg-opacity-50 border-indigo-500">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <MapPin className="mr-2 h-4 w-4" />
                      Cosmic Coordinates
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>42 Quantum Avenue, Silicon Galaxy, QC 90210</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-black bg-opacity-50 py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© 2024 TechNova. All rights reserved across the multiverse.</p>
        </div>
      </footer>

      {/* Floating Action Button */}
      <motion.div
        className="fixed bottom-8 right-8 z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: showScrollTop ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <Button
          size="icon"
          className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-full shadow-lg"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <ChevronUp className="h-6 w-6" />
        </Button>
      </motion.div>
    </div>
  )
}

function FeatureCard({ icon, title, description }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Card className="bg-gray-800 bg-opacity-50 border-indigo-500 hover:border-pink-500 transition-colors duration-300">
        <CardContent className="p-6">
          <div className="flex items-center mb-4">
            {icon}
            <h3 className="text-2xl font-bold ml-4">{title}</h3>
          </div>
          <p className="text-gray-300">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  )
}