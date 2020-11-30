import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import PropTypes from 'prop-types';

import {Container, LikesRow, LikesText} from './styles';

const PostInfo = ({post}) => {
  const {likes} = post;

  return (
    <Container>
      <LikesRow>
        <Icon name="heart" size={15} color="#fff" />
        <LikesText>{`${likes} likes`}</LikesText>
      </LikesRow>
    </Container>
  );
};

PostInfo.propTypes = {
  post: PropTypes.shape().isRequired,
};

export default PostInfo;
