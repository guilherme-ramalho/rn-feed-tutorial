import React from 'react';
import PropTypes from 'prop-types';

import UserInfo from '../UserInfo';
import PostInfo from '../PostInfo';

import {Container, PostImage} from './styles';

const Post = ({post}) => {
  const {owner, image} = post;

  return (
    <Container>
      <UserInfo user={owner} />
      <PostImage
        source={{
          uri: image,
        }}
      />
      <PostInfo post={post} />
    </Container>
  );
};

Post.propTypes = {
  post: PropTypes.shape().isRequired,
};

export default Post;
