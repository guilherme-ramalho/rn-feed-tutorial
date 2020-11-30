import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 12px 15px;
`;

export const UserImage = styled.Image`
  height: 35px;
  width: 35px;
  border-radius: 25px;
  border: 1px solid #fff;
  margin-right: 10px;
`;

export const UserName = styled.Text`
  color: #fff;
  font-weight: bold;
`;
