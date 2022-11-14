import { NavLink } from '@mantine/core'
import { IconId } from '@tabler/icons'
import { Link, useLocation } from 'react-router-dom'

const items = [
  {
    icon: <IconId size={18} />,
    label: 'Contacts',
    description: '',
    to: '/contacts',
    component: Link,
  },
]

export const NavbarItems = () => {
  const location = useLocation()
  return (
    <div>
      {items.map(item => {
        return (
          <NavLink
            {...item}
            key={item.label}
            component={Link}
            active={location.pathname === item.to}
            my="md"
          />
        )
      })}
    </div>
  )
}
