export type postType = {
  title: string;
  contents: string;
  page: number;
};

export const getPostList = (page: number): postType[] =>
  postList.filter((post: postType) => post.page === page);

const postList: postType[] = Array.from(Array(20), (_, index) => ({
  title: `${index + 1}번째 제목`,
  contents: `${index + 1}번째 글`,
  page: Math.round(Math.floor(index / 3) + 1),
}));
