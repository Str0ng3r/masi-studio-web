import { useState } from "react";
import { MySwiper } from "./swiper";
import styles from "./work.module.css";
import cross from '../../img/cross.png'
export const Work = () => {
  const [modal, setModal] = useState(false);
  return (
    <section className={styles.sect}>
      <div className={styles.cont}>
        {modal && (
          <div className={styles.modal_window}>
            <form action="" className={styles.form_modal}>
                <button className={styles.cross} onClick={()=> {setModal(false)}}><img src={cross} alt="cross"  className={styles.img_cross}/></button>
              <label htmlFor="name" className={styles.label_name}>
                Ім'я
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Ім'я"
                  className={styles.input_name}
                />
              </label>

              <label htmlFor="email" className={styles.label_email}>
                Email для зв'язку
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="namelastname@gmail.com"
                  className={styles.input_email}
                />
              </label>
              <label htmlFor="social" className={styles.label_social}>
                Напишіть будь-яку свою соц.мережу
                <input
                  type="text"
                  name="social"
                  id="social"
                  placeholder="@named"
                  className={styles.input_social}
                />
              </label>
              <p className={styles.text_call}>Після відправки заявки,протягом двох днів з вами зв'яжуться для подальшої співпраці</p>
              <button type="sumbit" className={styles.button_send}>Відправити</button>

            </form>
          </div>
        )}

        <MySwiper></MySwiper>
        <button className={styles.button} onClick={() => setModal(true)}>
          <span className={styles.button_content}>Замовити сайт</span>
        </button>
      </div>
    </section>
  );
};
