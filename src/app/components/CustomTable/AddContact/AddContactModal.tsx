import { useCreateContact } from '../../../../utils/hooks/useCreateContact'
import { useCustomers } from '../../../../utils/hooks/useCustomers'
import { CustomModal } from '../../CustomModal/CustomModal'
import { ContactDto } from 'shared/interfaces/contact-dto.interface'

import { Button, Group, SimpleGrid, TextInput } from '@mantine/core'
import { Select } from '@mantine/core'
import { useForm } from '@mantine/form'

interface AddContactModalProps {
  title: string
  isOpen: boolean
  setIsOpen: (open: boolean) => void
}

interface ContactForm {
  ParentBusinessRelationID: number
  Role: string
  Name: string
  PhoneNumber: string
  EmailAddress: string
}

export const AddContactModal = ({ title, isOpen, setIsOpen }: AddContactModalProps) => {
  const form = useForm<ContactForm>({
    initialValues: {
      ParentBusinessRelationID: 0,
      Role: '',
      Name: '',
      PhoneNumber: '',
      EmailAddress: '',
    },
    validate: {
      ParentBusinessRelationID: value => (value !== 0 ? null : 'Customer is required'),
      Name: value => (value !== '' ? null : 'Name is required'),
      EmailAddress: value => (/^\S+@\S+$/.test(value) ? null : 'Email is not valid'),
    },
  })

  const customersQuery = useCustomers()

  const { mutateAsync: createContact } = useCreateContact()

  const handleSubmit = () => {
    const contactDto: ContactDto = {
      Role: form.values.Role,
      ParentBusinessRelationID: form.values.ParentBusinessRelationID,
      Info: {
        Name: form.values.Name,
        DefaultPhone: {
          Number: form.values.PhoneNumber,
        },
        DefaultEmail: {
          EmailAddress: form.values.EmailAddress,
        },
      },
    }

    createContact(contactDto)
    setIsOpen(false)
  }

  return (
    <CustomModal title={title} isOpen={isOpen} setIsOpen={setIsOpen}>
      <form onSubmit={form.onSubmit(_ => handleSubmit())}>
        <Select
          mb="md"
          label="Customer"
          withAsterisk
          searchable
          nothingFound="No customers found"
          placeholder="Select customer"
          data={
            customersQuery.data
              ? customersQuery.data.map(customer => ({
                  value: customer.BusinessRelationID.toString(),
                  label: customer.Info.Name,
                }))
              : []
          }
          {...form.getInputProps('ParentBusinessRelationID')}
        />
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
          <Button type="submit">Create contact</Button>
        </Group>
      </form>
    </CustomModal>
  )
}
