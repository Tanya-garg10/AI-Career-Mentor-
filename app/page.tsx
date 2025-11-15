'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Header from '@/components/header'
import Hero from '@/components/hero'
import Features from '@/components/features'
import CTA from '@/components/cta'
import Footer from '@/components/footer'

export default function Page() {
  const router = useRouter()
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const user = localStorage.getItem('user')
    if (user) {
      setIsAuthenticated(true)
      router.push('/dashboard')
    }
  }, [router])

  if (!mounted) return null

  return (
    <main className="min-h-screen bg-background">
      <Header isAuthenticated={isAuthenticated} />
      <Hero />
      <Features />
      <CTA />
      <Footer />
    </main>
  )
}
