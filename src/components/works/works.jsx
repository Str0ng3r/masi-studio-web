import { MySwiper } from './swiper'
import styles from './work.module.css'


export const Work = () => {
    return (
        <section className={styles.sect}>
           <div className={styles.cont}>
            <MySwiper></MySwiper>
            </div> 
        </section>
    )
}