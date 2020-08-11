import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

// import {} from 'react-native';

import {Container, Bubble, BigBubble, BigBubbleText} from './styles';

export default function MenuInfo({handleOnBook, handleOnBuy, handleGoHome}) {
  return (
    <Container>
      <Bubble onPress={handleGoHome}>
        <Icon name="home" size={24} color="#247BA0" />
      </Bubble>

      <BigBubble onPress={handleOnBook}>
        <BigBubbleText>RESERVAR</BigBubbleText>
      </BigBubble>

      <BigBubble onPress={handleOnBuy}>
        <BigBubbleText>COMPRAR</BigBubbleText>
      </BigBubble>
    </Container>
  );
}
