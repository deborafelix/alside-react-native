import React from 'react';
import {Container, Day, DayText, DayNumberText} from './styles';

export default function Week({days}) {
  return (
    <Container>
      <Day selected>
        <DayNumberText>05</DayNumberText>

        <DayText>qua</DayText>
      </Day>
      <Day>
        <DayNumberText>05</DayNumberText>
        <DayText>qua</DayText>
      </Day>
      <Day>
        <DayNumberText>05</DayNumberText>
        <DayText>qua</DayText>
      </Day>
      <Day>
        <DayNumberText>05</DayNumberText>
        <DayText>qua</DayText>
      </Day>
      <Day>
        <DayNumberText>05</DayNumberText>
        <DayText>qua</DayText>
      </Day>
      <Day>
        <DayNumberText>05</DayNumberText>
        <DayText>qua</DayText>
      </Day>
      <Day>
        <DayNumberText>05</DayNumberText>
        <DayText>qua</DayText>
      </Day>
    </Container>
  );
}
