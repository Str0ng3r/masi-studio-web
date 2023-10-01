import styles from "./header.module.css";
import logo from '../../img/logo.png'
export const Header = () => {
  return (
      <header className={styles.header}>
<img src={logo} alt="logotip" className={styles.img_logo}/>
<h2 className={styles.main_name}>asi</h2>
      </header>   
  );
}