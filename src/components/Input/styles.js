import styled from 'styled-components/native';

export const Container = styled.View``;

export const Text = styled.Text`
  color: #697a8c;
  font-family: 'Poppins-Regular';
  font-size: 15px;
  padding-left: 15px;
`;

export const TextInput = styled.TextInput`
  width: ${(props) => (props.width ? `${props.width}px` : '320px')};
  height: 40px;
  background-color: #eff1f3;
  border-radius: 20px;
  border: 1px solid #697a8c;
  padding-left: 10px;
`;
