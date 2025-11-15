'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import DashboardNav from '@/components/dashboard-nav'
import QuizStart from '@/components/quiz-start'
import ChatInterface from '@/components/chat-interface'
import UserProfile from '@/components/user-profile'
import CareerRoadmap from '@/components/career-roadmap'
import ProgressDashboard from '@/components/progress-dashboard'
import ResourceRecommender from '@/components/resource-recommender'

type TabType = 'overview' | 'quiz' | 'chat' | 'roadmap' | 'profile' | 'progress' | 'resources'

export default function DashboardPage() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState<TabType>('overview')
  const [user, setUser] = useState<any>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const userStr = localStorage.getItem('user')
    if (!userStr) {
      router.push('/auth')
      return
    }
    setUser(JSON.parse(userStr))
  }, [router])

  if (!mounted || !user) return null

  const handleLogout = () => {
    localStorage.removeItem('user')
    localStorage.removeItem('userEmail')
    router.push('/')
  }

  return (
    <div className="min-h-screen bg-background">
      <DashboardNav user={user} onLogout={handleLogout} />

      <main className="container mx-auto px-4 py-8">
        {activeTab === 'overview' && (
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="p-6 border border-border">
              <h2 className="text-2xl font-bold mb-2 text-foreground">Welcome, {user.name}!</h2>
              <p className="text-muted-foreground mb-6">
                Take the career quiz to get personalized guidance from your AI mentor.
              </p>
              <Button
                onClick={() => setActiveTab('quiz')}
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Start Career Quiz
              </Button>
            </Card>

            <Card className="p-6 border border-border">
              <h2 className="text-xl font-bold mb-2 text-foreground">Your Progress</h2>
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Profile Completion</p>
                  <div className="w-full bg-border rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: '30%' }}></div>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Quiz Progress</p>
                  <div className="w-full bg-border rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: '0%' }}></div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        )}

        {activeTab === 'quiz' && <QuizStart onComplete={() => setActiveTab('roadmap')} />}
        {activeTab === 'chat' && <ChatInterface user={user} />}
        {activeTab === 'roadmap' && <CareerRoadmap user={user} />}
        {activeTab === 'profile' && <UserProfile user={user} onUpdate={setUser} />}
        {activeTab === 'progress' && <ProgressDashboard user={user} />}
        {activeTab === 'resources' && <ResourceRecommender user={user} />}

        <div className="fixed bottom-8 right-8 flex gap-3 flex-wrap justify-end max-w-sm">
          <Button
            variant={activeTab === 'overview' ? 'default' : 'outline'}
            onClick={() => setActiveTab('overview')}
            size="sm"
            className="rounded-full"
          >
            Home
          </Button>
          <Button
            variant={activeTab === 'quiz' ? 'default' : 'outline'}
            onClick={() => setActiveTab('quiz')}
            size="sm"
            className="rounded-full"
          >
            Quiz
          </Button>
          <Button
            variant={activeTab === 'roadmap' ? 'default' : 'outline'}
            onClick={() => setActiveTab('roadmap')}
            size="sm"
            className="rounded-full"
          >
            Roadmap
          </Button>
          <Button
            variant={activeTab === 'progress' ? 'default' : 'outline'}
            onClick={() => setActiveTab('progress')}
            size="sm"
            className="rounded-full"
          >
            Progress
          </Button>
          <Button
            variant={activeTab === 'resources' ? 'default' : 'outline'}
            onClick={() => setActiveTab('resources')}
            size="sm"
            className="rounded-full"
          >
            Resources
          </Button>
          <Button
            variant={activeTab === 'chat' ? 'default' : 'outline'}
            onClick={() => setActiveTab('chat')}
            size="sm"
            className="rounded-full"
          >
            Chat
          </Button>
          <Button
            variant={activeTab === 'profile' ? 'default' : 'outline'}
            onClick={() => setActiveTab('profile')}
            size="sm"
            className="rounded-full"
          >
            Profile
          </Button>
        </div>
      </main>
    </div>
  )
}
