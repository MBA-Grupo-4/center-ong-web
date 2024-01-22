import { useNavigate } from "react-router-dom";
import avatar from "../../../../../../assets/avatar.png";
import { authRepository } from "../../../../../../repositories/auth.repository";
import styles from "./styles.module.css";

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

  return (
    <div className={styles.container}>
      <img
        src={avatar}
        alt="avatar"
        width="39"
        height="39"
        className={styles.pointer}
        onClick={() => handleSelfNavigate()}
      />
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
