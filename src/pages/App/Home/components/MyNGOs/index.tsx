import { Tooltip } from "@chakra-ui/react";
import ongIcon from "../../../../../assets/ong-icon.png";
import styles from "./styles.module.css";
import { User } from "../../../../../models/User";

type Props = {
  followedNGOS: User[] | never;
  onClickNGO: (ongId: number) => void;
};

const MyNGOs = ({ followedNGOS, onClickNGO }: Props) => {
  return (
    <div className={styles.container}>
      <h3 className="subtitle">Minhas Ongs</h3>

      <div>
        {followedNGOS ? (
          followedNGOS.map((followed) => (
            <Tooltip label={followed.name}>
              <img
                src={followed.profilepic || ongIcon}
                alt="ong"
                width="40"
                height="40"
                onClick={() => onClickNGO(followed.id)}
                className={styles.pointer}
              />
            </Tooltip>
          ))
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default MyNGOs;
