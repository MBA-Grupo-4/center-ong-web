import styles from "./styles.module.css";
import searchIcon from "../../../../../../assets/search-icon.svg";

const SearchField = () => {
  return (
    <div className={styles.container}>
      <img src={searchIcon} width="17" height="17" />
      <input type="text" placeholder="Pesquisar" />
    </div>
  );
};

export default SearchField;
