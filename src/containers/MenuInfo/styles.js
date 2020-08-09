import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  justify-content: center;
  background-color: #eff1f3;
`;

export const Bubble = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  border: 2px solid #247ba0;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  margin: 10px;
`;

export const BigBubble = styled.TouchableOpacity`
  min-width: 40px;
  height: 40px;
  border: 2px solid #247ba0;
  background-color: #247ba0;
  border-radius: 20px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 10px;
  padding: 0 20px;
`;

export const BigBubbleText = styled.Text`
  color: #eff1f3;
  font-family: 'Poppins-Bold';
  font-size: 14px;
  margin-left: 5px;
  padding: 0;
`;
