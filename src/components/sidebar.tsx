'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, ArrowLeftRight, TrendingUp, MoreHorizontal } from 'lucide-react'
import { cn } from '@/lib/utils'

const navigation = [
  { name: 'Início', href: '/home', icon: Home },
  { name: 'Transações', href: '/transacoes', icon: ArrowLeftRight },
  { name: 'Investimentos', href: '/investimentos', icon: TrendingUp },
  { name: 'Outros serviços', href: '/servicos', icon: MoreHorizontal },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="w-64 bg-sidebar border-r border-sidebar-border flex flex-col">
      <nav className="flex-1 p-6 space-y-2">
        {navigation.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                'flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors',
                isActive
                  ? 'bg-sidebar-accent text-sidebar-accent-foreground'
                  : 'text-sidebar-foreground/70 hover:bg-sidebar-accent/50 hover:text-sidebar-foreground',
              )}
            >
              <item.icon className="h-5 w-5" />
              {item.name}
            </Link>
          )
        })}
      </nav>
    </aside>
  )
}
