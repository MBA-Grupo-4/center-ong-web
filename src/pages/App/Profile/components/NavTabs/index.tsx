import { ActivePages } from "../..";
import styles from "./styles.module.css";
import ongLogo from "../../../../../assets/ong-logo.svg";
import { User } from "../../../../../models/User";
import { Tooltip } from "@chakra-ui/react";

type NavTabsProps = {
  setActivePage: React.Dispatch<React.SetStateAction<ActivePages>>;
  followingOngs: User[];
  onClickNGO: (ongId: number) => void;
};

const NavTabs = ({
  setActivePage,
  followingOngs,
  onClickNGO,
}: NavTabsProps) => {
  return (
    <nav className={styles.container}>
      <ul>
        <li role="button" onClick={() => setActivePage("about")}>
          Sobre
        </li>
        {/* <li role="button" onClick={() => setActivePage("photos")}>
          Fotos
        </li>
        <li role="button" onClick={() => setActivePage("videos")}>
          Videos
        </li>
        <li role="button" onClick={() => setActivePage("contribuitions")}>
          Contribuições
        </li> */}
      </ul>

      <div className={styles.ongs}>
        <p>Minhas ONGS</p>
        <div>
          {followingOngs.map((followed) => (
            <Tooltip label={followed.name}>
              <img
                src={ongLogo}
                alt="ong"
                width="40"
                height="40"
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
