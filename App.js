import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes'
import FavoritesProvider from './src/contexts/FavoriteContext'

export default function App() {
  return (
    <FavoritesProvider>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </FavoritesProvider>

  );
}