import { ActivityIndicator, Modal, TouchableOpacity } from "react-native";
import { Background, Container, ContainerIcon, Description, GenresTitle, Genres, GenresList, Platforms, PlatformsTitle, PlatformsList, Rating, RatingContainer, Stores, StoresTitle, StoresList, SubTitle, Title, ModalButton, ModalText } from "./styles";
import IconArrowBack from 'react-native-vector-icons/Feather'
import IconBookmark from 'react-native-vector-icons/FontAwesome'
import IconBookmarkO from 'react-native-vector-icons/FontAwesome'
import IconStar from 'react-native-vector-icons/FontAwesome'
import { useNavigation } from "@react-navigation/native";
import api from "../../services/api";
import { useContext, useEffect, useState } from "react";
import ModalDescription from '../../components/ModalDescription'
import { FavoritesContext } from "../../contexts/FavoriteContext";

export default function Detalhes({ route }) {
  const { game } = route.params
  const { toggleFavorite, favorites } = useContext(FavoritesContext)
  const navigation = useNavigation()

  const [gameDetails, setGameDetails] = useState(null)
  const [modalVisible, setModalVisible] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {

    async function fetchGameDetails() {
      try {
        const response = await api.get(`/games/${game.id}`, {
          params: {
            key: 'd22198479fd144bcb2462c4d8e011db2',
          }
        })
        setGameDetails(response.data)

      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false)
      }
    }

    fetchGameDetails()
  }, [])

  async function favoriteGame(id) {
    await toggleFavorite(id)

    navigation.navigate('Favoritos');
  }

  function checkedId(id) {
    const response = favorites.findIndex(
      idSelected => idSelected === id
    )
    return response
  }

  return (
    <Container>

      {loading ? (
        <ActivityIndicator
          size="large"
          color="red"
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        />
      ) : (
        <>

          <ContainerIcon>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{ padding: 10 }}
            >
              <IconArrowBack name='arrow-left' size={30} color='#FFF' />
            </TouchableOpacity>

            {checkedId(game.id) === -1 ? (

              <TouchableOpacity
                onPress={() => favoriteGame(game.id)}
                style={{ padding: 10 }}
              >
                <IconBookmarkO
                  name="bookmark-o"
                  size={30}
                  color="#FFF"
                />
              </TouchableOpacity>

            ) : (

              <TouchableOpacity
                onPress={() => favoriteGame(game.id)}
                style={{ padding: 10 }}
              >
                <IconBookmark
                  name="bookmark"
                  size={30}
                  color="#FFF"
                />
              </TouchableOpacity>

            )}

          </ContainerIcon>

          <Background source={{ uri: game.background_image }} />

          <RatingContainer>
            <IconStar name='star' size={20} color='#FFD700' />
            <Rating>{game.rating}/10</Rating>
          </RatingContainer>

          <Title>{game.name}</Title>

          <GenresTitle>Genres</GenresTitle>

          <GenresList
            horizontal
            data={gameDetails?.genres}
            keyExtractor={item => String(item.id)}
            renderItem={({ item }) => (
              <Genres>
                {item.name}
              </Genres>
            )}
          />

          <SubTitle>Description</SubTitle>

          <Description>
            {gameDetails?.description
              ?.replace(/<[^>]*>/g, '')
              .slice(0, 550) + '...'}
          </Description>

          <ModalButton onPress={() => setModalVisible(true)}>
            <ModalText>Read full description</ModalText>
          </ModalButton>

          <Modal
            visible={modalVisible}
            animationType="fade"
            onRequestClose={() => setModalVisible(false)}
          >
            <ModalDescription
              data={gameDetails}
              visibleModal={() => setModalVisible(false)}
            />
          </Modal>

          <PlatformsTitle>Platforms</PlatformsTitle>

          <PlatformsList
            horizontal
            data={gameDetails?.platforms}
            keyExtractor={item => String(item.platform.id)}
            renderItem={({ item }) => (
              <Platforms>
                {item.platform.name}
              </Platforms>
            )}
          />

          <StoresTitle>Stores</StoresTitle>

          <StoresList
            horizontal
            data={gameDetails?.stores}
            keyExtractor={item => String(item.store.id)}
            renderItem={({ item }) => (
              <Stores>{item.store.name}</Stores>
            )}
          />

        </>
      )}

    </Container>
  );
}