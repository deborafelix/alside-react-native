import React from 'react';

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

export default function EventCard() {
  return (
    <Container>
      <Img source={Picture} />
      <Info>
        <Time>06 ago, 2020</Time>

        <Name>Despedida do Alex</Name>

        <Adress>
          <Icon name="place" size={22} color="#697A8C" />
          <AdressText>Rua Maria Bicego, 242</AdressText>
        </Adress>

        <Category>
          <Icon name="confirmation-number" size={20} color="#697A8C" />
          <CategoryText>Festa</CategoryText>
        </Category>
      </Info>
    </Container>
  );
}
