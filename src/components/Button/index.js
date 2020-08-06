import React from 'react';

// import Icon from 'react-native-vector-icons/MaterialIcons';
import {Container, Button, Text} from './styles';

export default function Input({title, handleOnPress}) {
  return (
    <Container>
      <Button>
        <Text>{title}</Text>
      </Button>
    </Container>
  );
}
