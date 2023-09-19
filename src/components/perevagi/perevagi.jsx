import styles from "./perevagi.module.css";
import clock from "../../img/CLOCK.png";
import planet from "../../img/Edge_Deployment_V3_Edit_IW59NHEbvz-IXMoQBPJXi.png.png";
import laptop from "../../img/LAPTOP 1.png";
import AOS from "aos";
import line from "../../img/footer-line.png";
import "aos/dist/aos.css";
export const Perevaga = () => {
  AOS.init();
  return (
    <section initial="hidden" whileInView="visible" className={styles.sect}>
      <div className={styles.cont}>
        <h2 className={styles.h2_perevagi}  data-aos="fade-up">
          Сайт є невід'ємною складовою сучасного бізнесу, і його наявність
          важлива з кількох ключових причин:
        </h2>
        <div className={styles.cont_wrap}>
          <div className={styles.mini_wrap}>
            <div className={styles.text_wrap_left}>
              <h3 className={styles.h3_perevagi}  data-aos="fade-right">Онлайн присутність</h3>
              <h4 className={styles.h4_perevagi}  data-aos="fade-right">
                В добу цифрового прогресу більшість <br />
                клієнтів використовує Інтернет для пошуку <br />
                товарів та послуг. <br /> <br /> Якщо ваша компанія не має
                власного сайту, <br />
                ви втрачаєте велику аудиторію потенційних клієнтів.
              </h4>
            </div>

            <img src={laptop} alt="laptop"  data-aos="fade-left"/>
          </div>
          <div className={styles.mini_wrap}>
            <img src={clock} alt="clock"  data-aos="fade-right"/>

            <div className={styles.text_wrap_right}>
              <h3 className={styles.h3_perevagi}  data-aos="fade-left">Доступність 24/7</h3>
              <h4 className={styles.right_text}  data-aos="fade-left">
                Сайт працює цілодобово, що дозволяє клієнтам <br /> ознайомитися
                з продуктами чи послугами у будь-який час. Це особливо важливо
                для бізнесів <br /> оскільки вам не потрібно цілий день сидіти
                на <br /> телефоні щоб розказати про свій продукт.
              </h4>
            </div>
          </div>
          <div className={styles.mini_wrap}>
            <div className={styles.text_wrap_left}>
              <h3 className={styles.h3_perevagi}  data-aos="fade-right">Глобальний ринок</h3>
              <h4 className={styles.h4_perevagi}  data-aos="fade-right">
                Інтернет дозволяє долати географічні межі Ваш сайт може бути
                доступний для користувачів з усього світу, що розширює вашу
                потенційну впізнаваність.
              </h4>
            </div>
            <img src={planet} alt="planet"   data-aos="fade-left"/>
          </div>
          <div className={styles.mini_wrap}>
            <div className={styles.row_cont_text}>
              <div className={styles.cont_for_double_text} data-aos="fade-right">
                <h4 className={styles.span_text}>
                  Прощавай папір та 2д картинки
                </h4>
                <h5 className={styles.h5_perevagi}>
                  Скажи бувай негарним візиткам тоннам тексту та не гарним 2д
                  картинкам.З сайтом ваші клієнти зможуть с задоволенням
                  дізнаватись про ваш товар,ціну та умови.
                </h5>
              </div>
              <div className={styles.cont_for_double_text} data-aos="fade-up">
                <h4 className={styles.span_text}>Персональний стиль</h4>
                <h5 className={styles.h5_perevagi}>
                  Ваш бренд,продукція або початковий бізнес заграють новими
                  кольрами. Ви отримаєте свій власний кольор та картинку яку
                  користувач запам’ятає надовго...
                </h5>
              </div>
              <div className={styles.cont_for_double_text}  data-aos="fade-left">
                <h4 className={styles.span_text}>Зрозумілість</h4>
                <h5 className={styles.h5_perevagi}>
                  Завдяки гарним фото якісно побудованому дизайну та
                  правильності формування сайту. Ваш продукт або послугу будет
                  набагато легше зрозуміти.
                </h5>
              </div>
            </div>
          </div>
        </div>
        <img src={line} alt="line" className={styles.img_footer} />
      </div>
    </section>
  );
};
