import React from 'react';

import {Container, StyledButton, Text} from './styles';

export default function Button({title, handleOnPress}) {
  return (
    <Container>
      <StyledButton onPress={handleOnPress}>
        <Text>{title}</Text>
      </StyledButton>
    </Container>
  );
}
