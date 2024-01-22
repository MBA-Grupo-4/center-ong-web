import styles from "./styles.module.css";
import avatar from "../../../../../assets/avatar.png";
import { BaseUser } from "../../../../../models/User";
import { Image } from "@chakra-ui/react";

type Props = {
  data: BaseUser;
  onPressEdit: () => void;
};

const ProfileHeader = ({ data, onPressEdit }: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.logoAndName}>
        <div>
          <Image
            src={data.profilepic || avatar}
            alt="avatar"
            className={styles.avatar}
          />
        </div>
        <div>
          <p>{data.name}</p>
          <p>@{data.username}</p>
        </div>
      </div>
      <div className={styles.buttons} onClick={onPressEdit}>
        <button type="button">Editar Perfil</button>
      </div>
    </div>
  );
};

export default ProfileHeader;
