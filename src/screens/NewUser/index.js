import React, {useState} from 'react';

import {Container} from './styles';

import Header from '../../components/Header/GoBack';
import Input from '../../components/Input';
import ImageUpload from '../../containers/ImageUpload';
import {uploadImage} from '../../utils/uploadImages';

export default function NewUser() {
  const [imgUrl, setImgUrl] = useState({});

  const handleUploadImage = (response) => {
    if (response.didCancel) {
      console.log('User cancelled image picker');
    } else if (response.error) {
      console.log('ImagePicker Error: ', response.error);
    } else if (response.customButton) {
      console.log('User tapped custom button: ', response.customButton);
    } else {
      const source = {uri: response.uri};

      // You can also display the image using data:
      // const source = { uri: 'data:image/jpeg;base64,' + response.data };
      setImgUrl(source);
    }
  };

  return (
    <>
      <Header />
      <Container>
        <ImageUpload
          handleOnUpload={() => uploadImage(handleUploadImage)}
          imgSrc={imgUrl}
        />
        <Input title={'nome completo'} keyType="next" />
        <Input title={'e-mail'} keyType="next" />
        <Input title={'CPF'} keyType="next" />
        <Input title={'CEP'} keyType="next" />
        <Input title={'senha'} keyType="next" />
        <Input title={'confirme a senha'} keyType="next" />
      </Container>
    </>
  );
}
