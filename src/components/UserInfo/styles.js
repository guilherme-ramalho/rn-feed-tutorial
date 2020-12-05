import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 12px 15px;
`;

export const UserImage = styled.Image`
  height: 32px;
  width: 32px;
  border-radius: 25px;
`;

export const UserImageWrapper = styled(LinearGradient).attrs({
  colors: [
    '#0040E0',
    '#4140E0',
    '#7640E0',
    '#A540E0',
    '#FF40E0',
    '#FF4059',
    '#FF8340',
  ],
})`
  height: 37px;
  width: 37px;
  justify-content: center;
  align-items: center;
  border-radius: 25px;
  margin-right: 10px;
`;

export const UserName = styled.Text`
  color: #fff;
  font-weight: bold;
`;
