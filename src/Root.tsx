import { App } from './app/App'
import configuration from './utils/auth/configuration'

import { ColorScheme, ColorSchemeProvider, MantineProvider } from '@mantine/core'
import { NotificationsProvider } from '@mantine/notifications'
import { useState } from 'react'
import { AuthProvider } from 'react-oidc-context'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

const queryClient = new QueryClient()

export const Root = () => {
  const [colorScheme, setColorScheme] = useState<ColorScheme>('dark')

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'))

  return (
    <AuthProvider {...configuration}>
      <QueryClientProvider client={queryClient}>
        <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
          <MantineProvider
            theme={{ colorScheme, loader: 'dots' }}
            withGlobalStyles
            withNormalizeCSS
          >
            <NotificationsProvider>
              <App />
            </NotificationsProvider>
          </MantineProvider>
        </ColorSchemeProvider>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </AuthProvider>
  )
}
