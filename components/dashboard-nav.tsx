'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'

interface DashboardNavProps {
  user: any
  onLogout: () => void
}

export default function DashboardNav({ user, onLogout }: DashboardNavProps) {
  return (
    <nav className="border-b border-border bg-card">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/dashboard" className="text-2xl font-bold text-primary">
          AI Career Mentor
        </Link>
        <div className="flex items-center gap-4">
          <span className="text-sm text-muted-foreground">{user?.email}</span>
          <Button
            onClick={onLogout}
            variant="outline"
            className="border-border text-foreground hover:bg-border"
          >
            Logout
          </Button>
        </div>
      </div>
    </nav>
  )
}
