import React from 'react';

// import Icon from 'react-native-vector-icons/MaterialIcons';
import {Container, Text, TextInput} from './styles';

export default function Input({title, value, handleOnChange, size}) {
  const setOnChange = (e) => {
    const {value} = e.nativeEvent;

    handleOnChange(value);
  };
  return (
    <Container>
      <Text>{title}</Text>
      <TextInput value={value} width={size} onChange={setOnChange} />
    </Container>
  );
}
