import { ActivePages } from "../..";
import styles from "./styles.module.css";
import ongLogo from "../../../../../assets/ong-logo.svg";
import { User } from "../../../../../models/User";
import { Tooltip } from "@chakra-ui/react";
import { authRepository } from "../../../../../repositories/auth.repository";

type NavTabsProps = {
  setActivePage: React.Dispatch<React.SetStateAction<ActivePages>>;
  followingOngs: User[];
  onClickNGO: (ongId: number) => void;
  onClickPostRender: (type: "shared" | "created") => void;
};

const NavTabs = ({
  setActivePage,
  followingOngs,
  onClickNGO,
  onClickPostRender,
}: NavTabsProps) => {
  const user = authRepository.getLoggedUser();

  return (
    <nav className={styles.container}>
      <ul>
        <li role="button" onClick={() => setActivePage("about")}>
          Sobre
        </li>
        <li role="button" onClick={() => onClickPostRender("shared")}>
          Posts Compartilhados
        </li>
        {user?.isOng ? (
          <li role="button" onClick={() => onClickPostRender("created")}>
            Posts Criados
          </li>
        ) : (
          <></>
        )}
      </ul>

      <div className={styles.ongs}>
        <p>Minhas ONGS</p>
        <div>
          {followingOngs.map((followed) => (
            <Tooltip label={followed.name}>
              <img
                src={followed.profilepic || ongLogo}
                alt="ong"
                width="40"
                height="40"
                className={styles.followedOng}
                onClick={() => onClickNGO(followed.id)}
              />
            </Tooltip>
          ))}
        </div>
        {/* <p>Ver todas</p> */}
      </div>
    </nav>
  );
};

export default NavTabs;
