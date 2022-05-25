// InfiniteScroll.tsx
import React, { useState, useCallback, useEffect, useRef } from 'react';
import { getPostList, postType } from '../../model/PostList';

import '../InfiniteScroll.css';

const InfiniteScroll = (): JSX.Element => {
  const loader = useRef<HTMLDivElement | null>(null);
  const [page, setPage] = useState<number>(1);
  const [posts, setPosts] = useState<postType[]>(getPostList(1));
  const handleObserver = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      if (entries[0].isIntersecting) {
        setPosts(posts.concat(getPostList(page + 1)));
        setPage(page + 1);
      }
    },
    [page, posts],
  );

  useEffect(() => {
    const observer = new IntersectionObserver(handleObserver, { threshold: 1 });
    if (loader.current) {
      observer.observe(loader.current);
    }

    return () => observer && observer.disconnect();
  }, [handleObserver]);

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
      <div ref={loader} />
    </div>
  );
};

export default InfiniteScroll;
