import { BasePost } from "./Feed";
import { User } from "./User";

export type SharedPost = {
  id: number;
  dateInclude: string;
  dateUpdated: string;
  dateDeleted: string;
  userShare: User;
  post: BasePost;
};
