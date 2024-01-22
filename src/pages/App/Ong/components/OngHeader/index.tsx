import ongLogo from "../../../../../assets/ong-logo.svg";
import styles from "./styles.module.css";
import blueStar from "../../../../../assets/blue-star.svg";
import whiteStar from "../../../../../assets/white-full-star.svg";
import whiteHeart from "../../../../../assets/white-heart.svg";
import { User } from "../../../../../models/User";
import { authRepository } from "../../../../../repositories/auth.repository";

type Props = {
  data: User;
  onPressFollow: (ong: User) => void;
  onPressUnfollow: (ong: User) => void;
};

const OngHeader = ({ data, onPressFollow, onPressUnfollow }: Props) => {
  const user = authRepository.getLoggedUser();
  return (
    <div className={styles.container}>
      <div className={styles.logoAndName}>
        <div>
          <img src={ongLogo} alt="logo" className={styles.logo} />
        </div>
        <div>
          <p>{data?.name}</p>
          <p>@{data?.username}</p>
        </div>
      </div>
      <div className={styles.buttons}>
        {user?.following?.some((ongs) => ongs?.id === data?.id) ? (
          <>
            <button
              type="button"
              className={styles.buttonFollow}
              onClick={() => onPressUnfollow(data)}
            >
              <img src={whiteStar} alt="follow" />
              Seguindo
            </button>
          </>
        ) : (
          <>
            <button type="button" onClick={() => onPressFollow(data)}>
              <img src={blueStar} alt="follow" />
              Seguir
            </button>
          </>
        )}

        <button type="button">
          <img src={whiteHeart} alt="donate" />
          Doar
        </button>
      </div>
    </div>
  );
};

export default OngHeader;
