import { useState } from "react";
import { MySwiper } from "./swiper";
import styles from "./work.module.css";
import cross from "../../img/cross.png";
import axios from "axios";
export const Work = () => {
  const [modal, setModal] = useState(false);
  const [name, setName] = useState(null);
  const [emailuser, setEmailUser] = useState(null);
  const [socialName, setSocialName] = useState(null);

  return (
    <section className={styles.sect}>
      <div className={styles.cont}>
        {modal && (
          <div className={styles.modal_window}>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setModal(false);
              }}
              className={styles.form_modal}
            >
              <button
                className={styles.cross}
                onClick={() => {
                  setModal(false);
                }}
              >
                <img src={cross} alt="cross" className={styles.img_cross} />
              </button>
              <label htmlFor="name" className={styles.label_name}>
                Ім'я
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Ім'я"
                  className={styles.input_name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
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
                  onChange={(e) => {
                    setEmailUser(e.target.value);
                  }}
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
                  onChange={(e) => {
                    setSocialName(e.target.value);
                  }}
                />
              </label>
              <p className={styles.text_call}>
                Після відправки заявки,протягом двох днів з вами зв'яжуться для
                подальшої співпраці
              </p>
              <button
                type="submit"
                className={styles.button_send}
                onClick={() => {
                  axios.post(
                    "https://6501abed736d26322f5c1aaa.mockapi.io/orders/application",
                    { name: name, email: emailuser, social: socialName }
                  );
                }}
              >
                Відправити
              </button>
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
