import React from 'react';

// import Icon from 'react-native-vector-icons/MaterialIcons';
import {Container, Text, TextInput} from './styles';

const Input = React.forwardRef(
  ({title, value, handleOnChange, size, keyType, onSubmitEditing}, ref) => {
    const setOnChange = (e) => {
      const {value} = e.nativeEvent;

      handleOnChange(value);
    };
    return (
      <Container>
        <Text>{title}</Text>
        <TextInput
          value={value}
          width={size}
          onChange={setOnChange}
          returnKeyType={keyType}
          onSubmitEditing={onSubmitEditing}
          ref={ref}
        />
      </Container>
    );
  },
);

export default Input;
