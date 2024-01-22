import Post from "../../../Home/components/Post";
import styles from "./styles.module.css";
import imageMock from "../../../../../assets/post-img.jpg";
import { BasePost } from "../../../../../models/Feed";
import { User } from "../../../../../models/User";

type Props = {
  user: User;
  handleCommentPost: (postId: number, comment: string) => void;
  checkFollowing: (post: BasePost) => boolean;
  onClickShare: (postId: number) => void;
  onFollowOng: (ong: User) => void;
  onUnfollowOng: (ong: User) => void;
};

const About = ({
  checkFollowing,
  handleCommentPost,
  onClickShare,
  onFollowOng,
  onUnfollowOng,
  user,
}: Props) => {
  return (
    <div className={styles.container}>
      <div>
        <h3>Sobre {user?.isOng ? "a Ong" : "Ele (a)"}</h3>
        <p>{user?.aboutme}</p>
      </div>
      <div>
        {user?.posts &&
          user?.posts?.map((post) => (
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
