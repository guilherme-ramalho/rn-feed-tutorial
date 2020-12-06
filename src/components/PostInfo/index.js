import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import PropTypes from 'prop-types';

import {
  Container,
  LikesText,
  Row,
  PostButtons,
  PostSeparator,
  UserName,
  PostText,
} from './styles';

const PostInfo = ({post, onLikeButtonTouch}) => {
  const {likes, owner, text} = post;
  const {firstName, lastName} = owner;
  const [liked, setLiked] = useState(false);
  const [likesQty, setLikesQty] = useState(likes);

  const likeTouchHandler = () => {
    setLiked(true);

    if (!liked) {
      setLikesQty(likesQty + 1);
      onLikeButtonTouch();
    }
  };

  return (
    <Container>
      <PostButtons>
        <Icon
          onPress={() => likeTouchHandler()}
          name="heart"
          size={24}
          color={liked ? '#F25758' : '#fff'}
        />
        <Icon name="comment" size={24} color="#fff" />
        <Icon name="share" size={24} color="#fff" />
      </PostButtons>
      <PostSeparator />
      <Row>
        <Icon name="heart" size={12} color="#F25758" />
        <LikesText>{`${likesQty} likes`}</LikesText>
      </Row>
      <Row>
        <PostText>
          <UserName>
            {firstName.toLowerCase() + lastName.toLowerCase()}
          </UserName>
          {`  ${text}`}
        </PostText>
      </Row>
    </Container>
  );
};

PostInfo.propTypes = {
  post: PropTypes.shape().isRequired,
  onLikeButtonTouch: PropTypes.func.isRequired,
};

export default PostInfo;
