import { Flex, Image, Input } from "@chakra-ui/react";
import { useState } from "react";

import ongIcon from "../../../../../assets/ong-icon.png";
import styles from "./styles.module.css";

import rateIcon from "../../../../../assets/rate-star.svg";
import rateFullIcon from "../../../../../assets/rate-full-star.svg";
import comentIcon from "../../../../../assets/coment.svg";
import orderIcon from "../../../../../assets/order.svg";
import likeIcon from "../../../../../assets/like.svg";
import avatarimg from "../../../../../assets/avatar.png";

import { BasePost } from "../../../../../models/Feed";
import TextRaleway from "../../../../../components/TextRaleway";
import { User } from "../../../../../models/User";
import { SharedPost } from "../../../../../models/Share";

type PostProps = {
  data: SharedPost;
  onClickComment: (postId: number, comment: string) => void;
  isFollowing: boolean;
  onClickFollow: (ong: User) => void;
  onClickUnfollow: (ong: User) => void;
  onPressShare: (postId: number) => void;
};

const SharePost = ({
  data,
  onClickComment,
  isFollowing,
  onClickFollow,
  onClickUnfollow,
  onPressShare,
}: PostProps) => {
  const [comment, setComment] = useState<string>("");

  const handleComment = (): void => {
    onClickComment(data.id, comment);
  };

  return (
    <div className={styles.container}>
      <header>
        <div>
          <img src={ongIcon} alt="ong" width="60" height="60" />
        </div>
        <div>
          <p>{data?.post?.author?.name}</p>
          <p>{data?.post?.content}</p>
        </div>
      </header>

      {data?.post?.image && (
        <div className={styles.body}>
          <img src={data?.post?.image} alt="mock" />
        </div>
      )}

      <div className={styles.actions}>
        <div role="button">
          {isFollowing ? (
            <img
              src={rateFullIcon}
              alt="rate"
              onClick={() => onClickUnfollow(data.post.author)}
            />
          ) : (
            <img
              src={rateIcon}
              alt="rate"
              onClick={() => onClickFollow(data.post.author)}
            />
          )}
        </div>
        <div role="button">
          <img src={comentIcon} alt="comment" />
        </div>
        <div role="button">
          <img
            src={orderIcon}
            alt="order"
            onClick={() => onPressShare(data.id)}
          />
        </div>
        <div role="button">
          <img src={likeIcon} alt="like" />
        </div>
      </div>

      {data?.post?.comments ? (
        data.post.comments.map((comment) => (
          <Flex mt={"3vh"} mb={"2vh"} alignItems={"center"}>
            <Image
              src={avatarimg}
              alt="mock"
              width={"2vw"}
              height={"2vw"}
              mr={"1vw"}
            />
            <Flex flexDir={"column"}>
              <TextRaleway fontWeight={"bold"}>
                {comment?.userCommentId?.name}
              </TextRaleway>
              <TextRaleway>{comment.text}</TextRaleway>
            </Flex>
          </Flex>
        ))
      ) : (
        <></>
      )}

      <Flex mt={"3vh"} mb={"2vh"} alignItems={"center"}>
        <Image
          src={avatarimg}
          alt="mock"
          width={"2vw"}
          height={"2vw"}
          mr={"1vw"}
        />
        <Input
          placeholder="seu comentário"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <Flex
          backgroundColor={"custom.purple100"}
          alignItems={"center"}
          justifyContent={"center"}
          flexDir={"column"}
          w={"3.2vw"}
          h={"2.5vw"}
          borderRadius={"6vw"}
          ml={"1vw"}
          onClick={handleComment}
          cursor={"pointer"}
        >
          <Image
            src={comentIcon}
            alt="mock"
            w={"1.5vw"}
            h={"1.5vw"}
            filter="brightness(0) invert(1)"
          />
        </Flex>
      </Flex>
    </div>
  );
};

export default SharePost;
