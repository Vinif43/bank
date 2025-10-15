import { LoginForm } from '../components/login-form'

export default function LoginPage() {
  return (
    <div>
      <header className="bg-primary text-primary-foreground px-8 py-4 flex items-center justify-between"></header>
      <main className="flex min-h-screen flex-col items-center justify-center p-4">
        <LoginForm />
      </main>
    </div>
  )
}
