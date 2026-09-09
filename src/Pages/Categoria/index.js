import { useNavigation } from "@react-navigation/native";
import { Card, Container, ContainerFav, Header } from "./styles";
import IconArrowBack from 'react-native-vector-icons/Feather'
import { TouchableOpacity } from "react-native";
import GameCard from "../../components/GameCard";

export default function Categoria({ route }) {
  const { games, categoryName } = route.params
  const navigation = useNavigation()

  return (
    <Container>
      <ContainerFav>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <IconArrowBack name='arrow-left' size={40} color='#FFF' />
        </TouchableOpacity>

        <Header>{categoryName}</Header>
      </ContainerFav>

      <Card
        data={games}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => (
          <GameCard data={item} />
        )}
      />
    </Container>
  );
}