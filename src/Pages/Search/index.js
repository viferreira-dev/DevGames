import { useNavigation } from "@react-navigation/native";
import { Container, ContainerSearch, Header, ListCard } from "./styles";
import IconArrowBack from 'react-native-vector-icons/Feather'
import { TouchableOpacity } from "react-native";
import GameCard from "../../components/GameCard";

export default function Search({ route }) {
  const navigation = useNavigation()
  const { games } = route.params

  return (
    <Container>
      <ContainerSearch>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <IconArrowBack name='arrow-left' size={40} color='#FFF' />
        </TouchableOpacity>

        <Header>Search</Header>
      </ContainerSearch>

      <ListCard
        data={games}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => (
          <GameCard data={item} />
        )}
      />
    </Container>
  );
}