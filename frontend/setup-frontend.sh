
set -e

echo "🚀 Iniciando scaffold da pasta frontend..."

# 1. Criar diretórios
mkdir -p app/login app/student app/teacher app/admin
mkdir -p components
mkdir -p lib/auth
mkdir -p styles
mkdir -p public

# 2. Arquivos de configuração raiz
cat << 'EOF' > .env
NEXTAUTH_SECRET=alguma_chave_secreta
NEXTAUTH_URL=http://localhost:3001
API_URL=http://localhost:4000
EOF

cat << 'EOF' > next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig
EOF

cat << 'EOF' > tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: { extend: {} },
  plugins: [],
}
EOF

cat << 'EOF' > postcss.config.js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
EOF

cat << 'EOF' > package.json
{
  "name": "frontend",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "next dev -p 3001",
    "build": "next build",
    "start": "next start -p 3001"
  },
  "dependencies": {
    "next": "13.4.2",
    "react": "18.2.0",
    "react-dom": "18.2.0",
    "next-auth": "^4.22.1",
    "zod": "^3.22.2",
    "@hookform/resolvers": "^2.9.11",
    "@tanstack/react-query": "^4.21.0",
    "tailwindcss": "^3.3.2",
    "autoprefixer": "^10.4.14",
    "postcss": "^8.4.21"
  }
}
EOF

cat << 'EOF' > tsconfig.json
{
  "compilerOptions": {
    "target": "es5",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "baseUrl": "."
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", "**/*.js"],
  "exclude": ["node_modules"]
}
EOF

# 3. Estilos globais
cat << 'EOF' > styles/globals.css
@tailwind base;
@tailwind components;
@tailwind utilities;
EOF

# 4. App Router (Next.js 13+)
cat << 'EOF' > app/layout.tsx
import './globals.css'
import { SessionProvider } from 'next-auth/react'

export const metadata = {
  title: 'Plataforma EAD',
  description: 'Aprenda online no seu ritmo',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt">
      <body>
        <SessionProvider>{children}</SessionProvider>
      </body>
    </html>
  )
}
EOF

cat << 'EOF' > app/page.tsx
export default function Home() {
  return <div className="p-8">Bem-vindo à plataforma EAD 🎓</div>
}
EOF

cat << 'EOF' > app/login/page.tsx
"use client"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { signIn } from "next-auth/react"

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
})

export default function LoginPage() {
  const { register, handleSubmit, formState } = useForm({ resolver: zodResolver(schema) })
  const onSubmit = async (data: any) => {
    await signIn("credentials", { ...data, redirect: true, callbackUrl: "/" })
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 max-w-sm mx-auto mt-16">
      <input type="email" placeholder="Email" {...register("email")} />
      <input type="password" placeholder="Senha" {...register("password")} />
      <button type="submit" disabled={formState.isSubmitting}>Entrar</button>
    </form>
  )
}
EOF

cat << 'EOF' > app/student/page.tsx
export default function StudentDashboard() {
  return <div className="p-8">Painel do Aluno</div>
}
EOF

cat << 'EOF' > app/teacher/page.tsx
export default function TeacherDashboard() {
  return <div className="p-8">Painel do Professor</div>
}
EOF

cat << 'EOF' > app/admin/page.tsx
export default function AdminDashboard() {
  return <div className="p-8">Painel Admin</div>
}
EOF

# 5. Componentes reutilizáveis
cat << 'EOF' > components/Header.tsx
export default function Header() {
  return (
    <header className="bg-blue-600 text-white p-4">
      <h1 className="text-xl">Plataforma EAD</h1>
    </header>
  )
}
EOF

cat << 'EOF' > components/Sidebar.tsx
import React from 'react'

export default function Sidebar() {
  return (
    <aside className="w-64 bg-gray-100 p-4">
      <nav>
        <ul className="space-y-2">
          <li><a href="/" className="text-blue-600">Home</a></li>
          <li><a href="/student" className="text-blue-600">Aluno</a></li>
          <li><a href="/teacher" className="text-blue-600">Professor</a></li>
          <li><a href="/admin" className="text-blue-600">Admin</a></li>
        </ul>
      </nav>
    </aside>
  )
}
EOF

cat << 'EOF' > components/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-gray-200 text-center p-4">
      <p>© {new Date().getFullYear()} Plataforma EAD</p>
    </footer>
  )
}
EOF

cat << 'EOF' > components/CourseCard.tsx
import React from 'react'

type CourseCardProps = {
  title: string
  description: string
}

export default function CourseCard({ title, description }: CourseCardProps) {
  return (
    <div className="border p-4 rounded">
      <h2 className="text-lg font-semibold">{title}</h2>
      <p>{description}</p>
    </div>
  )
}
EOF

cat << 'EOF' > components/LessonCard.tsx
type LessonCardProps = {
  title: string
  completed: boolean
}

export default function LessonCard({ title, completed }: LessonCardProps) {
  return (
    <div className={\`p-2 border-b \${completed ? 'bg-green-50' : ''}\`}>
      {title}
    </div>
  )
}
EOF

cat << 'EOF' > components/ProgressBar.tsx
type ProgressBarProps = {
  progress: number
}

export default function ProgressBar({ progress }: ProgressBarProps) {
  return (
    <div className="w-full bg-gray-200 rounded h-2">
      <div className="bg-blue-600 h-2 rounded" style={{ width: \`\${progress}%\` }}></div>
    </div>
  )
}
EOF

# 6. Autenticação NextAuth
cat << 'EOF' > lib/auth/credentials.ts
import CredentialsProvider from "next-auth/providers/credentials"
import { z } from "zod"

const credentialsSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
})

export const credentialsProvider = CredentialsProvider({
  name: "Credenciais",
  credentials: {
    email: { label: "Email", type: "email" },
    password: { label: "Senha", type: "password" },
  },
  async authorize(rawCredentials) {
    const result = credentialsSchema.safeParse(rawCredentials)
    if (!result.success) return null

    const res = await fetch(\`\${process.env.API_URL}/api/auth/login\`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(result.data),
    })

    if (!res.ok) return null
    const { token } = await res.json()
    if (!token) return null

    return { token }
  },
})
EOF

cat << 'EOF' > lib/auth/[...nextauth].ts
import NextAuth from "next-auth"
import { credentialsProvider } from "./credentials"

export default NextAuth({
  providers: [credentialsProvider],
  secret: process.env.NEXTAUTH_SECRET,
  session: { strategy: "jwt" },
  callbacks: {
    async jwt({ token, user }) {
      if (user) token.accessToken = (user as any).token
      return token
    },
    async session({ session, token }) {
      session.user = { token: token.accessToken }
      return session
    },
  },
})
EOF

# 7. Assets públicos (arquivos em branco)
touch public/favicon.ico
touch public/logo.png

echo "🎉 Scaffold do frontend criado com sucesso!"
