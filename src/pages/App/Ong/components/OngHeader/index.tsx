import ongLogo from "../../../../../assets/ong-logo.svg";
import styles from "./styles.module.css";
import blueStar from "../../../../../assets/blue-star.svg";
import whiteHeart from "../../../../../assets/white-heart.svg";

const OngHeader = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logoAndName}>
        <div>
          <img src={ongLogo} alt="logo" className={styles.logo} />
        </div>
        <div>
          <p>Nome ONG</p>
          <p>@nomedaong</p>
        </div>
      </div>
      <div className={styles.buttons}>
        <button type="button">
          <img src={blueStar} alt="follow" />
          Seguir
        </button>
        <button type="button">
          <img src={whiteHeart} alt="donate" />
          Doar
        </button>
      </div>
    </div>
  );
};

export default OngHeader;
