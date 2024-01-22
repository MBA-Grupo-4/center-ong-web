import Post from "../Post";
import styles from "./styles.module.css";
import { BasePost } from "../../../../../models/Feed";
import { User } from "../../../../../models/User";
import { SharedPost } from "../../../../../models/Share";

type Props = {
  userPosts: SharedPost[];
  handleCommentPost: (postId: number, comment: string) => void;
  checkFollowing: (post: SharedPost) => boolean;
  onClickShare: (postId: number) => void;
  onFollowOng: (ong: User) => void;
  onUnfollowOng: (ong: User) => void;
  aboutme: string;
};

const About = ({
  userPosts,
  handleCommentPost,
  checkFollowing,
  onClickShare,
  onFollowOng,
  onUnfollowOng,
  aboutme,
}: Props) => {
  return (
    <div className={styles.container}>
      <div>
        <h3>Sobre mim</h3>
        <p>{aboutme}</p>
      </div>
      <div className={styles.posts}>
        <h3>Posts Compartilhados</h3>

        {userPosts &&
          userPosts.map((post) => (
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
