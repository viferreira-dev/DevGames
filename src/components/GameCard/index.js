import { TouchableOpacity } from 'react-native';
import {
  Background,
  Container,
  RatingText,
  Title,
  Rating,
  TrashButton
} from './styles'

import IconStar from 'react-native-vector-icons/FontAwesome'
import IconTrash from 'react-native-vector-icons/Feather'

import { useNavigation } from '@react-navigation/native';

export default function GameCard({ data, isFavoritePage, onDeleteFavorite }) {
  const navigation = useNavigation()

  return (
    <Container>

      <TouchableOpacity
        onPress={() => navigation.navigate("Detalhes", { game: data })}
      >
        <Background source={{ uri: data.background_image }} />
      </TouchableOpacity>

      {isFavoritePage && (
        <TrashButton
          onPress={() => onDeleteFavorite(data.id)}
        >
          <IconTrash
            name="trash-2"
            color="#FFF"
            size={20}
          />
        </TrashButton>
      )}

      <Title>{data.name}</Title>

      <Rating>
        <IconStar
          name="star"
          size={20}
          color="#FFD700"
        />

        <RatingText>{data.rating}/10</RatingText>
      </Rating>

    </Container>
  );
}

