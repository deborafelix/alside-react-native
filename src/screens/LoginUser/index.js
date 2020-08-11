import React, {useContext, useState} from 'react';
import {Alert} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {Img, Container, View, GoBack, Text, Button} from './styles';

import Logo from '../../../assets/img/logo_black_without_phrase.png';
import Input from '../../components/Input';
import Context from '../../contexts';
import {authUser} from '../../services/session';
import validateForm from '../../utils/validateForm';

export default function LoginUser({navigation}) {
  const {signIn} = useContext(Context);
  const [user, setUser] = useState({email: '', password: ''});

  const handleOnSignIn = async () => {
    const [isValid, message] = validateForm(user);
    if (!isValid) {
      Alert.alert('Erro', message, [
        {
          text: 'Cancelar',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
      ]);
      return;
    }
    try {
      await signIn(user, authUser);
      navigation.navigate('Feed');
    } catch (e) {
      Alert.alert('Erro', 'Erro inesperado, tente novamente', [
        {
          text: 'Cancelar',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
      ]);
    }
  };

  return (
    <Container>
      <GoBack onPress={() => navigation.goBack()}>
        <Icon name="arrow-back" size={20} color="#697A8C" />
        <Text>voltar</Text>
      </GoBack>
      <View>
        <Img source={Logo} />
        <Input
          title={'e-mail'}
          handleOnChange={(email) => setUser((prev) => ({...prev, email}))}
        />
        <Input
          title={'senha'}
          password
          handleOnChange={(password) =>
            setUser((prev) => ({...prev, password}))
          }
        />
        <Button onPress={handleOnSignIn}>
          <Icon name="power-settings-new" size={30} color="#A1E44D" />
        </Button>
      </View>
    </Container>
  );
}
