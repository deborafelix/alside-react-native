import React from 'react';
// import {} from 'react-native';
import {Container, Img} from './styles.js';

import Button from '../../components/Button';

import Logo from '../../../assets/img/logo_black_without_phrase.png';

export default function OnBoard() {
  return (
    <Container>
      <Img source={Logo} />
      <Button title={'sou uma empresa'} />
      <Button title={'sou um altsider'} />
    </Container>
  );
}
