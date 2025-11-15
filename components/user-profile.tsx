'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'

interface UserProfileProps {
  user: any
  onUpdate: (user: any) => void
}

export default function UserProfile({ user, onUpdate }: UserProfileProps) {
  const [isEditing, setIsEditing] = useState(false)
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: user?.phone || '',
    skills: user?.skills || '',
    targetRole: user?.targetRole || '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSave = () => {
    const updatedUser = { ...user, ...formData }
    localStorage.setItem('user', JSON.stringify(updatedUser))
    onUpdate(updatedUser)
    setIsEditing(false)
  }

  return (
    <Card className="p-8 border border-border max-w-2xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-foreground">Your Profile</h2>
        <Button
          onClick={() => (isEditing ? handleSave() : setIsEditing(true))}
          className="bg-primary text-primary-foreground hover:bg-primary/90"
        >
          {isEditing ? 'Save Changes' : 'Edit Profile'}
        </Button>
      </div>

      <div className="space-y-4">
        {['name', 'email', 'phone', 'skills', 'targetRole'].map((field) => (
          <div key={field}>
            <label className="block text-sm font-medium text-foreground mb-2 capitalize">
              {field === 'targetRole' ? 'Target Role' : field}
            </label>
            {isEditing ? (
              <Input
                type="text"
                name={field}
                value={formData[field as keyof typeof formData]}
                onChange={handleChange}
                placeholder={`Enter your ${field}`}
                className="w-full"
              />
            ) : (
              <p className="text-muted-foreground">
                {formData[field as keyof typeof formData] || `Not provided`}
              </p>
            )}
          </div>
        ))}
      </div>

      {isEditing && (
        <div className="mt-6 flex gap-3">
          <Button
            onClick={handleSave}
            className="bg-primary text-primary-foreground hover:bg-primary/90"
          >
            Save Changes
          </Button>
          <Button
            onClick={() => setIsEditing(false)}
            variant="outline"
            className="border-border"
          >
            Cancel
          </Button>
        </div>
      )}
    </Card>
  )
}
