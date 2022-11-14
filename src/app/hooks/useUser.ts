import { User } from 'shared/interfaces/user.interface'

import { useEffect, useState } from 'react'
import { useAuth } from 'react-oidc-context'

export const useUser = () => {
  const [user, setUser] = useState<User>()

  const auth = useAuth()

  const profile: User | undefined = auth.user?.profile

  useEffect(() => setUser(profile), [profile])

  return { user }
}
