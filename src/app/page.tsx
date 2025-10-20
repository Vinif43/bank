'use client'

import { RegisterForm } from '@/components/register-form'
import { LoginForm } from '../components/login-form'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog'
import { LogIn, UserPlus, Banknote } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function LoginPage() {
  const [isLoginDialogOpen, setIsLoginDialogOpen] = useState(false)
  const [isRegisterDialogOpen, setIsRegisterDialogOpen] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <div>
      <header className="bg-primary text-primary-foreground px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Banknote className="h-6 w-6" />
          <h1 className="text-xl font-bold">Bank App</h1>
        </div>

        <div className="flex items-center gap-2">
          <Button
            onClick={() => setIsRegisterDialogOpen(true)}
            className="bg-primary-foreground text-primary border-2 border-transparent hover:bg-primary hover:text-primary-foreground hover:border-primary-foreground"
          >
            <UserPlus className="mr-2 h-4 w-4" />
            Cadastre-se
          </Button>

          <Button
            variant="outline"
            onClick={() => setIsLoginDialogOpen(true)}
            className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
          >
            <LogIn className="mr-2 h-4 w-4" />
            Entrar
          </Button>
        </div>
      </header>

      <main className="flex min-h-screen flex-col items-center justify-center p-4 text-center">
        <h2 className="text-4xl font-bold mb-4">Bem-vindo (a)</h2>
        <p className="text-muted-foreground">
          Seu banco digital, simples e seguro. <br />
          Acesse sua conta ou cadastre-se para começar. <br />
          Preencher informações extras
        </p>
      </main>

      {!isMounted ? null : (
        <>
          {/* Diálogo de Cadastro */}
          <Dialog
            open={isRegisterDialogOpen}
            onOpenChange={setIsRegisterDialogOpen}
          >
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Criar nova Conta</DialogTitle>
                <DialogDescription>
                  Preencha o formulário abaixo para se cadastrar.
                </DialogDescription>
              </DialogHeader>
              <RegisterForm onSuccess={() => setIsRegisterDialogOpen(false)} />
            </DialogContent>
          </Dialog>

          {/* Diálogo de Login */}
          <Dialog open={isLoginDialogOpen} onOpenChange={setIsLoginDialogOpen}>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Acessar sua Conta</DialogTitle>
              </DialogHeader>
              <LoginForm />
            </DialogContent>
          </Dialog>
        </>
      )}
    </div>
  )
}
