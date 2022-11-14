import {
  ActionIcon,
  Burger,
  Group,
  Header,
  MediaQuery,
  Text,
  useMantineColorScheme,
  useMantineTheme,
} from '@mantine/core'
import { IconMoonStars, IconSun } from '@tabler/icons'

interface CustomHeaderProps {
  hideNavbar: boolean
  opened: boolean
  setOpened: (opened: boolean) => void
}

export const CustomHeader = ({ hideNavbar, opened, setOpened }: CustomHeaderProps) => {
  const theme = useMantineTheme()
  const { toggleColorScheme } = useMantineColorScheme()

  return (
    <Header height={60}>
      <Group
        sx={theme => ({
          height: '100%',
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
        })}
        px={20}
        position="apart"
      >
        {!hideNavbar && (
          <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
            <Burger
              opened={opened}
              onClick={() => setOpened(!opened)}
              size="sm"
              color={theme.colors.gray[6]}
              mr="xl"
            />
          </MediaQuery>
        )}

        <Text size={20} weight={600}>
          My Contacts
        </Text>
        <ActionIcon
          variant="default"
          onClick={() => toggleColorScheme()}
          size={30}
          aria-label="Toggle theme"
        >
          {theme.colorScheme === 'dark' ? <IconSun size={16} /> : <IconMoonStars size={16} />}
        </ActionIcon>
      </Group>
    </Header>
  )
}
