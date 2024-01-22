import Header from "../Home/components/Header";
import ongCover from "../../../assets/ong-cover.jpg";
import styles from "./styles.module.css";
import OngHeader from "./components/OngHeader";
import NavTabs from "./components/NavTabs";
import React, { useEffect, useState } from "react";
import About from "./components/About";

import { authRepository } from "../../../repositories/auth.repository";
import { postShare } from "../../../services/Share";
import { getUser } from "../../../services/User";
import { useToast } from "@chakra-ui/react";
import {
  delUnfollowOng,
  getTimeline,
  postComment,
  postFollowOng,
} from "../../../services/Feed";
import { User } from "../../../models/User";
import { useNavigate, useParams } from "react-router-dom";
import DonateModal from "./components/DonateModal";

export type ActivePages =
  | "about"
  | "goals"
  | "publications"
  | "photos"
  | "videos";

const Ong = () => {
  const user = authRepository.getLoggedUser();
  const [activePage, setActivePage] = React.useState<ActivePages>("about");
  const toast = useToast();
  const navigate = useNavigate();
  const { ongId } = useParams();

  const [ongData, setOngData] = useState<User>();
  const [displayDonateModal, setDisplayDonateModal] = useState(false);

  const handleDisplayDonateModal = (): void => {
    setDisplayDonateModal(!displayDonateModal);
  };

  const handleSharedPosts = async (): Promise<void> => {
    const numberOng = Number(ongId);

    try {
      const response = await getUser(numberOng);
      const postsResponse = await getTimeline(numberOng);
      const data: User = { ...response.data, posts: postsResponse.data };
      setOngData(data);
    } catch (err) {
      console.log("load shared Post err", err);
    }
  };

  const handleCheckIsFollowingOng = (): boolean => {
    if (ongData?.following?.some((follow) => follow.id === ongData?.id)) {
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
        location.reload();
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
    if (result) {
      await handleUnfollowOng(ong);
    }
  };

  const handlePressShare = async (postId: number): Promise<void> => {
    if (!user) {
      return;
    }
    const findPreviousPost = ongData?.posts?.find((post) => post.id === postId);
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
  }, []);

  const handleFollowedNGOClick = (ongId: number): void => {
    navigate(`/ong/${ongId}`);
  };

  return (
    <div className={styles.page}>
      <Header />
      <div className={styles.cover}>
        <img src={ongCover} alt="cover" />
      </div>
      <div className={styles.container}>
        <OngHeader
          data={ongData}
          onPressFollow={handleFollowOng}
          onPressUnfollow={toggleUnfollowOption}
          onPressDonate={handleDisplayDonateModal}
        />
        <NavTabs setActivePage={setActivePage} />
        {activePage === "about" && (
          <About
            checkFollowing={handleCheckIsFollowingOng}
            handleCommentPost={handleCommentPost}
            onClickShare={handlePressShare}
            onFollowOng={handleFollowOng}
            onUnfollowOng={toggleUnfollowOption}
            user={ongData}
          />
        )}
        {ongData?.isOng && (
          <DonateModal
            isOpen={displayDonateModal}
            onClose={handleDisplayDonateModal}
            ongData={ongData!}
          />
        )}
      </div>
    </div>
  );
};

export default Ong;
