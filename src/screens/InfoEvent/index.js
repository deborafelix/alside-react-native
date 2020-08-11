import React, {useContext} from 'react';
import moment from 'moment';
import {Alert} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Logo from '../../../assets/img/logo_black_without_phrase.png';
import Picture from '../../../assets/img/dev_bday.jpg';
import {buy, book} from '../../services/order';
import Menu from '../../containers/MenuInfo';
import Context from '../../contexts';
import {
  Container,
  Header,
  Img,
  Name,
  Info,
  Bubble,
  Line,
  TextInfo,
  BoldText,
  ThinText,
} from './styles';

export default function InfoEvent({navigation, route}) {
  const event = route.params;
  const {token} = useContext(Context);
  const handleOnBuy = async () => {
    try {
      await buy(
        {
          event_id: event.id,
          value: event.value,
        },
        token,
      );
      handleOnSuccess();
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
  const handleOnBook = async () => {
    try {
      await book(
        {
          event_id: event.id,
          value: event.value,
        },
        token,
      );
      handleOnSuccess();
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
  const handleOnSuccess = () => {
    Alert.alert(
      'Sucesso',
      'Parabéns, sua solicitação foi realizada com exito',
      [
        {
          text: 'Okay!',
          onPress: () => navigation.navigate('Feed'),
          style: 'default',
        },
      ],
    );
  };
  return (
    <>
      <Header source={Logo} />
      <Container>
        <Img source={event.imgUrl ? {uri: event.imgUrl} : Picture} />

        <Name>{event.name}</Name>

        <Info>
          <Bubble>
            <Icon name="event-note" size={20} color="#ff1654" />
          </Bubble>

          <Line />

          <TextInfo>
            <BoldText>{moment(event.date).format('DD MMM, yyyy')}</BoldText>
            <ThinText>{moment(event.date).format('dddd, hh:mm')}</ThinText>
          </TextInfo>
        </Info>

        <Info>
          <Bubble>
            <Icon name="public" size={20} color="#ff1654" />
          </Bubble>

          <Line />

          <TextInfo>
            <BoldText>
              {event.city.toLowerCase()}-{event.state.toLowerCase()}
            </BoldText>
            <ThinText>
              {event.street.toLowerCase()}, {event.number} -{' '}
              {event.neighborhood.toLowerCase()}
            </ThinText>
          </TextInfo>
        </Info>

        <Info>
          <Bubble>
            <Icon name="attach-money" size={21} color="#ff1654" />
          </Bubble>

          <Line />

          <TextInfo>
            <BoldText>R$ {event.value}</BoldText>
            <ThinText>inclui: {event.includeValue}</ThinText>
          </TextInfo>
        </Info>

        <Info>
          <Bubble>
            <Icon name="place" size={20} color="#ff1654" />
          </Bubble>

          <Line />

          <TextInfo>
            <BoldText>ponto de venda oficial</BoldText>
            <ThinText>{event.company.companyName}</ThinText>
          </TextInfo>
        </Info>
      </Container>
      <Menu handleOnBook={handleOnBook} handleOnBuy={handleOnBuy} />
    </>
  );
}
