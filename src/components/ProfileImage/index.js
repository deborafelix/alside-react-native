import React from 'react';

// import img from '../../../assets/gray.jpg';
import {Container, Image} from './styles';

export default function ProfileImage({size, imgSrc, children}) {
  return (
    <Container size={size}>
      <Image size={size} source={imgSrc} />
      {children}
    </Container>
  );
}
