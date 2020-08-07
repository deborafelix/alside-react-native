import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import ProfileImage from '../../components/ProfileImage';
import {Container, IconContainer} from './styles';

export default function ImageUpload({imgSrc, handleOnUpload}) {
  return (
    <Container>
      <ProfileImage imgSrc={imgSrc}>
        <IconContainer onClick={handleOnUpload} onPress={handleOnUpload}>
          <Icon name="camera" size={20} />
        </IconContainer>
      </ProfileImage>
    </Container>
  );
}
