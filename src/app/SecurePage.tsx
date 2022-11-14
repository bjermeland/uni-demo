import { useAuthStore } from '../store'
import { CustomLoader } from './components/CustomLoader'

import { ReactNode } from 'react'
import { useAuth } from 'react-oidc-context'

interface AdminSecureProps {
  children: ReactNode
}

let isLoading = false

export const SecurePage = ({ children }: AdminSecureProps) => {
  const auth = useAuth()
  const setAccessToken = useAuthStore(state => state.setAccessToken)

  setAccessToken(auth.user?.access_token ?? '')

  if (auth.error) {
    return (
      <div>
        Oops... {auth.error.message}
        <br />
        <button onClick={() => auth.signinRedirect()}>Retry</button>
      </div>
    )
  }

  if (!auth.isLoading && !auth.isAuthenticated && auth.settings.authority !== '' && !isLoading) {
    auth.signinRedirect()
    isLoading = true
  }

  if (auth.isLoading) return <CustomLoader />

  return auth.isAuthenticated ? <>{children}</> : <p>Unauthorized</p>
}
