import { Background, Title } from './styles'
import api from '../../services/api';
import { useNavigation } from '@react-navigation/native';

export default function Category({ data }) {
  const navigation = useNavigation()

  async function getCategory() {
    try {
      const response = await api.get('/games', {
        params: {
          key: 'd22198479fd144bcb2462c4d8e011db2',
          genres: data.id
        }
      })

      navigation.navigate('Categoria', {
        games: response.data.results,
        categoryName: data.name
      })

    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Background onPress={getCategory}>
      <Title>{data.name}</Title>
    </Background>
  );
}