'use client'

import { User } from 'lucide-react'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { useAccount } from '@/contexts/account-context'
import { Button } from './ui/button'
import { useRouter } from 'next/navigation'

export function Header() {
  const { account, logout } = useAccount()
  const router = useRouter()

  return (
    <header className="bg-primary text-primary-foreground px-8 py-4 flex items-center justify-between">
      <div className="flex-1" />
      <div className="flex items-center gap-3">
        {account ? (
          <span>Olá, {account.userName.split(' ')[0]}</span>
        ) : (
          <span>Carregando...</span>
        )}
        <Avatar className="h-10 w-10 border-2 border-primary-foreground/20">
          <AvatarFallback className="bg-primary-foreground/10 text-primary-foreground">
            <User className="h-5 w-5" />
          </AvatarFallback>
        </Avatar>
        <Button
          variant="outline"
          onClick={() => {
            logout()
            router.replace('/')
          }}
          className="bg-transparent border-transparent text-primary-foreground ml-[40px]"
        >
          Sair
        </Button>
      </div>
    </header>
  )
}
