import { User } from 'shared/interfaces/user.interface'

import { Box, Group, Menu, Text, UnstyledButton, useMantineTheme } from '@mantine/core'
import { IconChevronRight, IconLogout } from '@tabler/icons'
import { useAuth } from 'react-oidc-context'

export const UserView = ({ user }: { user: User }) => {
  const theme = useMantineTheme()

  const auth = useAuth()

  const handleLogout = () => auth.signoutRedirect()

  return (
    <Box
      sx={{
        paddingTop: theme.spacing.sm,
        borderTop: `1px solid ${
          theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]
        }`,
      }}
    >
      <Menu trigger="hover" withArrow position="right-start">
        <Menu.Target>
          <UnstyledButton
            sx={theme => ({
              display: 'block',
              width: '100%',
              padding: theme.spacing.md,
              color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,

              '&:hover': {
                backgroundColor:
                  theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
              },
            })}
          >
            <Group>
              <div style={{ flex: 1 }}>
                <Text size="sm" weight={500}>
                  {user.name}
                </Text>

                <Text color="dimmed" size="xs">
                  {user.email}
                </Text>
              </div>
              <IconChevronRight size={16} />
            </Group>
          </UnstyledButton>
        </Menu.Target>

        <Menu.Dropdown>
          <Menu.Label>Account</Menu.Label>
          <Menu.Item icon={<IconLogout size={14} />} onClick={handleLogout}>
            Logout
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </Box>
  )
}
