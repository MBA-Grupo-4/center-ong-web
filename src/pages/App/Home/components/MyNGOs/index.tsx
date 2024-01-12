import ongIcon from "../../../../../assets/ong-icon.png";
import styles from "./styles.module.css";

const MyNGOs = () => {
  return (
    <div className={styles.container}>
      <h3 className="subtitle">Minhas Ongs</h3>
      <div>
        <img src={ongIcon} alt="ong" width="40" height="40" />
        <img src={ongIcon} alt="ong" width="40" height="40" />
        <img src={ongIcon} alt="ong" width="40" height="40" />
        <img src={ongIcon} alt="ong" width="40" height="40" />
        <img src={ongIcon} alt="ong" width="40" height="40" />
        <img src={ongIcon} alt="ong" width="40" height="40" />
        <img src={ongIcon} alt="ong" width="40" height="40" />
      </div>
    </div>
  );
};

export default MyNGOs;
