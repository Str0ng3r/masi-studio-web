import styles from "./header.module.css";

export const Header = () => {
  return (
      <header className={styles.header}>
        <div className={styles.header_menu}>
           <button className={styles.menu_btn}>
           {/* Меню<MenuOutline className={styles.menuOutlineIcon} color={"#00000"} /> */}
           </button>
        </div>
        <div className={styles.header_logo}>Masi</div>
        <div className={styles.header_null}></div>
      </header>   
  );
}