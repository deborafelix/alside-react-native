import React from 'react';

import {Container, Text, TextInput} from './styles';

export default function Input({
  title,
  value,
  handleOnChange,
  size,
  keyType,
  password,
  keyboardType,
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
        keyboardType={keyboardType}
        width={size}
        secureTextEntry={password}
        onChange={setOnChange}
        returnKeyType={keyType}
      />
    </Container>
  );
}
