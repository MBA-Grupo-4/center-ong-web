import styles from "./styles.module.css";
import avatar from "../../../../../assets/avatar.png";
import { BaseUser } from "../../../../../models/User";
import EditProfileModal from "./EditProfileModal"; 

type Props = {
  data: BaseUser | undefined; // Adiciona uma verificação de tipo para evitar propriedades undefined
};

const ProfileHeader = ({ data }: Props) => {
  // Adiciona verificação de nulos para evitar erros
  const name = data?.name || 'Nome Usuário';
  const username = data?.username || 'nomeusuario';

  return (
    <div className={styles.container}>
      <div className={styles.logoAndName}>
        <div>
          <img src={avatar} alt="avatar" className={styles.avatar} />
        </div>
        <div>
          <p>{name}</p>
          <p>@{username}</p>
        </div>
      </div>
      <div className={styles.buttons}>
        <EditProfileModal />
      </div>
    </div>
  );
};

export default ProfileHeader;
