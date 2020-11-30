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
  colors: ['#cf2513', '#cf4c19', '#FA8607', '#FCB033', '#FFF57B'],
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
