import homeIcon from "../../../../../assets/home-icon.svg";
import profileIcon from "../../../../../assets/profile-icon.svg";
import styles from "./styles.module.css";

const SideNav = () => {
  return (
    <nav className={styles.container}>
      <ul>
        <li>
          <img src={homeIcon} alt="home" width="24" height="24" />
          Home
        </li>
        <li>
          <img src={profileIcon} alt="profile" width="24" height="24" />
          Perfil
        </li>
      </ul>
    </nav>
  );
};

export default SideNav;
