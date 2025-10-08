'use client'

import { Header } from '@/components/header'
import { Sidebar } from '@/components/sidebar'
import { mockAccount } from '@/lib/mock-data'
import { Card, CardContent } from '@/components/ui/card'

export default function InvestimentosPage() {
  return (
    <div className="">
      <div className="flex-1 p-8">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">Investimentos</h1>
        </div>
      </div>
    </div>
  )
}
