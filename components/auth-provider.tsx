"use client"

import { createContext, useContext, useEffect, useState, type ReactNode } from "react"
import { useRouter, usePathname } from "next/navigation"
import { getSession, clearSession, type User } from "@/lib/auth-client"

interface AuthContextType {
  user: User | null
  isLoading: boolean
  signOut: () => void
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  isLoading: true,
  signOut: () => {},
})

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    const session = getSession()
    setUser(session?.user || null)
    setIsLoading(false)

    // Redirect logic
    const publicPaths = ["/", "/login", "/signup", "/forgot-password", "/reset-password", "/verify-email"]
    const isPublicPath = publicPaths.some((path) => pathname.startsWith(path))

    if (!session && !isPublicPath) {
      router.push(`/login?callbackUrl=${encodeURIComponent(pathname)}`)
    }
  }, [pathname, router])

  const signOut = () => {
    clearSession()
    setUser(null)
    router.push("/login")
  }

  return <AuthContext.Provider value={{ user, isLoading, signOut }}>{children}</AuthContext.Provider>
}
