import styles from './garants.module.css'
import AOS from "aos";
import "aos/dist/aos.css";
export const Garant = () => {
    AOS.init();
    return (
        <section className={styles.sect}>
            <div className={styles.container}  data-aos="fade-up"> 
                <h2 className={styles.main_text_garants}>Звертаючись до нас ви отримуєте гарантію
якості та швидкості.Також ви отримуєте 
постійну тех.підтримку с приводу питань
та повний підбор параметрів які забажаєте.</h2>
            </div>
        </section>
    )
}