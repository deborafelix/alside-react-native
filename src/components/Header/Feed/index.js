import React from 'react';

import {Container, Img} from './styles';

import Logo from '../../../../assets/img/logo_black.png';

export default function Header() {
  return (
    <Container>
      <Img source={Logo} />
    </Container>
  );
}
