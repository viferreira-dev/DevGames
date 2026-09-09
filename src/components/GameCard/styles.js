import styled from "styled-components/native";

export const Container = styled.View`
  position: relative;
`;

export const Background = styled.Image`
  height: 250px;
  margin-bottom: 20px;
`;

export const Title = styled.Text`
  color: #FFF;
  font-weight: bold;
  font-size: 18px;
  bottom: 50px;
  position: absolute;
`;

export const Rating = styled.View`
  flex-direction: row;
  margin-bottom: 20px;
  position: absolute;
  bottom: 8px;
`;

export const RatingText = styled.Text`
  color: #FFF;
`;

export const TrashButton = styled.TouchableOpacity`
  position: absolute;
  right: 10px;
  top: 10px;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background-color: rgba(0, 0, 0, 0.7);
  justify-content: center;
  align-items: center;
`;
