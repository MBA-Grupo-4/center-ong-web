// import React from "react";
import styles from "./styles.module.css";
import logo from "../../../../../assets/logo-header.png";
import SearchField from "./SearchField";
import style from "../../../styles.module.css";
import User from "./User";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <>
      <header className={`${styles.container} ${style.header}`}>
        <nav>
          <div onClick={() => navigate("/feed")} style={{ cursor: "pointer" }}>
            <img src={logo} alt="logo" className={styles.logo} />
          </div>
          {/* <SearchField /> */}
          <User />
        </nav>
      </header>
    </>
  );
};

export default Header;
