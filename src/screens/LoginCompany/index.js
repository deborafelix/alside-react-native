import React, {useState, useContext} from 'react';
import {Alert} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
// import {} from 'react-native';

import {Img, Container, View, GoBack, Text, Button} from './styles';

import Logo from '../../../assets/img/logo_black_company.png';
import Input from '../../components/Input';
import validateForm from '../../utils/validateForm';
import Context from '../../contexts';
import {authCompany} from '../../services/session';

export default function LoginCompany({navigation}) {
  const {signIn} = useContext(Context);
  const [company, setCompany] = useState({email: '', password: ''});

  const handleOnSignIn = async () => {
    const [isValid, message] = validateForm(company);
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
      await signIn(company, authCompany);
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
          handleOnChange={(email) => setCompany((prev) => ({...prev, email}))}
        />
        <Input
          title={'senha'}
          password
          handleOnChange={(password) =>
            setCompany((prev) => ({...prev, password}))
          }
        />
        <Button onPress={handleOnSignIn}>
          <Icon name="power-settings-new" size={30} color="#A1E44D" />
        </Button>
      </View>
    </Container>
  );
}
