import React, {useState} from 'react';
import PropTypes from 'prop-types';

import UserInfo from '../UserInfo';
import PostInfo from '../PostInfo';

import {Container, PostImage, ImageWrapper, LikeAnimation} from './styles';

const Post = ({post}) => {
  const {owner, image} = post;
  const [showAnimation, setShowAnimation] = useState(false);

  const onLikeButtonTouch = () => {
    setShowAnimation(true);
  };

  return (
    <Container>
      <UserInfo user={owner} />
      <ImageWrapper>
        <PostImage
          source={{
            uri: image,
          }}
        />
        {showAnimation && (
          <LikeAnimation
            autoPlay
            loop={false}
            duration={1500}
            onAnimationFinish={() => setShowAnimation(false)}
          />
        )}
      </ImageWrapper>
      <PostInfo post={post} onLikeButtonTouch={onLikeButtonTouch} />
    </Container>
  );
};

Post.propTypes = {
  post: PropTypes.shape().isRequired,
};

export default Post;
