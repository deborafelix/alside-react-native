import styled from 'styled-components/native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';

export const Container = styled(KeyboardAwareScrollView)`
  align-self: center;
`;

export const StyledButton = styled.TouchableOpacity`
  align-self: center;
  margin: 20px;
`;

export const ButtonContainer = styled.View`
  justify-content: center;
`;

export const Description = styled.Text`
  color: #697a8c;
  font-family: 'Poppins-Regular';
  font-size: 15px;
  padding-left: 15px;
`;

export const Text = styled.Text`
  color: #697a8c;
  font-family: 'Poppins-Regular';
  font-size: 20px;
`;

export const Button = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  width: 320px;
  height: 40px;
  background-color: #eff1f3;
  border-radius: 20px;
  border: 1px solid #697a8c;
  padding-left: 10px;
`;
