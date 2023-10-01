import styles from "./footer.module.css";
import line from "../../img/footer-line.png";
import logo from '../../img/logo.png'
import AOS from "aos";
import inst from '../../img/instagram.png'
import gmail from '../../img/gmail.png'
import facebook from '../../img/facebook.png'



import "aos/dist/aos.css";
export const Footer = () => {
  AOS.init();
  return (
    <footer className={styles.sect}>
      <img src={line} alt="line" className={styles.line} />
      <div className={styles.container}  data-aos="fade-up">
        <ul><li className={styles.li_social}><a href="mailto:developmentmasi@gmail.com" target="blank" className={styles.link}><img src={gmail} alt="gmail" className={styles.img_link}/>GMAIL</a></li></ul>
        <ul><li className={styles.li_social}><a href="https://www.instagram.com/masiwebit/" target="blank" className={styles.link}><img src={inst} alt="instagram" className={styles.img_link}/>INSTAGRAM</a></li></ul>
        <ul><li className={styles.li_social}><a href="https://www.facebook.com/profile.php?id=61552061967135\"
        target="blank" className={styles.link}> <img src={facebook} alt="facbook" className={styles.img_link}/>FACEBOOK</a></li></ul>
      </div>
      <div className={styles.wrap_company} data-aos="fade-up"> <img src={logo} alt="logo" className={styles.img_logo}  /><h5 className={styles.h5_footer}>© 2023 MASI, Inc.</h5></div>
      <h3 className={styles.h3_love}>I love you</h3>
    </footer>
  );
};
