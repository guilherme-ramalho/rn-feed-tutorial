import styled from 'styled-components/native';
import {Pressable} from 'react-native';
import LottieView from 'lottie-react-native';
import HeartAnimation from '../../assets/animations/heart.json';

export const Container = styled.View`
  background-color: #000;
`;

export const ImageWrapper = styled.View`
  position: relative;
  height: 400px;
  max-height: 400px;
`;

export const PostImage = styled.Image`
  height: 100%;
`;

export const Touchable = styled(Pressable)``;

export const LikeAnimation = styled(LottieView).attrs({
  source: HeartAnimation,
})`
  position: absolute;
`;
