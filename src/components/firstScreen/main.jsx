import styles from "./main.module.css";
import finger from "../../img/рпарап.png";
import AOS from "aos";
import "aos/dist/aos.css";
export const Main = () => {
  AOS.init();
  return (
    <section className={styles.sectionMain}>
      <div className={styles.wrapContainer}  data-aos="fade-up">
        <img src={finger} alt="finger-front" className={styles.imgFinger}   />
        <h1 className={styles.mainText}  >
          Сайт для вашого <br />
          бізнесу,продукції <br />
          чи компанії.
        </h1>
      </div>
    </section>
  );
};
