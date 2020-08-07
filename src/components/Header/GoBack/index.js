import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

// import {} from 'react-native';

import {Container, GoBack, Img, Text} from './styles';

import Logo from '../../../../assets/img/logo_black.png';

export default function Header() {
  return (
    <Container>
      <GoBack>
        <Icon name="arrow-back" size={20} color="#697A8C" />
        <Text>voltar</Text>
      </GoBack>
      <Img source={Logo} />
    </Container>
  );
}
