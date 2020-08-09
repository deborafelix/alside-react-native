import React, {useState} from 'react';
import {Alert} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {Container, Button} from './styles';
import {register} from '../../services/user';

import Header from '../../components/Header/GoBack';
import Input from '../../components/Input';
import ImageUpload from '../../containers/ImageUpload';
import {uploadImage} from '../../utils/uploadImages';
import * as file from '../../services/file';

export default function NewUser({navigation}) {
  const [imgUrl, setImgUrl] = useState({});
  const [user, setUser] = useState({
    name: '',
    email: '',
    cpf: '',
    password: '',
    confirmPassword: '',
  });

  const handleUploadImage = async (response) => {
    if (response.didCancel) {
      console.log('User cancelled image picker');
    } else if (response.error) {
      console.log('ImagePicker Error: ', response.error);
    } else if (response.customButton) {
      console.log('User tapped custom button: ', response.customButton);
    } else {
      // const source = {uri: response.uri};

      // You can also display the image using data:
      // const source = { uri: 'data:image/jpeg;base64,' + response.data };
      const url = await file.uploadImage(response);
      console.log(url);
      setImgUrl(url);
    }
  };
  const handleOnGoBack = () => {
    navigation.goBack();
  };

  const validateForm = () => {
    const fields = Object.keys(user);
    for (let field of fields) {
      if (user[field] === '') {
        return [null, 'Verifique se todos os dados foram preenchidos'];
      }
    }
    if (user.password !== user.confirmPassword) {
      return [null, 'As senhas não são iguais'];
    }
    return [true, ''];
  };
  const handleOnRegister = async () => {
    const [isValid, message] = validateForm();
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
      await register({...user, imgUrl});
      navigation.navigate('LoginUser');
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
    <>
      <Header handleOnGoBack={handleOnGoBack} />
      <Container>
        <ImageUpload
          handleOnUpload={() => uploadImage(handleUploadImage)}
          imgSrc={imgUrl}
        />
        <Input
          value={user.name}
          handleOnChange={(name) => setUser((prev) => ({...prev, name}))}
          title={'nome completo'}
          keyType="next"
        />
        <Input
          value={user.email}
          handleOnChange={(email) => setUser((prev) => ({...prev, email}))}
          title={'e-mail'}
          keyType="next"
        />
        <Input
          value={user.cpf}
          handleOnChange={(cpf) => setUser((prev) => ({...prev, cpf}))}
          title={'CPF'}
          keyType="next"
        />
        <Input
          value={user.password}
          handleOnChange={(password) =>
            setUser((prev) => ({...prev, password}))
          }
          title={'senha'}
          keyType="next"
          password
        />
        <Input
          value={user.confirmPassword}
          handleOnChange={(confirmPassword) =>
            setUser((prev) => ({...prev, confirmPassword}))
          }
          title={'confirme a senha'}
          keyType="next"
          password
        />
        <Button onPress={handleOnRegister}>
          <Icon name="arrow-forward" size={20} color="#697A8C" />
        </Button>
      </Container>
    </>
  );
}
