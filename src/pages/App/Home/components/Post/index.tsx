import ongIcon from "../../../../../assets/ong-icon.png";
import styles from "./styles.module.css";
import rateIcon from "../../../../../assets/rate-star.svg";
import comentIcon from "../../../../../assets/coment.svg";
import orderIcon from "../../../../../assets/order.svg";
import likeIcon from "../../../../../assets/like.svg";
import { ReactNode } from "react";

type PostProps = {
  image?: string;
  children?: ReactNode;
};

const Post = ({ image, children }: PostProps) => {
  return (
    <div className={styles.container}>
      <header>
        <div>
          <img src={ongIcon} alt="ong" width="60" height="60" />
        </div>
        <div>
          <p>Nome Ong</p>
          <p>
            {children}
          </p>
        </div>
      </header>

      {image && (
        <div className={styles.body}>
          <img src={image} alt="mock" />
        </div>
      )}

      <div className={styles.actions}>
        <div role="button">
          <img src={rateIcon} alt="rate" />
        </div>
        <div role="button">
          <img src={comentIcon} alt="comment" />
        </div>
        <div role="button">
          <img src={orderIcon} alt="order" />
        </div>
        <div role="button">
          <img src={likeIcon} alt="like" />
        </div>
      </div>
    </div>
  );
};

export default Post;
