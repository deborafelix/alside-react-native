import styled from 'styled-components/native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';

export const Container = styled(KeyboardAwareScrollView)`
  align-self: center;
`;

export const Button = styled.TouchableOpacity`
  align-self: center;
  margin: 20px;
`;
