import styles from './plan.module.css'
import purple from '../../img/purple-line.png'
export const Plan = () => {
    return (
        <section className={styles.sect}>
            <div className={styles.container}>
<h2 className={styles.main_text}>План створення сайту</h2>

<div className={styles.wrapper}>
<div className={styles.line}>
<div className={styles.wrap_punkt}><div className={styles.circle_punkt}></div><h3 className={styles.h3_plan}>Крок 1: Вивчення потреб клієнта</h3></div>
<div className={styles.wrap_punkt}><div className={styles.circle_punkt}></div><h3 className={styles.h3_plan}>Крок 2: Планування та дизайн</h3></div>
<div className={styles.wrap_punkt}><div className={styles.circle_punkt}></div><h3 className={styles.h3_plan}>Крок 3: Розробка та програмування</h3></div>
<div className={styles.wrap_punkt}><div className={styles.circle_punkt}></div><h3 className={styles.h3_plan}>Крок 4: Додавання контенту</h3></div>
<div className={styles.wrap_punkt}><div className={styles.circle_punkt}></div><h3 className={styles.h3_plan}>Крок 5: Тестування</h3></div>
<div className={styles.wrap_punkt}><div className={styles.circle_punkt}></div><h3 className={styles.h3_plan}>Крок 6: Запуск</h3></div> 
</div>
</div>
            </div>
            <img src={purple} alt="purple-line" className={styles.purple_line} />
        </section>
    )
}