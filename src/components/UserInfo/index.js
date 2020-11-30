import React from 'react';
import PropTypes from 'prop-types';

import {Container, UserImage, UserName, UserImageWrapper} from './styles';

const UserInfo = ({user}) => {
  const {firstName, lastName, picture} = user;

  return (
    <Container>
      <UserImageWrapper>
        <UserImage
          source={{
            uri: picture,
          }}
        />
      </UserImageWrapper>
      <UserName>{`${firstName} ${lastName}`}</UserName>
    </Container>
  );
};

UserInfo.propTypes = {
  user: PropTypes.shape().isRequired,
};

export default UserInfo;
