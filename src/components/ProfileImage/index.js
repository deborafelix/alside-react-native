import React from 'react';

import {Container, Image} from './styles';

export default function ProfileImage({size, imgSrc, children}) {
  return (
    <Container size={size}>
      <Image size={size} source={imgSrc} />
      {children}
    </Container>
  );
}
