import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 5px 10px;
  justify-content: space-evenly;
  flex-direction: column;
`;

export const PostButtons = styled.View`
  flex-direction: row;
  max-width: 90px;
  justify-content: space-between;
`;

export const LikesText = styled.Text`
  color: #c2c2cfad;
  font-weight: bold;
  margin-left: 5px;
  font-size: 12px;
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const PostSeparator = styled.View`
  height: 1px;
  width: 100%;
  background-color: #c2c2cf7c;
  margin: 5px 0;
`;

export const UserName = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 14px;
  margin-right: 5px;
`;

export const PostText = styled.Text`
  color: #fff;
  font-size: 14px;
`;
