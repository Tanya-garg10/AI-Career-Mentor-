'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight, Sparkles } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-20">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-600/20 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-600/20 to-transparent rounded-full blur-3xl" />
      
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 mb-6">
          <Sparkles className="w-4 h-4 text-purple-400" />
          <span className="text-sm text-purple-300">AI-Powered Career Guidance</span>
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight text-balance">
          Your Personal <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Career Mentor</span>
        </h1>

        <p className="text-lg sm:text-xl text-foreground/70 mb-10 max-w-2xl mx-auto leading-relaxed text-balance">
          Get personalized career guidance, discover your ideal path, and connect with opportunities tailored to your skills and aspirations.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button size="lg" className="bg-white text-slate-900 hover:bg-gray-100 font-semibold">
            Start Free Quiz
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
          <Button size="lg" variant="outline" className="border-foreground/20 text-white hover:bg-white/10">
            Watch Demo
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-border/50">
          <div>
            <div className="text-2xl font-bold text-purple-400">10K+</div>
            <div className="text-sm text-foreground/60">Students Guided</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-blue-400">500+</div>
            <div className="text-sm text-foreground/60">Career Paths</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-purple-400">95%</div>
            <div className="text-sm text-foreground/60">Success Rate</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-blue-400">24/7</div>
            <div className="text-sm text-foreground/60">AI Support</div>
          </div>
        </div>
      </div>
    </section>
  )
}
