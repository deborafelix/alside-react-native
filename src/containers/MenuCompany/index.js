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

      {itemSelected === 'add' ? (
        <BigBubble onPress={() => handleSelect('person')}>
          <Icon name="add" size={24} color="#EFF1F3" />
          <BigBubbleText>NOVO EVENTO</BigBubbleText>
        </BigBubble>
      ) : (
        <Bubble onPress={() => handleSelect('add')}>
          <Icon name="add" size={24} color="#247BA0" />
        </Bubble>
      )}

      <Bubble onPress={() => handleSelect('out')}>
        <Icon name="power-settings-new" size={24} color="#247ba0" />
      </Bubble>
    </Container>
  );
}
