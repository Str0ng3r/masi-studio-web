import styles from "./main.module.css";
import finger from "../../img/рпарап.png";

export const Main = () => {
  return (
    <section className={styles.sectionMain}>
      <div className={styles.wrapContainer}>
        <img src={finger} alt="finger-front" className={styles.imgFinger} />
        <h1 className={styles.mainText}>
          Сайт для вашого <br />
          бізнесу,продукції <br />
          чи компанії.
        </h1>
      </div>
    </section>
  );
};
