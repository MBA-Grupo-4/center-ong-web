import Header from "./components/Header";
import MyNGOs from "./components/MyNGOs";
import NGOSugestions from "./components/NGOSugestions";
import Post from "./components/Post";
import SideNav from "./components/SideNav";
import styles from "./styles.module.css";
import imageMock from "../../../assets/post-img.jpg";
import { getFeed } from "../../../services/Feed";
import { getLoggedUser } from "../../../services/User";
import { useEffect, useState } from "react";
import { BasePost } from "../../../models/Feed";

const Home = () => {
  const user = getLoggedUser();
  const [userposts,setUserPosts] = useState<BasePost[]>([])
  const handleLoadFeed = async (): Promise<void> => {
    try {
      const response = await getFeed(user?.id);
    } catch (err) {
      console.log("load feed error", err);
    }
  };

  useEffect(() => {
    handleLoadFeed();
  }, []);

  return (
    <div>
      <Header />
      <main className={styles.main}>
        <aside>
          <SideNav />
          <MyNGOs />
        </aside>
        <section className={styles.feed}>
          <h3 className="subtitle">Feed</h3>
          <Post image={imageMock}>
            Lorem ipsum dolor sit amet, agam accusamus persequeris id sea. Aeque
            eleifend eam in. Rebum placerat definitiones.
          </Post>
          <Post>
            Lorem ipsum is a pseudo-Latin text used in web design, typography,
            layout, and printing in place of English to emphasise design
            elements over content. It's also called placeholder (or filler)
            text. It's a convenient tool for mock-ups. It helps to outline the
            visual elements of a document or presentation, eg typography, font,
            or layout. Lorem ipsum is mostly a part of a Latin text by the
            classical author and philosopher Cicero. Its words and letters have
            been changed by addition or removal, so to deliberately render its
            content nonsensical; it's not genuine, correct, or comprehensible
            Latin anymore. While lorem ipsum's still resembles classical Latin,
            it actually has no meaning whatsoever. As Cicero's text doesn't
            contain the letters K, W, or Z, alien to latin, these, and others
            are often inserted randomly to mimic the typographic appearence of
            European languages, as are digraphs not to be found in the original.
          </Post>
        </section>
        <aside>
          <NGOSugestions />
        </aside>
      </main>
    </div>
  );
};

export default Home;
