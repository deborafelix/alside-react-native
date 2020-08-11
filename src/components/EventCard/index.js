import React from 'react';
import moment from 'moment';

import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  Container,
  Img,
  Info,
  Time,
  Name,
  Adress,
  AdressText,
  Category,
  CategoryText,
} from './styles';

import Picture from '../../../assets/img/dev_bday.jpg';

export default function EventCard({event, handleOnPress}) {
  console.log(event);
  return (
    <Container onPress={handleOnPress}>
      <Img source={event.imgUrl ? {uri: event.imgUrl} : Picture} />
      <Info>
        <Time>{moment(event.date).format('DD MMM, yyyy')}</Time>

        <Name>{event.name.toUpperCase()}</Name>

        <Adress>
          <Icon name="place" size={22} color="#697A8C" />
          <AdressText>
            {event.city.toLowerCase()} - {event.state.toUpperCase()}
          </AdressText>
        </Adress>

        <Category>
          <Icon name="confirmation-number" size={20} color="#697A8C" />
          <CategoryText>{event.category.toUpperCase()}</CategoryText>
        </Category>
      </Info>
    </Container>
  );
}
