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

import Logo from '../../../assets/img/logo_black_without_phrase.png';
import Button from '../../components/Button';

export default function WelcomeUser({navigation}) {
  return (
    <Container>
      <GoBack onPress={() => navigation.navigate('WelcomeCompany')}>
        <Icon name="arrow-back" size={20} color="#697A8C" />
        <GoBackText>alside para empresas</GoBackText>
      </GoBack>
      <View>
        <Img source={Logo} />
        <Button
          title={'cadastre-se'}
          handleOnPress={() => navigation.navigate('NewUser')}
        />
        <ButtonLogin onPress={() => navigation.navigate('LoginUser')}>
          <Text>entrar</Text>
        </ButtonLogin>
      </View>
    </Container>
  );
}
