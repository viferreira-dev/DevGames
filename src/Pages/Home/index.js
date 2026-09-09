import { useEffect, useState } from 'react';
import { Cards, CategoryList, Container, ContainerIcon, ContainerSearch, Header, Input, SubTitle, Title } from './styles'
import Icon from 'react-native-vector-icons/Feather'
import Category from '../../components/Category'
import GameCard from '../../components/GameCard'
import api from '../../services/api'
import { ActivityIndicator, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
  const [categories, setCategories] = useState([])
  const [games, setGames] = useState([])
  const [searchText, setSearchText] = useState('')
  const [loading, setLoading] = useState(true)

  const navigation = useNavigation()

  useEffect(() => {
    async function fetchHomeData() {
      try {
        const categoriesResponse = await api.get('/genres', {
          params: {
            key: 'd22198479fd144bcb2462c4d8e011db2'
          }
        })

        setCategories(categoriesResponse.data.results)

        const gamesResponse = await api.get('/games', {
          params: {
            key: 'd22198479fd144bcb2462c4d8e011db2'
          }
        })

        setGames(gamesResponse.data.results);
      } catch (error) {
        console.log(error);
      }
      finally {
        setLoading(false)
      }
    }

    fetchHomeData()
  }, [])

  async function searchGame() {
    try {
      const searchResponse  = await api.get('/games', {
        params: {
          key: 'd22198479fd144bcb2462c4d8e011db2',
          search: searchText
        }
      })

      navigation.navigate('Search', { games: searchResponse .data.results })
      setSearchText('')

    } catch (error) {
      console.log(error);
    }
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
          <Header>
            <Title style={{ color: '#FFF' }}>
              Dev
              <Title style={{ color: 'red' }}>
                Games
              </Title>
            </Title>

            <ContainerIcon>
              <TouchableOpacity onPress={() => navigation.navigate('Favoritos')}>
                <Icon
                  name="bookmark"
                  size={25}
                  color="#FFF"
                />
              </TouchableOpacity>
            </ContainerIcon>
          </Header>

          <ContainerSearch>
            <Input
              placeholder="Looking for a game"
              placeholderTextColor="#FFF"
              value={searchText}
              onChangeText={text => setSearchText(text)}
            />

            <TouchableOpacity onPress={searchGame}>
              <Icon
                name="search"
                size={35}
                color="red"
              />
            </TouchableOpacity>
          </ContainerSearch>

          <CategoryList
            showsHorizontalScrollIndicator={false}
            horizontal
            keyExtractor={item => String(item.id)}
            data={categories}
            renderItem={({ item }) => (
              <Category data={item} />
            )}
            style={{
              flexGrow: 0,
              height: 60,
            }}
          />

          <SubTitle>
            Trending games
          </SubTitle>

          <Cards
            showsVerticalScrollIndicator={false}
            data={games}
            keyExtractor={item => String(item.id)}
            renderItem={({ item }) => (
              <GameCard data={item} />
            )}
          />
        </>

      )}

    </Container>
  );
}
