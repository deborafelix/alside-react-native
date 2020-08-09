import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import Logo from '../../../assets/img/logo_black_without_phrase.png';
import Picture from '../../../assets/img/dev_bday.jpg';
import Menu from '../../containers/MenuInfo';

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

export default function InfoEvent() {
  return (
    <>
      <Header source={Logo} />
      <Container>
        <Img source={Picture} />

        <Name>Despedida do Alex</Name>

        <Info>
          <Bubble>
            <Icon name="event-note" size={20} color="#ff1654" />
          </Bubble>

          <Line />

          <TextInfo>
            <BoldText>06 agosto, 2020</BoldText>
            <ThinText>quinta-feira, 16:00 - 00:00</ThinText>
          </TextInfo>
        </Info>

        <Info>
          <Bubble>
            <Icon name="public" size={20} color="#ff1654" />
          </Bubble>

          <Line />

          <TextInfo>
            <BoldText>campinas - SP</BoldText>
            <ThinText>rua maria bicego, 242 - vila santa isabel</ThinText>
          </TextInfo>
        </Info>

        <Info>
          <Bubble>
            <Icon name="attach-money" size={21} color="#ff1654" />
          </Bubble>

          <Line />

          <TextInfo>
            <BoldText>R$ 20,00</BoldText>
            <ThinText>inclui: comida à vontade</ThinText>
          </TextInfo>
        </Info>

        <Info>
          <Bubble>
            <Icon name="place" size={20} color="#ff1654" />
          </Bubble>

          <Line />

          <TextInfo>
            <BoldText>ponto de venda oficial</BoldText>
            <ThinText>Loja Merida</ThinText>
          </TextInfo>
        </Info>
      </Container>
      <Menu />
    </>
  );
}
