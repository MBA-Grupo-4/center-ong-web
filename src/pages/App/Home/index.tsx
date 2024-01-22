import Header from "./components/Header";
import MyNGOs from "./components/MyNGOs";
import NGOSugestions from "./components/NGOSugestions";
import Post from "./components/Post";
import SideNav from "./components/SideNav";
import styles from "./styles.module.css";
import {
  delUnfollowOng,
  getFeed,
  postComment,
  postFollowOng,
  postLike,
  postUnlike,
} from "../../../services/Feed";
import { getLoggedUser, getUsers } from "../../../services/User";
import { useEffect, useState } from "react";
import { BasePost } from "../../../models/Feed";
import EmptyPosts from "./components/EmptyPosts";
import { User } from "../../../models/User";
import { getSharedPosts, postShare } from "../../../services/Share";
import { useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const user = getLoggedUser();
  const toast = useToast();
  const navigate = useNavigate();

  console.log(user);

  const [userFeed, setUserFeed] = useState<BasePost[]>([]);
  const [postsShared, setPostsShared] = useState<BasePost[]>([]);
  const [ngoSuggestion, setNgoSuggestion] = useState<User[]>([]);

  const handleLoadFeed = async (): Promise<void> => {
    if (user) {
      try {
        const response = await getFeed(user?.id);

        setUserFeed(response.data);
      } catch (err) {
        // console.log(err.response.data.message);
        console.log("load feed error", err.response.data);
      }
    }
  };

  const handleSharedPosts = async (): Promise<void> => {
    if (user) {
      try {
        const response = await getSharedPosts(user?.id);
        setPostsShared(response.data);
      } catch (err) {
        console.log("load shared Post err", err);
      }
    }
  };

  const handleSuggestedOngs = async (): Promise<void> => {
    if (user) {
      try {
        const response = await getUsers();
        const ongsOnly = response.data.filter((ong) => ong.isOng === true);
        const unfollowedOngs = ongsOnly.filter((ong) => {
          const isFollowed = user.following?.some(
            (follow) => follow.id === ong.id
          );

          return !isFollowed;
        });

        setNgoSuggestion(unfollowedOngs);
      } catch (err) {
        console.log("err suggested ongs", err);
      }
    }
  };

  useEffect(() => {
    handleLoadFeed();
    handleSharedPosts();
    handleSuggestedOngs();
  }, []);

  const handleHomePress = (): void => {
    navigate("/feed");
  };

  const handleProfilePress = (): void => {
    navigate("/profile");
  };

  const handleCommentPost = async (
    postId: number,
    comment: string
  ): Promise<void> => {
    if (user) {
      try {
        await postComment(postId, {
          comment,
          userCommentId: user?.id,
        });
        location.reload();
      } catch (err) {
        console.log("err post comment", err);
      }
    }
  };

  const handleCheckIsFollowingOng = (data: BasePost): boolean => {
    if (user?.following?.some((follow) => follow.id === data.author.id)) {
      return true;
    } else {
      return false;
    }
  };

  const handleFollowOng = async (ong: User): Promise<void> => {
    if (user) {
      try {
        await postFollowOng({ followerId: user?.id, userId: ong.id });
      } catch (err) {
        console.log("err follow Ong", err);
      }
    }
  };

  const handleUnfollowOng = async (ong: User): Promise<void> => {
    if (user) {
      try {
        await delUnfollowOng({ followerId: user?.id, userId: ong.id });
        location.reload();
      } catch (err) {
        console.log("err follow Ong", err);
      }
    }
  };

  const toggleUnfollowOption = async (ong: User): Promise<void> => {
    const result = confirm("Você quer deixar de seguir a ONG?");
    // todo check why is not following
    if (result) {
      await handleUnfollowOng(ong);
    }
  };

  const handlePressShare = async (postId: number): Promise<void> => {
    const findPreviousPost = postsShared.find((post) => post.id === postId);
    if (findPreviousPost) {
      toast({
        title: "Não é possível compartilhar este post.",
        description: "Você já compartilhou esse post em um momento anterior.",
        status: "warning",
        duration: 4000,
        isClosable: true,
      });
      return;
    }
    try {
      await postShare({ postId, userShareId: user.id });
      handleSharedPosts();
      toast({
        title: "Post compartilhado!",
        description: "Obrigado por compartilhar este post!",
        status: "success",
        duration: 4000,
        isClosable: true,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const handleFollowedNGOClick = (ongId: number): void => {
    navigate(`/ong/${ongId}`);
  };

  const handlePostLike = async (postId: number): Promise<void> => {
    try {
      await postLike(postId);
      location.reload();
    } catch (err) {
      console.log("err post like", err);
    }
  };

  const handlePostDislike = async (postId: number): Promise<void> => {
    try {
      await postUnlike(postId);
      location.reload();
    } catch (err) {
      console.log("err post like", err);
    }
  };

  return (
    <div>
      <Header />
      <main className={styles.main}>
        <aside>
          <SideNav
            onClickHome={handleHomePress}
            onClickProfile={handleProfilePress}
          />
          <MyNGOs
            followedNGOS={user?.following || []}
            onClickNGO={(ongId: number) => handleFollowedNGOClick(ongId)}
          />
        </aside>
        <section className={styles.feed}>
          {userFeed.length > 0 ? (
            <>
              <h3 className="subtitle">Feed</h3>
              {userFeed.map((post) => (
                <Post
                  key={post.id}
                  data={post}
                  onClickComment={(postId: number, comment: string) =>
                    handleCommentPost(postId, comment)
                  }
                  isFollowing={handleCheckIsFollowingOng(post)}
                  onClickFollow={(ong: User) => handleFollowOng(ong)}
                  onClickUnfollow={(ong: User) => toggleUnfollowOption(ong)}
                  onPressShare={(postId: number) => handlePressShare(postId)}
                  onClickLike={(postId: number) => handlePostLike(postId)}
                  onClickUnlike={(postId: number) => handlePostDislike(postId)}
                />
              ))}
            </>
          ) : (
            <EmptyPosts />
          )}
        </section>
        <aside>
          <NGOSugestions
            suggestedNGOS={ngoSuggestion}
            onClickNGO={(ongId: number) => handleFollowedNGOClick(ongId)}
          />
        </aside>
      </main>
    </div>
  );
};

export default Home;
