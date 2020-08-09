import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #eff1f3;
`;

export const View = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Img = styled.Image`
  width: 300px;
  height: 100px;
  margin-bottom: 50px;
  margin: 10px;
`;

export const Text = styled.Text`
  color: #697a8c;
  font-family: 'Poppins-Regular';
  font-size: 15px;
  margin-left: 5px;
`;

export const GoBack = styled.TouchableOpacity`
  flex-direction: row;
  margin: 5px;
`;

export const Button = styled.TouchableOpacity`
  margin-top: 40px;
`;
