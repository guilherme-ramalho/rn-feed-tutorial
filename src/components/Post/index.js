import React, {useState} from 'react';
import PropTypes from 'prop-types';

import UserInfo from '../UserInfo';
import PostInfo from '../PostInfo';

import {
  Container,
  PostImage,
  ImageWrapper,
  LikeAnimation,
  Touchable,
} from './styles';

const Post = ({post}) => {
  const {owner, image, likes} = post;
  const [showAnimation, setShowAnimation] = useState(false);
  const [liked, setLiked] = useState(false);
  const [likesQty, setLikesQty] = useState(likes);
  let lastPostTap = null;

  const likeTouchHandler = () => {
    setLiked(true);

    if (!liked) {
      setLikesQty(likesQty + 1);
      setShowAnimation(true);
    }
  };

  const handleImageDoubleTap = () => {
    const now = Date.now();
    const DOUBLE_TAP_DELAY = 300;

    if (lastPostTap && now - lastPostTap < DOUBLE_TAP_DELAY) {
      likeTouchHandler();
    } else {
      lastPostTap = now;
    }
  };

  return (
    <Container>
      <UserInfo user={owner} />
      <Touchable onPress={() => handleImageDoubleTap()}>
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
      </Touchable>
      <PostInfo
        post={post}
        likeTouchHandler={likeTouchHandler}
        liked={liked}
        likesQty={likesQty}
      />
    </Container>
  );
};

Post.propTypes = {
  post: PropTypes.shape().isRequired,
};

export default Post;
