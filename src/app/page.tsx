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
import {
  LogIn,
  UserPlus,
  Gift,
  HandCoins,
  Star,
  MonitorSmartphone,
  Landmark,
} from 'lucide-react'
import { useState, useEffect } from 'react'

export default function LoginPage() {
  const [isLoginDialogOpen, setIsLoginDialogOpen] = useState(false)
  const [isRegisterDialogOpen, setIsRegisterDialogOpen] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-primary text-primary-foreground px-8 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <Landmark className="h-7 w-7 text-[#ffd21f]" />
          <img
            src="/logo-destaque.png"
            alt="logo-destaque"
            className="h-[50px]"
          />
        </div>

        <div className="flex items-center gap-2">
          <Button
            onClick={() => setIsRegisterDialogOpen(true)}
            className="bg-primary-foreground text-primary border-2 border-transparent hover:bg-[#ffd21f] hover:text-primary hover:border-[#ffd21f]"
          >
            <UserPlus className="h-4 w-4" />
            Abra sua conta
          </Button>

          <Button
            variant="outline"
            onClick={() => setIsLoginDialogOpen(true)}
            className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-[#db9dda] hover:text-primary hover:border-[#db9dda]"
          >
            <LogIn className="h-4 w-4" />
            Entrar
          </Button>
        </div>
      </header>

      <main className="flex flex-1 flex-col items-center bg-[#540057] bg-[linear-gradient(180deg,_rgba(84,_0,_87,_1)_0%,_rgba(255,_255,_205,_1)_70%,_rgba(255,_255,_255,_1)_100%)]">
        <div className="flex gap-[12px] items-center p-[3%]">
          <h1 className="text-[22px] text-center font-semibold">
            Experimente mais liberdade no controle da sua vida financeira.
            <br />
            Crie sua conta com a gente!
          </h1>
          <img src="/pessoas.png" alt="pessoas" />
        </div>
        <h2 className="text-[18px] font-medium mb-[3vh]">
          Vantagens do nosso banco
        </h2>
        <div className="grid grid-cols-[1fr_1fr_1fr_1fr] gap-[20px] pt-[0] px-[3%] pb-[3%]">
          <div className="border-[1px]border-[#000] rounded-[16px] p-[14px] flex flex-col items-center justify-center [box-shadow:0px_5px_15px_rgba(0,_0,_0,_0.5)]">
            <Gift className="h-9 w-9 text-[#435200]" />
            <h1 className="text-[#435200] text-[16px] font-medium mb-[6px]">
              Conta e cartão gratuitos
            </h1>
            <p className="text-[14px] text-center">
              Isso mesmo, nossa conta é digital, sem custo fixo e mais que isso:
              sem tarifa de manutenção.
            </p>
          </div>
          <div className="border-[1px]border-[#000] rounded-[16px] p-[14px] flex flex-col items-center justify-center [box-shadow:0px_5px_15px_rgba(0,_0,_0,_0.5)]">
            <HandCoins className="h-9 w-9 text-[#435200]" />
            <h1 className="text-[#435200] text-[16px] font-medium mb-[6px]">
              Saques sem custo
            </h1>
            <p className="text-[14px] text-center">
              Você pode sacar gratuitamente 4x por mês de qualquer Banco 24h.
            </p>
          </div>
          <div className="border-[1px]border-[#000] rounded-[16px] p-[14px] flex flex-col items-center justify-center [box-shadow:0px_5px_15px_rgba(0,_0,_0,_0.5)]">
            <Star className="h-9 w-9 text-[#435200]" />
            <h1 className="text-[#435200] text-[16px] font-medium mb-[6px]">
              Programa de pontos
            </h1>
            <p className="text-[14px] text-center">
              Você pode acumular pontos com suas compras no crédito sem pagar
              mensalidade!
            </p>
          </div>
          <div className="border-[1px]border-[#000] rounded-[16px] p-[14px] flex flex-col items-center justify-center [box-shadow:0px_5px_15px_rgba(0,_0,_0,_0.5)]">
            <MonitorSmartphone className="h-9 w-9 text-[#435200]" />
            <h1 className="text-[#435200] text-[16px] font-medium mb-[6px]">
              Seguro Dispositivos
            </h1>
            <p className="text-[14px] text-center">
              Seus dispositivos móveis (computador e laptop) protegidos por uma
              mensalidade simbólica.
            </p>
          </div>
        </div>
      </main>

      <footer className="bg-primary text-primary-foreground px-8 py-4 flex items-center justify-evenly">
        <div>
          <h1 className="text-[14px] font-bold">Serviços</h1>
          <p className="text-[12px]">Conta Corrente</p>
          <p className="text-[12px]">Conta PJ</p>
          <p className="text-[12px]">Cartão de Crédito</p>
        </div>

        <div>
          <h1 className="text-[14px] font-bold">Contatos</h1>
          <p className="text-[12px]">0800 486 345 02</p>
          <p className="text-[12px]">suporte@lumenfinancial.com.br</p>
          <p className="text-[12px]">ouvidoria@lumenfinancial.com.br</p>
        </div>
      </footer>

      {!isMounted ? null : (
        <>
          {/* Diálogo de Cadastro */}
          <Dialog
            open={isRegisterDialogOpen}
            onOpenChange={setIsRegisterDialogOpen}
          >
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Abrir nova Conta</DialogTitle>
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
