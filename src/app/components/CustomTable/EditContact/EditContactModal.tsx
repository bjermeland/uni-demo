import { useUpdateContact } from '../../../../utils/hooks/useUpdateContact'
import { CustomModal } from '../../CustomModal/CustomModal'
import { ContactDto } from 'shared/interfaces/contact-dto.interface'
import { Contact } from 'shared/interfaces/contact.interface'

import { Button, Group, SimpleGrid, TextInput } from '@mantine/core'
import { useForm } from '@mantine/form'

interface EditContactModalProps {
  title: string
  isOpen: boolean
  setIsOpen: (open: boolean) => void
  contact: Contact
}

interface ContactForm {
  Role: string
  Name: string
  PhoneNumber: string
  EmailAddress: string
}

export const EditContactModal = ({ title, isOpen, setIsOpen, contact }: EditContactModalProps) => {
  const form = useForm<ContactForm>({
    initialValues: {
      Role: contact.Role,
      Name: contact.Info.Name,
      PhoneNumber: contact.Info.DefaultPhone.Number,
      EmailAddress: contact.Info.DefaultEmail.EmailAddress,
    },
    validate: {
      Name: value => (value !== '' ? null : 'Name is required'),
      EmailAddress: value => (/^\S+@\S+$/.test(value) ? null : 'Email is not valid'),
    },
  })

  const { mutateAsync: updateContact } = useUpdateContact()

  const handleSubmit = () => {
    const contactDto: ContactDto = {
      ID: contact.ID,
      Role: form.values.Role,
      Info: {
        ID: contact.Info.ID,
        Name: form.values.Name,
        DefaultPhone: {
          ID: contact.Info.DefaultPhone.ID,
          Number: form.values.PhoneNumber,
        },
        DefaultEmail: {
          ID: contact.Info.DefaultEmail.ID,
          EmailAddress: form.values.EmailAddress,
        },
      },
    }

    updateContact(contactDto)
    setIsOpen(false)
  }

  return (
    <CustomModal title={title} isOpen={isOpen} setIsOpen={setIsOpen}>
      <form onSubmit={form.onSubmit(_ => handleSubmit())}>
        <SimpleGrid cols={2} mb="md">
          <TextInput label="Name" placeholder="Name" withAsterisk {...form.getInputProps('Name')} />
          <TextInput label="Role" placeholder="Role" {...form.getInputProps('Role')} />
        </SimpleGrid>
        <SimpleGrid cols={2} mb="md">
          <TextInput
            type="number"
            label="Telephone"
            placeholder="Telephone"
            {...form.getInputProps('PhoneNumber')}
          />
          <TextInput
            type="email"
            label="E-mail"
            placeholder="E-mail"
            withAsterisk
            {...form.getInputProps('EmailAddress')}
          />
        </SimpleGrid>
        <Group mt={25} position="right">
          <Button variant="outline" onClick={() => setIsOpen(false)}>
            Cancel
          </Button>
          <Button type="submit">Edit contact</Button>
        </Group>
      </form>
    </CustomModal>
  )
}
