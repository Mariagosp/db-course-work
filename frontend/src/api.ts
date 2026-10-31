import { useAuthStore } from './store/useAuthStore'

function withAccessToken(options: RequestInit): RequestInit {
  const accessToken = useAuthStore.getState().accessToken
  const headers = new Headers(options.headers)

  if (accessToken) {
    headers.set('Authorization', `Bearer ${accessToken}`)
  }

  return { ...options, headers }
}

async function refreshSession() {
  const refreshToken = useAuthStore.getState().refreshToken

  if (!refreshToken) {
    return false
  }

  const response = await fetch('/api/auth/refresh', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ refreshToken }),
  })

  if (!response.ok) {
    return false
  }

  const session = await response.json()
  useAuthStore.getState().setSession(session)
  return true
}

export async function api(path: string, options: RequestInit = {}) {
  const response = await fetch(path, withAccessToken(options))

  if (response.status !== 401) {
    return response
  }

  const refreshed = await refreshSession()

  if (!refreshed) {
    useAuthStore.getState().clearSession()
    return response
  }

  return fetch(path, withAccessToken(options))
}
