import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';

import Loader from '../../components/Loader';
import Post from '../../components/Post';
import {Container, ListItemSeparator} from './styles';

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getPosts = () => {
    setIsLoading(true);

    fetch('https://dummyapi.io/data/api/post', {
      headers: {
        'app-id': '5fc42e8d5dfaf5c04f2ef03a',
      },
    })
      .then((response) => response.json())
      .then((response) => {
        setIsLoading(false);
        setPosts(response.data);
      })
      .catch(() => {
        setIsLoading(false);
        alert('Error getting posts');
      });
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <Container>
      {isLoading ? (
        <Loader />
      ) : (
        <FlatList
          data={posts}
          ItemSeparatorComponent={ListItemSeparator}
          renderItem={({item}) => <Post post={item} />}
        />
      )}
    </Container>
  );
};

export default Home;
