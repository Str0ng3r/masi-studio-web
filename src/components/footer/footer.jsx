import styles from "./footer.module.css";
import line from "../../img/footer-line.png";
import logo from '../../img/logo.png'
import AOS from "aos";
import "aos/dist/aos.css";
export const Footer = () => {
  AOS.init();
  return (
    <footer className={styles.sect}>
      <img src={line} alt="line" className={styles.line} />
      <div className={styles.container}  data-aos="fade-up">
        <ul><li><a href="#654645">LINK</a></li></ul>
        <ul><li><a href="#654645">LINK</a></li></ul>
        <ul><li><a href="#654645">LINK</a></li></ul>
      </div>
      <div className={styles.wrap_company} data-aos="fade-up"> <img src={logo} alt="logo" className={styles.img_logo}  /><h5 className={styles.h5_footer}>© 2023 MASI, Inc.</h5></div>
      <h3 className={styles.h3_love}>I love you</h3>
    </footer>
  );
};
