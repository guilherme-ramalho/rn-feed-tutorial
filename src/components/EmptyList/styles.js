import styled from 'styled-components/native';
import LottieView from 'lottie-react-native';

import EmptyListAnimation from '../../assets/animations/emptyList.json';

export const Container = styled.View`
  flex: 1;
  margin-top: 100px;
  align-items: center;
`;

export const Animation = styled(LottieView).attrs({
  source: EmptyListAnimation,
})`
  width: 400px;
  height: auto;
`;

export const EmptyText = styled.Text`
  font-size: 18px;
  color: #fff;
`;
