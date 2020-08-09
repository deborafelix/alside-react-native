import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  background-color: #eff1f3;
`;

export const Header = styled.Image`
  width: 100px;
  height: 40px;
  background-color: #eff1f3;
`;

export const Img = styled.Image`
  width: 415px;
  height: 200px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  margin-bottom: 5px;
`;

export const Name = styled.Text`
  color: #1f1f24;
  font-family: 'Poppins-Bold';
  font-size: 20px;
  margin-left: 10px;
  margin-bottom: 15px;
`;

export const Info = styled.View`
  flex-direction: row;
  margin: 10px;
`;

export const Bubble = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  border: 2px solid #ff1654;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
`;

export const Line = styled.Text`
  width: 0;
  height: 50px;
  border: 0.5px solid #697a8c;
  margin-left: 15px;
  margin-right: 10px;
`;

export const TextInfo = styled.View``;

export const BoldText = styled.Text`
  color: #1f1f24;
  font-family: 'Poppins-Bold';
  font-size: 14px;
`;

export const ThinText = styled.Text`
  color: #697a8c;
  font-family: 'Poppins-Regular';
  font-size: 14px;
`;
