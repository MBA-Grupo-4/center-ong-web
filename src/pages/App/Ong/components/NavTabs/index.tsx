import { ActivePages } from "../..";
import styles from "./styles.module.css";

type NavTabsProps = {
  setActivePage: React.Dispatch<React.SetStateAction<ActivePages>>;
};

const NavTabs = ({ setActivePage }: NavTabsProps) => {
  return (
    <nav className={styles.container}>
      <ul>
        <li role="button" onClick={() => setActivePage("about")}>
          Sobre
        </li>
        <li role="button" onClick={() => setActivePage("goals")}>
          Metas
        </li>
        <li role="button" onClick={() => setActivePage("publications")}>
          Publicações
        </li>
        <li role="button" onClick={() => setActivePage("photos")}>
          Fotos
        </li>
        <li role="button" onClick={() => setActivePage("videos")}>
          Vídeos
        </li>
      </ul>
    </nav>
  );
};

export default NavTabs;
