import styled from "styled-components/native";

export const Container = styled.View`
flex: 1;
background-color: #050B18;
padding: 45px 15px 0px 15px;
`;

export const Header = styled.View`
flex-direction: row;
justify-content: space-between;
`;

export const Title = styled.Text`
font-size: 28px;
font-weight: bold;
`;

export const ContainerIcon = styled.TouchableOpacity`
background-color: #1F2430;
border-radius: 15px;
padding: 5px;
`;

export const ContainerSearch = styled.View`
flex-direction: row;
justify-content: space-between;
margin-top: 15px;
`;


export const Input = styled.TextInput`
background-color: #1F2430;
border-radius: 20px;
width: 90%;
margin-bottom: 20px;
padding: 13px;
margin-right: 8px;
color: #FFF;
`;

export const CategoryList = styled.FlatList`
`;

export const SubTitle = styled.Text`
color: #FFF;
font-size: 19px;
font-weight: bold;
margin: 20px 0 10px 0;
`;

export const Cards = styled.FlatList``;