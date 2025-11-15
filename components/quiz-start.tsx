'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

interface QuizStartProps {
  onComplete: () => void
}

const quizQuestions = [
  {
    id: 1,
    question: 'What are you most interested in?',
    options: [
      'Technology & Programming',
      'Business & Finance',
      'Creative & Design',
      'Health & Science',
      'Other',
    ],
  },
  {
    id: 2,
    question: 'What is your current education level?',
    options: ['High School', '12th Pass', 'Diploma', 'Bachelor', 'Master'],
  },
  {
    id: 3,
    question: 'How many years of experience do you have?',
    options: ['Fresher', '0-2 years', '2-5 years', '5-10 years', '10+ years'],
  },
  {
    id: 4,
    question: 'What type of work environment do you prefer?',
    options: ['Startup', 'Corporate', 'Freelance', 'Government', 'Non-Profit'],
  },
]

export default function QuizStart({ onComplete }: QuizStartProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<string[]>([])
  const [quizComplete, setQuizComplete] = useState(false)

  const handleAnswer = (answer: string) => {
    const newAnswers = [...answers]
    newAnswers[currentQuestion] = answer
    setAnswers(newAnswers)

    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      localStorage.setItem('quizAnswers', JSON.stringify(newAnswers))
      setQuizComplete(true)
    }
  }

  if (quizComplete) {
    return (
      <Card className="p-8 border border-border max-w-2xl mx-auto text-center">
        <div className="mb-6">
          <div className="text-6xl mb-4">🎉</div>
        </div>
        <h2 className="text-3xl font-bold mb-4 text-foreground">Quiz Complete!</h2>
        <p className="text-muted-foreground mb-6">
          Your AI mentor is analyzing your responses to create a personalized career roadmap tailored to your interests and goals.
        </p>
        <Button
          onClick={onComplete}
          className="bg-primary text-primary-foreground hover:bg-primary/90"
        >
          View My Career Roadmap
        </Button>
      </Card>
    )
  }

  const question = quizQuestions[currentQuestion]
  const progress = ((currentQuestion + 1) / quizQuestions.length) * 100

  return (
    <Card className="p-8 border border-border max-w-2xl mx-auto">
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-muted-foreground">
            Question {currentQuestion + 1} of {quizQuestions.length}
          </span>
          <span className="text-sm font-medium text-primary">{Math.round(progress)}%</span>
        </div>
        <div className="w-full bg-border rounded-full h-2">
          <div
            className="bg-primary h-2 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      <h2 className="text-2xl font-bold mb-6 text-foreground">{question.question}</h2>

      <div className="space-y-3">
        {question.options.map((option) => (
          <button
            key={option}
            onClick={() => handleAnswer(option)}
            className="w-full p-4 text-left rounded-lg border border-border bg-card hover:bg-border hover:border-primary text-foreground transition-colors"
          >
            {option}
          </button>
        ))}
      </div>
    </Card>
  )
}
