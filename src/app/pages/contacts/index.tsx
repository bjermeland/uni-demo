import { useContacts } from '../../../utils/hooks/useContacts'
import { CustomLoader } from '../../components/CustomLoader'
import { CustomTable } from '../../components/CustomTable'

import { Stack, Text, Title } from '@mantine/core'

export const ContactsPage = () => {
  const contactsQuery = useContacts()

  if (contactsQuery.isLoading) return <CustomLoader />

  return (
    <>
      <Stack spacing={3}>
        <Title order={3} mb="md">
          Contacts
        </Title>
        <Text>View, edit, delete and create new contacts.</Text>
      </Stack>
      <CustomTable data={contactsQuery.data ?? []} />
    </>
  )
}
