import { useUser } from '../../hooks/useUser'
import { CustomHeader } from '../CustomHeader'
import { CustomNavbar } from '../CustomNavbar'

import { AppShell, Container } from '@mantine/core'
import { ReactNode, useState } from 'react'

export const AppContainer = ({ children }: { children: ReactNode }) => {
  const [opened, setOpened] = useState(false)

  const { user } = useUser()

  return (
    <AppShell
      padding="md"
      navbarOffsetBreakpoint="sm"
      navbar={user ? <CustomNavbar opened={opened} user={user} /> : <></>}
      header={<CustomHeader hideNavbar={!user} opened={opened} setOpened={setOpened} />}
      styles={theme => ({
        main: {
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
        },
      })}
    >
      <Container>{children}</Container>
    </AppShell>
  )
}
