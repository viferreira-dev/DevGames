import { useNavigation } from "@react-navigation/native";
import { Card, Container, ContainerFav, Header } from "./styles";
import IconArrowBack from "react-native-vector-icons/Feather";
import { ActivityIndicator, Text, TouchableOpacity } from "react-native";
import { useContext, useEffect, useState } from "react";
import api from "../../services/api";
import GameCard from "../../components/GameCard";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { FavoritesContext } from "../../contexts/FavoriteContext";

export default function Favorito() {

  const { toggleFavorite } = useContext(FavoritesContext)
  const navigation = useNavigation()

  const [favoriteGames, setFavoriteGames] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadFavoriteGames() {

      try {
        const storedFavorites = await AsyncStorage.getItem("tokenGame")

        const favoriteIds = JSON.parse(storedFavorites) || []

        const games = await Promise.all(
          favoriteIds.map(gameId => fetchFavoriteGame(gameId))
        )

        const favoriteGamesData = games.map(response => response.data)

        setFavoriteGames(favoriteGamesData)
      } catch (error) {

        console.log(error);

      } finally {
        setLoading(false)
      }
    }

    loadFavoriteGames()
  }, [])

  async function fetchFavoriteGame(gameId) {

    const response = await api.get(`/games/${gameId}`, {
      params: {
        key: 'd22198479fd144bcb2462c4d8e011db2'
      }
    })
    return response
  }

  async function handleDeleteFavorite(gameId) {
    await toggleFavorite(gameId)

    const updatedFavoriteGames = favoriteGames.filter(
      game => game.id !== gameId
    )

    setFavoriteGames(updatedFavoriteGames)
  }

  return (
    <Container>

      <ContainerFav>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <IconArrowBack name="arrow-left" size={40} color="#FFF" />
        </TouchableOpacity>

        <Header>My favorites</Header>
      </ContainerFav>

      {loading ? (

        <ActivityIndicator
          size={35}
          color="red"
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center"
          }}
        />

      ) : (

        <Card
          data={favoriteGames}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <GameCard
              data={item}
              isFavoritePage={true}
              onDeleteFavorite={handleDeleteFavorite}
            />
          )}
          ListEmptyComponent={
            <Text
              style={{
                color: "#FFF",
                fontSize: 21,
                textAlign: "center",
                marginTop: 15
              }}
            >
              Nenhum jogo favorito
            </Text>
          }
        />

      )}

    </Container>
  );
}