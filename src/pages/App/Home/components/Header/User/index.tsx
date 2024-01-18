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
  return (
    <div
      className={styles.container}
      onClick={() => {
        handleLogout();
      }}
    >
      <img src={avatar} alt="avatar" width="39" height="39" />
      <p>{user?.username}</p>
    </div>
  );
};

export default User;
