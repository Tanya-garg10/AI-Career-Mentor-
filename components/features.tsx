'use client'

import { Card } from '@/components/ui/card'
import { Brain, Target, Zap, TrendingUp, MessageSquare, Lightbulb } from 'lucide-react'

const features = [
  {
    icon: Brain,
    title: 'AI Career Quiz',
    description: 'Discover your strengths, interests, and ideal career paths through an intelligent assessment.',
    color: 'from-purple-500 to-purple-600'
  },
  {
    icon: Target,
    title: 'Personalized Roadmap',
    description: 'Get a customized 5-year plan with milestones, skills to develop, and actionable steps.',
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: MessageSquare,
    title: '24/7 AI Mentor',
    description: 'Chat with your personal AI mentor anytime for guidance, questions, and career support.',
    color: 'from-cyan-500 to-cyan-600'
  },
  {
    icon: TrendingUp,
    title: 'Progress Tracking',
    description: 'Monitor your growth, celebrate wins, and stay motivated with detailed progress insights.',
    color: 'from-emerald-500 to-emerald-600'
  },
  {
    icon: Lightbulb,
    title: 'Industry Insights',
    description: 'Stay updated with real-time information about trending skills and job market opportunities.',
    color: 'from-orange-500 to-orange-600'
  },
  {
    icon: Zap,
    title: 'Skill Building',
    description: 'Access curated resources and courses to develop the skills your career path requires.',
    color: 'from-pink-500 to-pink-600'
  }
]

export default function Features() {
  return (
    <section id="features" className="py-20 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 text-balance">
            Everything You Need to Succeed
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Our comprehensive platform guides you through every step of your career journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => {
            const Icon = feature.icon
            return (
              <Card key={idx} className="group relative bg-slate-800/50 border-slate-700/50 hover:border-slate-600/80 hover:bg-slate-800/80 transition-all duration-300 p-6">
                <div className="mb-4">
                  <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${feature.color} w-fit`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-foreground/60 text-sm leading-relaxed">{feature.description}</p>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
