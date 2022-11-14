import { showNotification } from '@mantine/notifications'

export const showErrorNotification = (message: string) => {
  showNotification({
    title: 'An error occured',
    message,
    color: 'red',
    autoClose: 15000,
  })
}

export const showSuccessNotification = (message: string) => {
  showNotification({
    title: 'Success',
    message,
    color: 'green',
    autoClose: 5000,
  })
}
