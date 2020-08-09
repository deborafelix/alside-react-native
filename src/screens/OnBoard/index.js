import React from 'react';
// import {} from 'react-native';
import {Container, Img} from './styles.js';

import Button from '../../components/Button';

import Logo from '../../../assets/img/logo_black_without_phrase.png';

export default function OnBoard({navigation}) {
  return (
    <Container>
      <Img source={Logo} />
      <Button
        title={'sou uma empresa'}
        handleOnPress={() => navigation.navigate('WelcomeCompany')}
      />
      <Button
        title={'sou um altsider'}
        handleOnPress={() => navigation.navigate('WelcomeUser')}
      />
    </Container>
  );
}
