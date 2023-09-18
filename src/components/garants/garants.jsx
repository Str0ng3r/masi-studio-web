import styles from './garants.module.css'
export const Garant = () => {
    return (
        <section className={styles.sect}>
            <div className={styles.container}> 
                <h2 className={styles.main_text_garants}>Звертаючись до нас ви отримуєте гарантію
якості та швидкості.Також ви отримуєте 
постійну тех.підтримку с приводу питань
та повний підбор параметрів які забажаєте.</h2>
            </div>
        </section>
    )
}