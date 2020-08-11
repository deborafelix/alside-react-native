import React, {useState} from 'react';
import {Alert} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {Container, Button} from './styles';
import {register} from '../../services/company';

import Header from '../../components/Header/GoBack';
import Input from '../../components/Input';
import ImageUpload from '../../containers/ImageUpload';
import {uploadImage} from '../../utils/uploadImages';
import * as file from '../../services/file';

export default function NewCompany({navigation}) {
  const [imgUrl, setImgUrl] = useState({});
  const [company, setCompany] = useState({
    companyName: '',
    email: '',
    cnpj: '',
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
      const url = await file.uploadImage(response);
      setImgUrl(url);
    }
  };
  const handleOnGoBack = () => {
    navigation.goBack();
  };

  const validateForm = () => {
    const fields = Object.keys(company);
    for (let field of fields) {
      if (company[field] === '') {
        return [null, 'Verifique se todos os dados foram preenchidos'];
      }
    }
    if (company.password !== company.confirmPassword) {
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
      await register({...company, imgUrl: imgUrl.uri});
      navigation.navigate('LoginCompany');
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
          value={company.companyName}
          handleOnChange={(companyName) =>
            setCompany((prev) => ({...prev, companyName}))
          }
          title={'razão social'}
          keyType="next"
        />
        <Input
          value={company.email}
          handleOnChange={(email) => setCompany((prev) => ({...prev, email}))}
          title={'e-mail'}
          keyType="next"
        />
        <Input
          value={company.cnpj}
          handleOnChange={(cnpj) => setCompany((prev) => ({...prev, cnpj}))}
          title={'CNPJ'}
          keyType="next"
        />
        <Input
          value={company.password}
          handleOnChange={(password) =>
            setCompany((prev) => ({...prev, password}))
          }
          title={'senha'}
          keyType="next"
          password
        />
        <Input
          value={company.confirmPassword}
          handleOnChange={(confirmPassword) =>
            setCompany((prev) => ({...prev, confirmPassword}))
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
