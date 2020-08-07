import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {Img, Container, View, GoBack, Text} from './styles';

import Logo from '../../../assets/img/logo_black_without_phrase.png';
import Input from '../../components/Input';

export default function LoginUser() {
  return (
    <Container>
      <GoBack>
        <Icon name="arrow-back" size={20} color="#697A8C" />
        <Text>cadastre-se</Text>
      </GoBack>
      <View>
        <Img source={Logo} />
        <Input title={'e-mail'} />
        <Input title={'senha'} />
        <Icon
          name="power-settings-new"
          size={30}
          color="#A1E44D"
          style={{marginTop: 40}}
        />
      </View>
    </Container>
  );
}
