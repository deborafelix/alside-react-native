import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Img,
  Container,
  View,
  GoBack,
  GoBackText,
  ButtonLogin,
  Text,
} from './styles';

import Logo from '../../../assets/img/logo_black_company.png';
import Button from '../../components/Button';

export default function WelcomeUser() {
  return (
    <Container>
      <GoBack onPress={() => console.log('voltar')}>
        <Icon name="arrow-back" size={20} color="#697A8C" />
        <GoBackText>alside para todos</GoBackText>
      </GoBack>
      <View>
        <Img source={Logo} />
        <Button
          title={'cadastre-se'}
          handleOnPress={() => console.log('cadastro')}
        />
        <ButtonLogin onPress={() => console.log('entrar')}>
          <Text>entrar</Text>
        </ButtonLogin>
      </View>
    </Container>
  );
}
