import React from 'react';

import {Container, Animation, EmptyText} from './styles';

function EmptyList() {
  return (
    <Container>
      <Animation autoPlay loop />
      <EmptyText>Nothing to see here</EmptyText>
    </Container>
  );
}

export default EmptyList;
