import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Img = styled.Image`
  width: 80px;
  height: 100px;
  border-radius: 12px;
`;

export const Info = styled.View`
  flex-direction: column;
  margin-left: 15px;
`;

export const Time = styled.Text`
  font-family: 'Poppins-SemiBold';
  color: #ff1654;
  font-size: 14px;
  padding-top: 3px;
`;

export const Name = styled.Text`
  font-family: 'Poppins-Bold';
  color: #1f1f24;
  font-size: 14px;
  padding-top: 3px;
`;

export const Adress = styled.View`
  flex-direction: row;
`;

export const AdressText = styled.Text`
  font-family: 'Poppins-SemiBold';
  color: #697a8c;
  font-size: 12px;
  margin-left: 5px;
  padding-top: 3px;
`;

export const Category = styled.View`
  flex-direction: row;
`;

export const CategoryText = styled.Text`
  font-family: 'Poppins-SemiBold';
  color: #697a8c;
  font-size: 12px;
  margin-left: 5px;
  padding-top: 3px;
`;
