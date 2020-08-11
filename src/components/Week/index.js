import React, {useState, useContext} from 'react';
import moment from 'moment';
import 'moment/locale/pt-br';

import Icon from 'react-native-vector-icons/MaterialIcons';
import Context from '../../contexts';

import {Container, Day, DayText, DayNumberText, ArrowButton} from './styles';

export default function Week() {
  const weekDays = moment.weekdaysShort();
  const {selectedDate, setSelectedDate} = useContext(Context);
  const [actualDate, setActualDate] = useState(moment(new Date()));

  const handleAddDay = () => {
    const newDay = moment(actualDate).add(1, 'days');
    setActualDate(newDay);
  };

  const handleRemoveDay = () => {
    const newDay = moment(actualDate).subtract(1, 'days');
    setActualDate(newDay);
  };

  return (
    <Container>
      <ArrowButton onPress={handleRemoveDay}>
        <Icon name="keyboard-arrow-left" size={20} color="#697A8C" />
      </ArrowButton>

      {weekDays.map((day, index) => {
        const realDay = parseInt(
          moment(actualDate).add(index, 'days').format('D'),
          10,
        );
        const weekDay = moment(actualDate).add(index, 'days').format('ddd');
        return (
          <Day
            selected={
              realDay === parseInt(moment(selectedDate).format('D'), 10)
            }
            key={Date.now() * Math.random(0, 1)}
            onPress={() =>
              setSelectedDate(moment(actualDate).add(index, 'days'))
            }>
            <DayNumberText>{realDay}</DayNumberText>

            <DayText>{weekDay}</DayText>
          </Day>
        );
      })}

      <ArrowButton onPress={handleAddDay}>
        <Icon name="keyboard-arrow-right" size={20} color="#697A8C" />
      </ArrowButton>
    </Container>
  );
}
