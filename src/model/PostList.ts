const totals = 20;

export type PostType = {
  title: string;
  contents: string;
  page: number; // 없어야 하는 변수지만 예제이기 때문에 식별용으로 남겨둔다.
};

export type PaginationPostListType = {
  posts: PostType[];
  page: number;
  lastPage: number | undefined;
};

export const getPostList = (page: number): PaginationPostListType => ({
  posts: postList.filter((post: PostType) => post.page === page),
  page: page,
  lastPage: Math.round(Math.floor(totals / 3) + 1),
});

const postList: PostType[] = Array.from(Array(totals), (_, index) => ({
  title: `${index + 1}번째 제목`,
  contents: `${index + 1}번째 글`,
  page: Math.round(Math.floor(index / 3) + 1),
}));
