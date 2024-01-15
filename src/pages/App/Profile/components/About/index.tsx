import Post from "../../../Home/components/Post";
import styles from "./styles.module.css";
import imageMock from "../../../../../assets/post-img.jpg";

const About = () => {
  return (
    <div className={styles.container}>
      <div>
        <h3>Sobre mim</h3>
        <p>
          Lorem ipsum is a pseudo-Latin text used in web design, typography,
          layout, and printing in place of English to emphasise design elements
          over content. It's also called placeholder (or filler) text. It's a
          convenient tool for mock-ups. It helps to outline the visual elements
          of a document or presentation, eg typography, font, or layout. Lorem
          ipsum is mostly a part of a Latin text by the classical author and
          philosopher Cicero. Its words and letters have been changed by
          addition or removal, so to deliberately render its content
        </p>
      </div>
      <div className={styles.posts}>
        <h3>Posts Compartilhados</h3>
        <Post>
          Lorem ipsum is a pseudo-Latin text used in web design, typography,
          layout, and printing in place of English to emphasise design elements
          over content. It's also called placeholder (or filler) text. It's a
          convenient tool for mock-ups. It helps to outline the visual elements
          of a document or presentation, eg typography, font, or layout.
        </Post>
        <Post image={imageMock}>
          Lorem ipsum dolor sit amet, agam accusamus persequeris id sea. Aeque
          eleifend eam in. Rebum placerat definitiones.
        </Post>
      </div>
    </div>
  );
};

export default About;
