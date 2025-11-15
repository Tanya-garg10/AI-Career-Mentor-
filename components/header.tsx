'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'

interface HeaderProps {
  isAuthenticated?: boolean
}

export default function Header({ isAuthenticated }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
              <span className="text-white text-sm font-bold">CM</span>
            </div>
            <span className="hidden sm:inline">CareerMentor</span>
          </Link>
          
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#features" className="text-foreground/70 hover:text-foreground transition">Features</a>
            <a href="#how-it-works" className="text-foreground/70 hover:text-foreground transition">How it works</a>
            <a href="#impact" className="text-foreground/70 hover:text-foreground transition">Impact</a>
          </nav>

          <div className="flex items-center gap-3">
            {isAuthenticated ? (
              <>
                <Link href="/dashboard">
                  <Button size="sm" variant="ghost">Dashboard</Button>
                </Link>
                <Link href="/auth">
                  <Button size="sm" variant="outline">Logout</Button>
                </Link>
              </>
            ) : (
              <>
                <Link href="/auth">
                  <Button variant="ghost" size="sm">Sign in</Button>
                </Link>
                <Link href="/auth">
                  <Button size="sm" className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600">Get started</Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}
