import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

// import {} from 'react-native';

import {Container, Bubble, BigBubble, BigBubbleText} from './styles';

export default function MenuInfo() {
  return (
    <Container>
      <Bubble>
        <Icon name="home" size={24} color="#247BA0" />
      </Bubble>

      <BigBubble>
        <BigBubbleText>RESERVAR</BigBubbleText>
      </BigBubble>

      <BigBubble>
        <BigBubbleText>COMPRAR</BigBubbleText>
      </BigBubble>
    </Container>
  );
}
