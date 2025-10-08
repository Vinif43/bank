'use client'

import { User } from 'lucide-react'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'

interface HeaderProps {
  userName: string
}

export function Header({ userName }: HeaderProps) {
  return (
    <header className="bg-primary text-primary-foreground px-8 py-4 flex items-center justify-between">
      <div className="flex-1" />
      <div className="flex items-center gap-3">
        <span className="text-sm font-medium">{userName}</span>
        <Avatar className="h-10 w-10 border-2 border-primary-foreground/20">
          <AvatarFallback className="bg-primary-foreground/10 text-primary-foreground">
            <User className="h-5 w-5" />
          </AvatarFallback>
        </Avatar>
      </div>
    </header>
  )
}
