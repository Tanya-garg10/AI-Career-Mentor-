'use client'

import { Card } from '@/components/ui/card'

const roadmapSteps = [
  {
    phase: 'Phase 1: Foundation',
    duration: '3-6 months',
    skills: ['Core Programming', 'Data Structures', 'Problem Solving'],
    resources: [
      'Online courses on Python/JavaScript',
      'Coding practice on LeetCode',
      'Build 3-5 small projects',
    ],
  },
  {
    phase: 'Phase 2: Specialization',
    duration: '6-9 months',
    skills: ['Web Development', 'Databases', 'APIs'],
    resources: [
      'Full-stack web development course',
      'Build a complete web application',
      'Contribute to open source',
    ],
  },
  {
    phase: 'Phase 3: Advanced Skills',
    duration: '3-6 months',
    skills: ['System Design', 'DevOps', 'Cloud Services'],
    resources: [
      'Advanced system design course',
      'Learn AWS/Azure basics',
      'Deploy projects to production',
    ],
  },
  {
    phase: 'Phase 4: Job Readiness',
    duration: '2-3 months',
    skills: ['Resume Building', 'Interview Prep', 'Networking'],
    resources: [
      'Mock interviews with mentors',
      'Portfolio optimization',
      'LinkedIn profile enhancement',
    ],
  },
]

interface CareerRoadmapProps {
  user: any
}

export default function CareerRoadmap({ user }: CareerRoadmapProps) {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">Your Personalized Career Roadmap</h1>
        <p className="text-muted-foreground">
          A structured 12-18 month plan to achieve your career goals
        </p>
      </div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-secondary"></div>

        {/* Timeline steps */}
        <div className="space-y-8 pl-24">
          {roadmapSteps.map((step, index) => (
            <Card key={index} className="p-6 border border-border relative">
              {/* Timeline dot */}
              <div className="absolute -left-10 top-8 w-5 h-5 rounded-full bg-primary border-4 border-background"></div>

              <div className="mb-4">
                <h3 className="text-xl font-bold text-foreground">{step.phase}</h3>
                <p className="text-sm text-muted-foreground">{step.duration}</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Skills to Learn</h4>
                  <ul className="space-y-2">
                    {step.skills.map((skill) => (
                      <li key={skill} className="flex items-center gap-2 text-muted-foreground">
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-3">Resources</h4>
                  <ul className="space-y-2">
                    {step.resources.map((resource) => (
                      <li key={resource} className="flex items-start gap-2 text-muted-foreground">
                        <div className="w-2 h-2 rounded-full bg-secondary mt-1.5 flex-shrink-0"></div>
                        <span>{resource}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <Card className="p-6 border border-border bg-card/50">
        <h3 className="font-bold text-foreground mb-3">Next Steps</h3>
        <ol className="space-y-2 text-muted-foreground">
          <li>1. Complete your profile with detailed skills and experience</li>
          <li>2. Chat with your AI mentor about any phase of the roadmap</li>
          <li>3. Track your progress and update milestones as you complete them</li>
          <li>4. Adjust the roadmap based on feedback and career changes</li>
        </ol>
      </Card>
    </div>
  )
}
