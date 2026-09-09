import { Container, Description, Header, Title } from './styles'
import IconArrowBack from 'react-native-vector-icons/Feather'
import { TouchableOpacity } from 'react-native'

export default function ModalDescription({ data, visibleModal }) {

  return (
    <Container>
      <Header>
        <TouchableOpacity onPress={visibleModal}>
          <IconArrowBack name='arrow-left' color='#FFF' size={30} />
        </TouchableOpacity>

        <Title>Description</Title>
      </Header>

      <Description>
        {data?.description
          ?.replace(/<[^>]*>/g, '')
          .slice(0)}
      </Description>
    </Container>
  )
}