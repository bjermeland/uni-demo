import { createContact } from '../../utils/api'
import { showSuccessNotification } from '../../utils/notifications'
import { ContactDto } from 'shared/interfaces/contact-dto.interface'
import { Contact } from 'shared/interfaces/contact.interface'

import { AxiosError } from 'axios'
import { useMutation, useQueryClient } from 'react-query'

export const useCreateContact = () => {
  const queryClient = useQueryClient()
  return useMutation<Contact, AxiosError, ContactDto>(contact => createContact(contact), {
    onSuccess: () => {
      queryClient.invalidateQueries(['contacts'])
      showSuccessNotification('Created new contact successfully')
    },
  })
}
