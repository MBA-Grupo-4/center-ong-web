import Header from "../Home/components/Header";
import profileCover from "../../../assets/profile-cover.jpg";
import styles from "./styles.module.css";
import ProfileHeader from "./components/ProfileHeader";
import NavTabs from "./components/NavTabs";
import React from "react";
import About from "./components/About";

export type ActivePages = "about" | "contribuitions" | "photos" | "videos";

const Profile = () => {
  const [activePage, setActivePage] = React.useState<ActivePages>("about");

  return (
    <div className={styles.page}>
      <Header />
      <div className={styles.cover}>
        <img src={profileCover} alt="cover" />
      </div>
      <div className={styles.container}>
        <ProfileHeader />
        <NavTabs setActivePage={setActivePage} />
        {activePage === "about" && <About />}
      </div>
    </div>
  );
};

export default Profile;
