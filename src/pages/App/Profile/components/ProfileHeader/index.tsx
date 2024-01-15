import styles from "./styles.module.css";
import avatar from "../../../../../assets/avatar.svg";

const ProfileHeader = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logoAndName}>
        <div>
          <img src={avatar} alt="avatar" className={styles.avatar} />
        </div>
        <div>
          <p>Nome Usuário</p>
          <p>@nomeusuário</p>
        </div>
      </div>
      <div className={styles.buttons}>
        <button type="button">
          Editar Perfil
        </button>
      </div>
    </div>
  );
};

export default ProfileHeader;
