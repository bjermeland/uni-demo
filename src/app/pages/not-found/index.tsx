import { Button, Card, Center, Title } from '@mantine/core'
import { useNavigate } from 'react-router-dom'

export const NotFoundPage = () => {
  const navigate = useNavigate()
  return (
    <Center sx={{ height: '80vh' }}>
      <Card
        shadow="sm"
        p="lg"
        radius="md"
        withBorder
        sx={{
          minWidth: '30vw',
          '@media (max-width: 995px)': {
            width: '100%',
          },
        }}
      >
        <Title sx={{ fontSize: '20px' }} align="center">
          We could not find the page you are looking for.
        </Title>
        <Center mt="xl">
          <Button onClick={() => navigate(-1)}>Go back</Button>
        </Center>
      </Card>
    </Center>
  )
}
