import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';

import Loader from '../../components/Loader';
import Post from '../../components/Post';
import EmptyList from '../../components/EmptyList';
import {Container, ListItemSeparator} from './styles';

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [pager, setPager] = useState({
    current: 0,
    total: 1,
  });

  const getPosts = (page = 0, refreshing) => {
    if (isRefreshing) setIsRefreshing(true);
    else setIsLoading(true);

    fetch(`https://dummyapi.io/data/api/post?page=${page}&limit=10`, {
      headers: {
        'app-id': '5fc42e8d5dfaf5c04f2ef03a',
      },
    })
      .then((response) => response.json())
      .then((response) => {
        if (refreshing) {
          setIsRefreshing(false);
          setPosts(response.data);
        } else {
          setIsLoading(false);
          setPosts([...posts, ...response.data]);
        }

        delete response.data;
        setPager(response);
      })
      .catch(() => {
        setIsLoading(false);
        setIsRefreshing(false);
        alert('Error getting posts');
      });
  };

  const loadMorePosts = () => {
    const {page: currentPage, total: totalItems, limit} = pager;
    const totalPages = Math.ceil(totalItems / limit - 1);
    const nextPage = currentPage + 1;

    if (currentPage < totalPages && !isLoading && !isRefreshing) {
      getPosts(nextPage);
    }
  };

  useEffect(() => {
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
          contentContainerStyle={{flexGrow: 1}}
          data={posts}
          keyExtractor={({id}) => id}
          initialNumToRender={5}
          refreshing={isRefreshing}
          onRefresh={() => getPosts(0, true)}
          ItemSeparatorComponent={ListItemSeparator}
          onEndReached={loadMorePosts}
          onEndReachedThreshold={1}
          renderItem={({item: post}) => <Post post={post} />}
          ListFooterComponent={isLoading && posts.length > 0 && <Loader />}
          ListEmptyComponent={<EmptyList />}
        />
      )}
    </Container>
  );
};

export default Home;
