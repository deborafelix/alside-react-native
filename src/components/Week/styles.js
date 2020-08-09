import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 10px;
`;

export const Day = styled.TouchableOpacity`
  height: 50px;
  margin: 0 5px;
  width: 40px;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => (props.selected ? '#DBE0E4' : '#EFF1F3')};
  border-radius: 8px;
`;

export const DayNumberText = styled.Text`
  font-family: 'Poppins-Bold';
  color: #000;
  margin: 0;
  padding: 0;
  font-size: 18px;
`;
export const DayText = styled.Text`
  font-family: 'Poppins-Regular';
  color: #000;
  margin-top: -10px;
  padding: 0;
  font-size: 12px;
`;
