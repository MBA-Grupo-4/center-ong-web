import styles from "./styles.module.css";
import ongIcon from "../../../../../assets/ong-icon.png";

const NGOSugestions = () => {
  return (
    <div className={styles.container}>
      <h3 className="subtitle">Sugestões de ONGs</h3>
      <ul>
        <li>
          <div>
            <img src={ongIcon} alt="ong" width="32" height="32" />
          </div>
          <div>
            <p>Nome ONG</p>
            <span>@nomedaong</span>
          </div>
        </li>
        <li>
          <div>
            <img src={ongIcon} alt="ong" width="32" height="32" />
          </div>
          <div>
            <p>Nome ONG</p>
            <span>@nomedaong</span>
          </div>
        </li>
        <li>
          <div>
            <img src={ongIcon} alt="ong" width="32" height="32" />
          </div>
          <div>
            <p>Nome ONG</p>
            <span>@nomedaong</span>
          </div>
        </li>
        <li>
          <div>
            <img src={ongIcon} alt="ong" width="32" height="32" />
          </div>
          <div>
            <p>Nome ONG</p>
            <span>@nomedaong</span>
          </div>
        </li>
        <li>
          <div>
            <img src={ongIcon} alt="ong" width="32" height="32" />
          </div>
          <div>
            <p>Nome ONG</p>
            <span>@nomedaong</span>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default NGOSugestions;
