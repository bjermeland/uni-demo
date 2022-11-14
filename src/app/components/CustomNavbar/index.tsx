import { NavbarItems } from './NavbarItems'
import { UserView } from './UserView'
import { User } from 'shared/interfaces/user.interface'

import { Navbar } from '@mantine/core'

interface CustomNavbarProps {
  opened: boolean
  user: User
}

export const CustomNavbar = ({ opened, user }: CustomNavbarProps) => {
  return (
    <Navbar p="md" hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 200, lg: 300 }}>
      <Navbar.Section grow mt="xs">
        <NavbarItems />
      </Navbar.Section>
      <Navbar.Section>
        <UserView user={user} />
      </Navbar.Section>
    </Navbar>
  )
}
