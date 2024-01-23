import SharePost from "../SharePost";
import styles from "./styles.module.css";
import { BasePost } from "../../../../../models/Feed";
import { User } from "../../../../../models/User";
import { SharedPost } from "../../../../../models/Share";
import { ActivePostOption } from "../..";

import Post from "../../../Home/components/Post";

type Props = {
  userPosts: SharedPost[];
  handleCommentPost: (postId: number, comment: string) => void;
  checkFollowing: (post: SharedPost) => boolean;
  onClickShare: (postId: number) => void;
  onFollowOng: (ong: User) => void;
  onUnfollowOng: (ong: User) => void;
  aboutme: string;
  renderPostOption: ActivePostOption;
  createdPosts: BasePost[];
};

const About = ({
  userPosts,
  handleCommentPost,
  checkFollowing,
  onClickShare,
  onFollowOng,
  onUnfollowOng,
  aboutme,
  renderPostOption,
  createdPosts,
}: Props) => {
  return (
    <div className={styles.container}>
      <div>
        <h3>Sobre mim</h3>
        <p>{aboutme}</p>
      </div>
      <div className={styles.posts}>
        <h3>
          Publicações{" "}
          {renderPostOption === "created" ? "Criadas" : "Compartilhadas"}
        </h3>

        {renderPostOption === "shared"
          ? userPosts &&
            userPosts.map((post) => (
              <SharePost
                key={post.id}
                data={post}
                onClickComment={(postId: number, comment: string) =>
                  handleCommentPost(postId, comment)
                }
                isFollowing={checkFollowing(post)}
                onClickFollow={(ong: User) => onFollowOng(ong)}
                onClickUnfollow={(ong: User) => onUnfollowOng(ong)}
                onPressShare={(postId: number) => onClickShare(postId)}
              />
            ))
          : createdPosts.map((post) => (
              <Post
                key={post.id}
                data={post}
                onClickComment={(postId: number, comment: string) =>
                  handleCommentPost(postId, comment)
                }
                isFollowing={checkFollowing(post)}
                onClickFollow={(ong: User) => onFollowOng(ong)}
                onClickUnfollow={(ong: User) => onUnfollowOng(ong)}
                onPressShare={(postId: number) => onClickShare(postId)}
              />
            ))}
      </div>
    </div>
  );
};

export default About;
