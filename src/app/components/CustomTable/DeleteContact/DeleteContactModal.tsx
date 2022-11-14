import { useDeleteContact } from '../../../../utils/hooks/useDeleteContact'
import { CustomModal } from '../../CustomModal/CustomModal'
import { Contact } from 'shared/interfaces/contact.interface'

import { Button, Group, Text } from '@mantine/core'

interface DeleteContactModalProps {
  title: string
  isOpen: boolean
  setIsOpen: (open: boolean) => void
  contact: Contact
}

export const DeleteContactModal = ({
  title,
  isOpen,
  setIsOpen,
  contact,
}: DeleteContactModalProps) => {
  const { mutateAsync: deleteContact } = useDeleteContact()

  const handleDeleteContact = () => {
    deleteContact(contact.ID)
    setIsOpen(false)
  }

  return (
    <CustomModal title={title} isOpen={isOpen} setIsOpen={setIsOpen}>
      <Text size="sm">
        Are you sure you would like to delete the selected contact? This action is irreversible.
      </Text>
      <Group mt={25} position="right">
        <Button onClick={() => setIsOpen(false)}>Cancel</Button>
        <Button color="red" variant="outline" onClick={handleDeleteContact}>
          Delete
        </Button>
      </Group>
    </CustomModal>
  )
}
