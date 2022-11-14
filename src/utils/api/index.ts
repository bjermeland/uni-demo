import { api } from './api'
import { ContactDto } from 'shared/interfaces/contact-dto.interface'
import { Contact } from 'shared/interfaces/contact.interface'
import { Customer } from 'shared/interfaces/customer.interface'

export const getCustomers = async () =>
  (await api.get<Customer[]>('/api/biz/customers?expand=Info.Name')).data

export const getContacts = async () =>
  (
    await api.get<Contact[]>(
      '/api/biz/contacts?expand=Info,Info.InvoiceAddress,Info.DefaultPhone,Info.DefaultEmail,Info.DefaultAddress,ParentBusinessRelation',
    )
  ).data

export const createContact = async (contact: ContactDto) =>
  (await api.post<Contact>('/api/biz/contacts', contact)).data

export const updateContact = async (contact: ContactDto) =>
  (await api.put<Contact>(`/api/biz/contacts/${contact.ID}`, contact)).data

export const deleteContact = async (contactId: number) =>
  (await api.delete<Contact>(`/api/biz/contacts/${contactId}`)).data
