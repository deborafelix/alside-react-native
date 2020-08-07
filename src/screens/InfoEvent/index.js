import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import Logo from '../../../assets/img/logo_black_without_phrase.png';
import Picture from '../../../assets/img/dev_bday.jpg';

import {
  Header,
  Img,
  Name,
  Info,
  Bubble,
  Line,
  BoldText,
  ThinText,
  Description,
} from './styles';

export default function InfoEvent() {
  return (
    <>
      <Header source={Logo} />
      <Img source={Picture} />
      <Name>Despedida do Alex</Name>
      <Info>
        <Bubble>
          <Icon />
        </Bubble>
        <Line />
        <BoldText>06 agosto, 2020</BoldText>
        <ThinText>quinta-feira, 16:00 - 00:00</ThinText>
      </Info>
      <Description>
        Muito texto por aqui. Muito texto por aqui. Muito texto por aqui.
      </Description>
      {/* <Menu/> */}
    </>
  );
}
