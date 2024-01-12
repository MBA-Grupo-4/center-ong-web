import avatar from "../../../../../../assets/avatar.png";
import styles from './styles.module.css'

const User = () => {
  return (
    <div className={styles.container}>
      <img src={avatar} alt="avatar" width="39" height="39" />
      <p>Nome usuário</p>
    </div>
  );
};

export default User;
