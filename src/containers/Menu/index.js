import React, {useState} from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

// import {} from 'react-native';

import {Container, Bubble, BigBubble, BigBubbleText} from './styles';

export default function Menu() {
  const [itemSelected, setItemSelected] = useState('place');

  const handleSelect = (option) => {
    setItemSelected(option);
  };

  return (
    <Container>
      {itemSelected === 'home' ? (
        <BigBubble onPress={() => handleSelect('home')}>
          <Icon name="home" size={24} color="#EFF1F3" />
          <BigBubbleText>INÍCIO</BigBubbleText>
        </BigBubble>
      ) : (
        <Bubble onPress={() => handleSelect('home')}>
          <Icon name="home" size={24} color="#247BA0" />
        </Bubble>
      )}

      {itemSelected === 'place' ? (
        <BigBubble onPress={() => handleSelect('place')}>
          <Icon name="place" size={24} color="#EFF1F3" />
          <BigBubbleText>LOCALIZAÇÃO</BigBubbleText>
        </BigBubble>
      ) : (
        <Bubble onPress={() => handleSelect('place')}>
          <Icon name="place" size={24} color="#247BA0" />
        </Bubble>
      )}

      {itemSelected === 'local-activity' ? (
        <BigBubble onPress={() => handleSelect('local-activity')}>
          <Icon name="local-activity" size={24} color="#EFF1F3" />
          <BigBubbleText>MEUS EVENTOS</BigBubbleText>
        </BigBubble>
      ) : (
        <Bubble onPress={() => handleSelect('local-activity')}>
          <Icon name="local-activity" size={24} color="#247BA0" />
        </Bubble>
      )}

      {itemSelected === 'person' ? (
        <BigBubble onPress={() => handleSelect('person')}>
          <Icon name="person" size={24} color="#EFF1F3" />
          <BigBubbleText>PERFIL</BigBubbleText>
        </BigBubble>
      ) : (
        <Bubble onPress={() => handleSelect('person')}>
          <Icon name="person" size={24} color="#247BA0" />
        </Bubble>
      )}
    </Container>
  );
}
