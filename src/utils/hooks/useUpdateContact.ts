import { updateContact } from '../api'
import { showSuccessNotification } from '../notifications'
import { ContactDto } from 'shared/interfaces/contact-dto.interface'
import { Contact } from 'shared/interfaces/contact.interface'

import { AxiosError } from 'axios'
import { useMutation, useQueryClient } from 'react-query'

export const useUpdateContact = () => {
  const queryClient = useQueryClient()
  return useMutation<Contact, AxiosError, ContactDto>(contact => updateContact(contact), {
    onSuccess: () => {
      queryClient.invalidateQueries(['contacts'])
      showSuccessNotification('Updated contact successfully')
    },
  })
}
