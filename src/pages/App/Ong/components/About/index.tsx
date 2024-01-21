import Post from "../../../Home/components/Post";
import styles from "./styles.module.css";
import imageMock from "../../../../../assets/post-img.jpg";
import { BasePost } from "../../../../../models/Feed";
import { User } from "../../../../../models/User";

type Props = {
  userPosts: BasePost[];
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
  userPosts,
}: Props) => {
  return (
    <div className={styles.container}>
      <div>
        <h3>A Ong</h3>
        <p>
          Lorem ipsum is a pseudo-Latin text used in web design, typography,
          layout, and printing in place of English to emphasise design elements
          over content. It's also called placeholder (or filler) text. It's a
          convenient tool for mock-ups. It helps to outline the visual elements
          of a document or presentation, eg typography, font, or layout. Lorem
          ipsum is mostly a part of a Latin text by the classical author and
          philosopher Cicero. Its words and letters have been changed by
          addition or removal, so to deliberately render its content
        </p>
      </div>
      <div>
        {/* <Post image={imageMock}>
          Lorem ipsum dolor sit amet, agam accusamus persequeris id sea. Aeque
          eleifend eam in. Rebum placerat definitiones.
        </Post> */}
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
