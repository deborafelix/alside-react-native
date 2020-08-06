import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

// import {} from 'react-native';

import {Container, Icons, Img} from './styles';

import Logo from '../../../../../assets/img/logo_black.png';

export default function Header() {
  return (
    <Container>
      <Img source={Logo} />
      <Icons>
        <Icon name="create" size={24} color="#247ba0" />
        <Icon name="power-settings-new" size={24} color="#247ba0" />
      </Icons>
    </Container>
  );
}
