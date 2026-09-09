import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useState } from "react";

export const FavoritesContext = createContext({})

export default function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState([])

  async function toggleFavorite(gameId) {
    const storedFavorites = await AsyncStorage.getItem('tokenGame')

    const favoriteIds = JSON.parse(storedFavorites) || []

    const favoriteIndex = favoriteIds.findIndex(
      favoriteId => favoriteId === gameId
    )

    let updatedFavorites

    if (favoriteIndex === -1) {
      updatedFavorites = [...favoriteIds, gameId]
    } else {
      updatedFavorites = favoriteIds.filter(
        favoriteId => favoriteId !== gameId
      )
    }

    await AsyncStorage.setItem(
      'tokenGame',
      JSON.stringify(updatedFavorites)
    )

    setFavorites(updatedFavorites)
  }

  return (
    <FavoritesContext.Provider value={{
      favorites,
      toggleFavorite
    }}>
      {children}
    </FavoritesContext.Provider>
  )
}