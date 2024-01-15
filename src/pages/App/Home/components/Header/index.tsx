// import React from "react";
import styles from "./styles.module.css";
import logo from "../../../../../assets/logo-header.png";
import SearchField from "./SearchField";
import User from "./User";

const Header = () => {
  return (
    <>
      <header className={styles.container}>
        <nav>
          <div>
            <img src={logo} alt="logo" className={styles.logo} />
          </div>
          <SearchField />
          <User />
        </nav>
      </header>
    </>
  );
};

export default Header;
