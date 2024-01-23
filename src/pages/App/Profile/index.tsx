import Header from "../Home/components/Header";
import profileCover from "../../../assets/profile-cover.jpg";
import styles from "./styles.module.css";
import ProfileHeader from "./components/ProfileHeader";
import NavTabs from "./components/NavTabs";
import React, { useEffect, useState } from "react";
import About from "./components/About";
import { getSharedPosts, postShare } from "../../../services/Share";
import { authRepository } from "../../../repositories/auth.repository";
import { useToast } from "@chakra-ui/react";
import {
  delUnfollowOng,
  getTimeline,
  postComment,
  postFollowOng,
} from "../../../services/Feed";
import { User } from "../../../models/User";
import { SharedPost } from "../../../models/Share";
import { useNavigate } from "react-router-dom";
import EditModal from "./components/EditModal";
import { BasePost } from "../../../models/Feed";
import CreatePostModal from "./components/CreatePostModal";
import { useAuth } from "../../../hooks/auth";

export type ActivePages = "about" | "contribuitions" | "photos" | "videos";

export type ActivePostOption = "shared" | "created";

const Profile = () => {
  const user = authRepository.getLoggedUser();
  const toast = useToast();
  const navigate = useNavigate();

  const { userData } = useAuth();

  const [activePage, setActivePage] = React.useState<ActivePages>("about");
  const [activePostOption, setActivePostOption] =
    useState<ActivePostOption>("shared");

  const [postsShared, setPostsShared] = useState<SharedPost[]>([]);
  const [postsCreated, setPostsCreated] = useState<BasePost[]>([]);

  const [displayEditModal, setDisplayEditModal] = useState(false);
  const [displayPostModal, setDisplayPostModal] = useState(false);

  const handlePostOption = (type: ActivePostOption): void => {
    setActivePostOption(type);
  };

  const handleDisplayPostModal = (): void => {
    setDisplayPostModal(!displayPostModal);
  };

  const handleSharedPosts = async (): Promise<void> => {
    if (user) {
      try {
        const response = await getSharedPosts(user?.id);
        data = response.data;

        setPostsShared(data);
      } catch (err) {
        console.log("load shared Post err", err);
      }
    }
  };
  const handleCreatedPosts = async (): Promise<void> => {
    if (user) {
      try {
        const response = await getTimeline(user?.id);
        setPostsCreated(response.data);
      } catch (err) {
        console.log("load created Post err", err);
      }
    }
  };

  const handleCheckIsFollowingOng = (data: SharedPost): boolean => {
    if (
      user?.following?.some((follow) => follow.id === data?.post?.author?.id)
    ) {
      return true;
    } else {
      return false;
    }
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
    if (!user) {
      return;
    }
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

  useEffect(() => {
    handleSharedPosts();
    handleCreatedPosts();
  }, []);

  const handleFollowedNGOClick = (ongId: number): void => {
    navigate(`/ong/${ongId}`);
  };

  const handleDisplayEditModal = (): void => {
    setDisplayEditModal(!displayEditModal);
  };

  return (
    <div className={styles.page}>
      <Header />
      <div className={styles.cover}>
        <img src={profileCover} alt="cover" />
      </div>
      <div className={styles.container}>
        <ProfileHeader
          data={userData}
          onPressEdit={handleDisplayEditModal}
          onPressCreate={handleDisplayPostModal}
        />
        <NavTabs
          setActivePage={setActivePage}
          followingOngs={user?.following || []}
          onClickNGO={(ongId: number) => handleFollowedNGOClick(ongId)}
          onClickPostRender={handlePostOption}
        />
        {activePage === "about" && (
          <About
            checkFollowing={handleCheckIsFollowingOng}
            handleCommentPost={handleCommentPost}
            onClickShare={handlePressShare}
            onFollowOng={handleFollowOng}
            onUnfollowOng={toggleUnfollowOption}
            userPosts={postsShared}
            aboutme={user?.aboutme}
            renderPostOption={activePostOption}
            createdPosts={postsCreated}
          />
        )}
        <EditModal isOpen={displayEditModal} onClose={handleDisplayEditModal} />
        <CreatePostModal
          isOpen={displayPostModal}
          onClose={handleDisplayPostModal}
        />
      </div>
    </div>
  );
};

export default Profile;
