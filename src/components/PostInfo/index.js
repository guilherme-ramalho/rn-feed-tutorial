import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
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

const PostInfo = ({post}) => {
  const {likes, owner, text} = post;
  const {firstName, lastName} = owner;

  return (
    <Container>
      <PostButtons>
        <Icon name="heart-outline" size={24} color="#fff" />
        <Icon name="chat-outline" size={24} color="#fff" />
        <Icon name="star-outline" size={24} color="#fff" />
      </PostButtons>
      <PostSeparator />
      <Row>
        <Icon name="heart" size={12} color="red" />
        <LikesText>{`${likes} likes`}</LikesText>
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
};

export default PostInfo;
