import { ActivePages } from "../..";
import styles from "./styles.module.css";
import ongLogo from "../../../../../assets/ong-logo.svg";

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
        <li role="button" onClick={() => setActivePage("photos")}>
          Fotos
        </li>
        <li role="button" onClick={() => setActivePage("videos")}>
          Videos
        </li>
        <li role="button" onClick={() => setActivePage("contribuitions")}>
          Contribuições
        </li>
      </ul>

      <div className={styles.ongs}>
        <p>Minhas ONGS</p>
        <div>
          <div>
            <img src={ongLogo} alt="ong" />
          </div>
          <div>
            <img src={ongLogo} alt="ong" />
          </div>
          <div>
            <img src={ongLogo} alt="ong" />
          </div>
          <div>
            <img src={ongLogo} alt="ong" />
          </div>
          <div>
            <img src={ongLogo} alt="ong" />
          </div>
        </div>
        <p>Ver todas</p>
      </div>
    </nav>
  );
};

export default NavTabs;
