import React from 'react';
import PropTypes from 'prop-types';

import {Container, UserImage, UserName} from './styles';

const UserInfo = ({user}) => {
  const {firstName, lastName, picture} = user;

  return (
    <Container>
      <UserImage
        source={{
          uri: picture,
        }}
      />
      <UserName>{`${firstName} ${lastName}`}</UserName>
    </Container>
  );
};

UserInfo.propTypes = {
  user: PropTypes.shape().isRequired,
};

export default UserInfo;
