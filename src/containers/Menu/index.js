import React, {useState} from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {Container, Bubble, BigBubble, BigBubbleText} from './styles';

export default function Menu({
  handleGoHome,
  handleGoMyEvents,
  handleGoOut,
  selected,
}) {
  const [itemSelected, setItemSelected] = useState(selected);

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
        <Bubble
          onPress={() => {
            handleGoHome();
          }}>
          <Icon name="home" size={24} color="#247BA0" />
        </Bubble>
      )}

      {itemSelected === 'local-activity' ? (
        <BigBubble onPress={() => handleSelect('local-activity')}>
          <Icon name="local-activity" size={24} color="#EFF1F3" />
          <BigBubbleText>MEUS EVENTOS</BigBubbleText>
        </BigBubble>
      ) : (
        <Bubble
          onPress={() => {
            handleGoMyEvents();
          }}>
          <Icon name="local-activity" size={24} color="#247BA0" />
        </Bubble>
      )}

      <Bubble
        onPress={() => {
          handleSelect('out');
          handleGoOut();
        }}>
        <Icon name="power-settings-new" size={24} color="#247ba0" />
      </Bubble>
    </Container>
  );
}
