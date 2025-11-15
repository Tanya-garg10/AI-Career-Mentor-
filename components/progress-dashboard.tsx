'use client'

import { Card } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'

interface ProgressDashboardProps {
  user: any
}

export default function ProgressDashboard({ user }: ProgressDashboardProps) {
  const mockProgress = {
    profileCompletion: 45,
    quizCompletion: 100,
    roadmapProgress: 25,
    resourcesExplored: 8,
    chatInteractions: 12,
  }

  const milestones = [
    { title: 'Profile Setup', completed: true, date: 'Nov 1, 2025' },
    { title: 'Career Quiz', completed: true, date: 'Nov 5, 2025' },
    { title: 'Chat Session 1', completed: true, date: 'Nov 8, 2025' },
    { title: 'Resource Review', completed: false, date: 'Nov 15, 2025' },
    { title: 'Roadmap Checkpoint', completed: false, date: 'Nov 22, 2025' },
  ]

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">Your Progress Dashboard</h1>
        <p className="text-muted-foreground">Track your career development journey</p>
      </div>

      {/* Key Metrics */}
      <div className="grid md:grid-cols-2 gap-4">
        <Card className="p-6 border border-border">
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-semibold text-foreground">Profile Completion</h3>
            <span className="text-sm text-muted-foreground">{mockProgress.profileCompletion}%</span>
          </div>
          <Progress value={mockProgress.profileCompletion} className="h-2" />
        </Card>

        <Card className="p-6 border border-border">
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-semibold text-foreground">Quiz Completion</h3>
            <span className="text-sm text-muted-foreground">{mockProgress.quizCompletion}%</span>
          </div>
          <Progress value={mockProgress.quizCompletion} className="h-2" />
        </Card>

        <Card className="p-6 border border-border">
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-semibold text-foreground">Roadmap Progress</h3>
            <span className="text-sm text-muted-foreground">{mockProgress.roadmapProgress}%</span>
          </div>
          <Progress value={mockProgress.roadmapProgress} className="h-2" />
        </Card>

        <Card className="p-6 border border-border">
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-semibold text-foreground">Learning Activity</h3>
            <span className="text-sm text-muted-foreground">{mockProgress.chatInteractions} chats</span>
          </div>
          <div className="flex gap-1">
            {Array.from({ length: 12 }).map((_, i) => (
              <div
                key={i}
                className={`h-6 w-full rounded ${
                  i < mockProgress.chatInteractions ? 'bg-primary' : 'bg-border'
                }`}
              ></div>
            ))}
          </div>
        </Card>
      </div>

      {/* Milestones */}
      <Card className="p-6 border border-border">
        <h2 className="text-xl font-bold text-foreground mb-6">Your Milestones</h2>
        <div className="space-y-4">
          {milestones.map((milestone, index) => (
            <div key={index} className="flex items-center gap-4">
              <div
                className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                  milestone.completed
                    ? 'bg-primary border-primary'
                    : 'border-border'
                }`}
              >
                {milestone.completed && <span className="text-primary-foreground text-sm">✓</span>}
              </div>
              <div className="flex-1">
                <p className="font-semibold text-foreground">{milestone.title}</p>
                <p className="text-sm text-muted-foreground">{milestone.date}</p>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Recommendations */}
      <Card className="p-6 border border-border bg-card/50">
        <h2 className="text-xl font-bold text-foreground mb-4">Next Steps to Accelerate Growth</h2>
        <ul className="space-y-3 text-muted-foreground">
          <li className="flex gap-3">
            <span className="text-primary">→</span>
            <span>Complete your detailed profile with specific skills and interests</span>
          </li>
          <li className="flex gap-3">
            <span className="text-primary">→</span>
            <span>Explore the recommended resources based on your career path</span>
          </li>
          <li className="flex gap-3">
            <span className="text-primary">→</span>
            <span>Schedule regular check-ins with your AI mentor</span>
          </li>
          <li className="flex gap-3">
            <span className="text-primary">→</span>
            <span>Track completed skills and update your roadmap monthly</span>
          </li>
        </ul>
      </Card>
    </div>
  )
}
