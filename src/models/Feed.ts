import { User } from "./User";

export type BaseComment = {
  id: number;
  dateInclude: string;
  dateUpdated: string;
  dateDeleted: string;
  text: string;
  userCommentId: User;
};

export type BasePost = {
  id: number;
  dateInclude: string;
  dateUpdated: string;
  dateDeleted: string;
  content: string;
  image: string;
  likes: number;
  comments: BaseComment[];
  author: User;
  liked?: boolean;
};

export type BasePostPayload = {
  userId: number;
  content: string;
  image: string;
};

export type PostComentPayload = {
  userCommentId: number;
  comment: string;
};

export type PostONGFollowPayload = {
  userId: number;
  followerId: number;
};

export type SharePostPayload = {
  userShareId: number;
  postId: number;
};

export type CreatePostPayload = {
  content: string;
  image?: string | null;
  userId: number;
};
