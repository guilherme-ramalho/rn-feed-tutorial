import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';

import Loader from '../../components/Loader';
import Post from '../../components/Post';
import {Container, ListItemSeparator} from './styles';

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [pager, setPager] = useState({
    current: 0,
    total: 1,
  });

  const getPosts = (page = 0) => {
    setIsLoading(true);

    fetch(`https://dummyapi.io/data/api/post?page=${page}&limit=5`, {
      headers: {
        'app-id': '5fc42e8d5dfaf5c04f2ef03a',
      },
    })
      .then((response) => response.json())
      .then((response) => {
        setIsLoading(false);
        setPosts([...posts, ...response.data]);
        delete response.data;
        setPager(response);
      })
      .catch(() => {
        setIsLoading(false);
        alert('Error getting posts');
      });
  };

  const loadMorePosts = () => {
    const {page: currentPage, total: totalItems, limit} = pager;
    const totalPages = Math.ceil(totalItems / limit - 1);

    console.tron.log('Load More');
    console.tron.log(currentPage, totalPages);

    if (currentPage < totalPages) {
      const nextPage = currentPage + 1;

      getPosts(nextPage);
    }
  };

  useEffect(() => {
    console.tron.log('Effect');
    if (posts.length === 0) {
      getPosts();
    }
  }, []);

  return (
    <Container>
      {isLoading && posts.length === 0 ? (
        <Loader />
      ) : (
        <FlatList
          data={posts}
          keyExtractor={({id}) => id}
          ItemSeparatorComponent={ListItemSeparator}
          onEndReached={loadMorePosts}
          onEndReachedThreshold={0.4}
          renderItem={({item}) => <Post post={item} />}
          ListFooterComponent={() => {
            if (isLoading) {
              return <Loader />;
            }
            return <></>;
          }}
        />
      )}
    </Container>
  );
};

export default Home;
