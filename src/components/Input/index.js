import React from 'react';

// import Icon from 'react-native-vector-icons/MaterialIcons';
import {Container, Text, TextInput} from './styles';

export default function Input({
  title,
  value,
  handleOnChange,
  size,
  keyType,
  password,
}) {
  const setOnChange = (e) => {
    const {text} = e.nativeEvent;
    handleOnChange(text);
  };
  return (
    <Container>
      <Text>{title}</Text>
      <TextInput
        value={value}
        width={size}
        secureTextEntry={password}
        onChange={setOnChange}
        returnKeyType={keyType}
      />
    </Container>
  );
}
