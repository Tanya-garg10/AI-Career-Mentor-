'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

interface Resource {
  title: string
  type: string
  description: string
  difficulty: string
  platform?: string
}

interface ResourceRecommenderProps {
  user: any
  careerPath?: string
}

export default function ResourceRecommender({ user, careerPath = 'Technology' }: ResourceRecommenderProps) {
  const [resources, setResources] = useState<Resource[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedFilter, setSelectedFilter] = useState<string>('All')

  useEffect(() => {
    fetchResources()
  }, [careerPath])

  const fetchResources = async () => {
    setLoading(true)
    try {
      const response = await fetch('/api/resources/recommend', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          careerPath,
          skills: user?.skills || ['Communication', 'Problem Solving'],
          level: user?.level || 'Beginner',
        }),
      })

      if (response.ok) {
        const data = await response.json()
        setResources(data.resources || mockResources)
      } else {
        setResources(mockResources)
      }
    } catch (error) {
      console.error('Failed to fetch resources:', error)
      setResources(mockResources)
    } finally {
      setLoading(false)
    }
  }

  const mockResources: Resource[] = [
    {
      title: 'The Complete Web Developer Course',
      type: 'Course',
      description: 'Comprehensive guide to modern web development with JavaScript, React, and Node.js',
      difficulty: 'Intermediate',
      platform: 'Udemy',
    },
    {
      title: 'Cracking the Coding Interview',
      type: 'Book',
      description: 'Essential guide for preparing for technical interviews at top tech companies',
      difficulty: 'Advanced',
    },
    {
      title: 'LinkedIn Learning - Career Skills',
      type: 'Platform',
      description: 'Learn professional development, leadership, and technical skills',
      difficulty: 'Beginner',
      platform: 'LinkedIn',
    },
    {
      title: 'Project-Based Learning Repository',
      type: 'Project',
      description: 'Build real-world projects to strengthen your portfolio and skills',
      difficulty: 'Intermediate',
    },
    {
      title: 'System Design Interview',
      type: 'Course',
      description: 'Master system design patterns and architecture for interviews',
      difficulty: 'Advanced',
      platform: 'Educative',
    },
    {
      title: 'GitHub Portfolio Guide',
      type: 'Guide',
      description: 'Create an impressive GitHub portfolio that attracts recruiters',
      difficulty: 'Beginner',
    },
  ]

  const filteredResources = selectedFilter === 'All'
    ? resources
    : resources.filter(r => r.type === selectedFilter)

  const resourceTypes = ['All', ...new Set(resources.map(r => r.type))]

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">Recommended Resources</h1>
        <p className="text-muted-foreground">Curated learning materials for your career path</p>
      </div>

      {/* Filters */}
      <div className="flex gap-2 flex-wrap">
        {resourceTypes.map((type) => (
          <Button
            key={type}
            variant={selectedFilter === type ? 'default' : 'outline'}
            onClick={() => setSelectedFilter(type)}
            size="sm"
          >
            {type}
          </Button>
        ))}
      </div>

      {/* Resources Grid */}
      {loading ? (
        <div className="text-center py-8 text-muted-foreground">
          Loading resources...
        </div>
      ) : (
        <div className="grid gap-4">
          {filteredResources.map((resource, index) => (
            <Card key={index} className="p-6 border border-border hover:border-primary/50 transition-colors">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="text-lg font-bold text-foreground">{resource.title}</h3>
                  <p className="text-sm text-muted-foreground">{resource.platform || 'Self-paced'}</p>
                </div>
                <Badge variant={
                  resource.difficulty === 'Beginner' ? 'default' :
                  resource.difficulty === 'Intermediate' ? 'secondary' :
                  'destructive'
                }>
                  {resource.difficulty}
                </Badge>
              </div>

              <p className="text-muted-foreground mb-4">{resource.description}</p>

              <div className="flex justify-between items-center">
                <Badge variant="outline">{resource.type}</Badge>
                <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
                  Explore
                </Button>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}
