import React, {useState, useContext} from 'react';
import {Alert} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  StyledButton,
  ButtonContainer,
  Text,
  Description,
  Button,
} from './styles';
import {create} from '../../services/event';

import Header from '../../components/Header/GoBack';
import Input from '../../components/Input';
import Context from '../../contexts';
import ImageUpload from '../../containers/ImageUpload';
import {uploadImage} from '../../utils/uploadImages';
import * as file from '../../services/file';

export default function NewEvent({navigation}) {
  const {token} = useContext(Context);
  const [imgUrl, setImgUrl] = useState({});
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [event, setEvent] = useState({
    name: '',
    city: '',
    cep: '',
    street: '',
    number: '',
    neighborhood: '',
    state: '',
    value: 0,
    includeValue: '',
    date: new Date(),
    category: '',
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
    const fields = Object.keys(event);
    for (let field of fields) {
      if (event[field] === '') {
        console.log(field);
        return [null, 'Verifique se todos os dados foram preenchidos'];
      }
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
      await create({...event, imgUrl: imgUrl.uri}, token);
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

  const handleOnChangeDate = async () => {
    setShowDatePicker(true);
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
          value={event.name}
          handleOnChange={(name) => setEvent((prev) => ({...prev, name}))}
          title={'nome'}
          keyType="next"
        />
        <Input
          value={event.cep}
          keyboardType="numeric"
          handleOnChange={(cep) => setEvent((prev) => ({...prev, cep}))}
          title={'CEP'}
          keyType="next"
        />
        <Input
          value={event.street}
          handleOnChange={(street) => setEvent((prev) => ({...prev, street}))}
          title={'rua'}
          keyType="next"
        />
        <Input
          value={event.number}
          handleOnChange={(number) => setEvent((prev) => ({...prev, number}))}
          title={'numero'}
          keyType="next"
        />
        <Input
          value={event.neighborhood}
          handleOnChange={(neighborhood) =>
            setEvent((prev) => ({...prev, neighborhood}))
          }
          title={'bairro'}
          keyType="next"
        />
        <Input
          value={event.city}
          handleOnChange={(city) => setEvent((prev) => ({...prev, city}))}
          title={'Cidade'}
          keyType="next"
        />

        <Input
          value={event.state}
          handleOnChange={(state) => setEvent((prev) => ({...prev, state}))}
          title={'estado'}
          keyType="next"
        />
        <Input
          keyboardType="numeric"
          value={event.value.toString()}
          handleOnChange={(value) =>
            setEvent((prev) => ({...prev, value: parseInt(value, 10)}))
          }
          title={'valor'}
          keyType="next"
        />
        <Input
          value={event.includeValue}
          handleOnChange={(includeValue) =>
            setEvent((prev) => ({...prev, includeValue}))
          }
          title={'incluso no valor'}
          keyType="next"
        />
        <ButtonContainer>
          <Description>data</Description>
          <Button onPress={handleOnChangeDate}>
            <Text>{moment(event.date).format('DD/MM/yyyy')}</Text>
          </Button>
        </ButtonContainer>
        {showDatePicker && (
          <DateTimePicker
            value={event.date}
            onChange={(e) => {
              const {timestamp} = e.nativeEvent;
              setShowDatePicker(false);
              setEvent((prev) => ({...prev, date: timestamp}));
            }}
          />
        )}
        <Input
          value={event.category}
          handleOnChange={(category) =>
            setEvent((prev) => ({...prev, category}))
          }
          title={'categoria'}
          keyType="next"
        />

        <StyledButton onPress={handleOnRegister}>
          <Icon name="arrow-forward" size={20} color="#697A8C" />
        </StyledButton>
      </Container>
    </>
  );
}
