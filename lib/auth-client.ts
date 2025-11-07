"use client"

export interface User {
  id: string
  name: string
  email: string
  role: string
}

export interface AuthSession {
  user: User
  expiresAt: number
}

const SESSION_KEY = "clientdock_session"
const SESSION_DURATION = 30 * 24 * 60 * 60 * 1000 // 30 days

export function getSession(): AuthSession | null {
  if (typeof window === "undefined") return null

  const sessionStr = localStorage.getItem(SESSION_KEY)
  if (!sessionStr) return null

  try {
    const session = JSON.parse(sessionStr) as AuthSession
    if (session.expiresAt < Date.now()) {
      localStorage.removeItem(SESSION_KEY)
      return null
    }
    return session
  } catch {
    return null
  }
}

export function setSession(user: User): void {
  const session: AuthSession = {
    user,
    expiresAt: Date.now() + SESSION_DURATION,
  }
  localStorage.setItem(SESSION_KEY, JSON.stringify(session))
}

export function clearSession(): void {
  localStorage.removeItem(SESSION_KEY)
}

export function isAuthenticated(): boolean {
  return getSession() !== null
}
