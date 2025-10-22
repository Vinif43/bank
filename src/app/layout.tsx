import type { Metadata } from 'next'
// eslint-disable-next-line camelcase
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { Toaster } from 'sonner'
import { AccountProvider } from '@/contexts/account-context'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Lumen Financial',
  description: 'Projeto Pós Gradução FIAP + Alura - Fase 1',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AccountProvider>{children}</AccountProvider>
        <Toaster richColors position="top-right" />
      </body>
    </html>
  )
}
