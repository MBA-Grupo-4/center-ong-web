import Header from "../Home/components/Header";
import ongCover from "../../../assets/ong-cover.jpg";
import styles from "./styles.module.css";
import OngHeader from "./components/OngHeader";
import NavTabs from "./components/NavTabs";
import React from "react";
import About from "./components/About";

export type ActivePages = "about" | "goals" | "publications" | "photos" | "videos";

const Ong = () => {
  const [activePage, setActivePage] = React.useState<ActivePages>("about");

  return (
    <div className={styles.page}>
      <Header />
      <div className={styles.cover}>
        <img src={ongCover} alt="cover" />
      </div>
      <div className={styles.container}>
        <OngHeader />
        <NavTabs setActivePage={setActivePage} />
        {activePage === "about" && <About />}
      </div>
    </div>
  );
};

export default Ong;
