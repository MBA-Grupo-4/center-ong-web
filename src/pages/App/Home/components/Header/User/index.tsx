import { useNavigate } from "react-router-dom";
import avatar from "../../../../../../assets/avatar.png";
import onglogo from "../../../../../../assets/ong-logo.svg";
import { authRepository } from "../../../../../../repositories/auth.repository";
import styles from "./styles.module.css";
import { Image } from "@chakra-ui/react";

const User = () => {
  const user = authRepository.getLoggedUser();
  const navigate = useNavigate();

  const handleLogout = (): void => {
    authRepository.removeLoggedUser();
    navigate("/login");
  };

  const handleSelfNavigate = (): void => {
    navigate("/profile");
  };
  console.log(user?.isOng);

  return (
    <div className={styles.container}>
      {user?.isOng ? (
        <img
          src={user?.profilepic !== null ? user?.profilepic : onglogo}
          alt="avatar"
          width="39"
          height="39"
          className={styles.profile}
          onClick={() => handleSelfNavigate()}
        />
      ) : (
        <img
          src={user?.profilepic !== null ? user?.profilepic : avatar}
          alt="avatar"
          width="39"
          height="39"
          className={styles.profile}
          onClick={() => handleSelfNavigate()}
        />
      )}

      <p className={styles.pointer} onClick={() => handleSelfNavigate()}>
        {user?.name}
      </p>
      <span
        className={styles.logout}
        onClick={() => {
          handleLogout();
        }}
      >
        Sair
      </span>
    </div>
  );
};

export default User;
