import homeIcon from "../../../../../assets/home-icon.svg";
import profileIcon from "../../../../../assets/profile-icon.svg";
import styles from "./styles.module.css";

type Props = {
  onClickHome: () => void;
  onClickProfile: () => void;
};

const SideNav = ({ onClickHome, onClickProfile }: Props) => {
  return (
    <nav className={styles.container}>
      <ul>
        <li onClick={onClickHome} className={styles.option}>
          <img src={homeIcon} alt="home" width="24" height="24" />
          Home
        </li>
        <li onClick={onClickProfile} className={styles.option}>
          <img src={profileIcon} alt="profile" width="24" height="24" />
          Perfil
        </li>
      </ul>
    </nav>
  );
};

export default SideNav;
