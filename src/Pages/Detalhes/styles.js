import styled from "styled-components/native";

export const Container = styled.View`
flex: 1;
background-color: #050B18;
`;

export const ContainerIcon = styled.View`
  position: absolute;
  top: 25px;
  left: 0;
  right: 0;

  z-index: 10;

  flex-direction: row;
  justify-content: space-between;
  padding: 0 15px;
`;

export const Background = styled.Image`
height: 260px;
width: 100%;
`;

export const RatingContainer = styled.View`
flex-direction: row;
margin-top: 15px;

`;

export const Rating = styled.Text`
color: #FFF;

`;

export const Title = styled.Text`
font-size: 18px;
font-weight: bold;
color: #FFF;
margin-top: 15px;

`;

export const Genres = styled.Text`
color: #FFF;
font-size: 18px;
font-weight: bold;
margin-top: 5px;
background-color:#64748B ;
padding: 5px;
border-radius: 8px;
margin-right: 10px;
height: 35px;
`;

export const GenresList = styled.FlatList`
max-height: 60px;
`;

export const GenresTitle = styled.Text`
margin-top: 25px;
font-size: 18px;
font-weight: bold;
color: #FFF;
`;

export const SubTitle = styled.Text`
color: #FFF;
font-size: 18px;
font-weight: bold;

`;

export const Description = styled.Text`
color: #FFF;
`;

export const ModalButton = styled.TouchableOpacity`
background-color: #0E5C88;
padding: 5px;
margin-top: 8px;
`;

export const ModalText = styled.Text`
color: #FFF;
text-align: center;
font-size: 17px;
`;

export const PlatformsTitle = styled.Text`
font-size: 18px;
font-weight: bold;
color: #FFF;
margin-top: 15px;

`;

export const Platforms = styled.Text`
color: #FFF;
font-size: 18px;
margin-top: 5px;
background-color: #0F172A ;
padding: 5px;
border-radius: 8px;
margin-right: 10px;
height: 35px;
`;

export const PlatformsList = styled.FlatList`
max-height: 50px;
`;

export const StoresTitle = styled.Text`
margin-top: 15px;
font-size: 18px;
font-weight: bold;
color: #FFF;

`;

export const Stores = styled.Text`
color: #FFF;
font-size: 18px;
margin-top: 5px;
background-color: #0F172A ;
padding: 5px;
border-radius: 8px;
margin-right: 10px;
height: 35px;

`;

export const StoresList = styled.FlatList`
max-height: 50px;

`;