// InfiniteScroll.tsx
import React, { useState, useCallback, useEffect } from 'react';
import { getPostList, postType } from '../../model/postList';

import '../InfiniteScroll.css';

const InfiniteScroll = (): JSX.Element => {
  const [page, setPage] = useState<number>(1);
  const [posts, setPosts] = useState<postType[]>(getPostList(1));

  const handleScroll = useCallback((): void => {
    const { innerHeight } = window;
    const { scrollHeight } = document.body;
    const { scrollTop } = document.documentElement;

    if (Math.round(scrollTop + innerHeight) >= scrollHeight) {
      setPosts(posts.concat(getPostList(page + 1)));
      setPage((prevPage: number) => prevPage + 1);
    }
  }, [page, posts]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, true);

    return () => {
      window.removeEventListener('scroll', handleScroll, true);
    };
  }, [handleScroll]);

  return (
    <div className="container">
      {posts.map((post: postType, idx: number) => (
        <div className="postItem" key={idx}>
          <h3>{post.title}</h3>
          {post.contents}
          <br />
          {post.page} 페이지
        </div>
      ))}
    </div>
  );
};

export default InfiniteScroll;
