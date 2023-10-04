import styles from "./Navbar.module.scss";
import apps from "../../assets/nav.svg";
import user from "../../assets/user.jpg";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbar__container}>
        <li className={styles.navbar__item}>
          <a className={styles.navbar__link} href="/">
            Gmail
          </a>
        </li>
        <li className={styles.navbar__item}>
          <a className={styles.navbar__link} href="/">
            Imagens
          </a>
        </li>
        <li className={styles.navbar__item}>
          <img src={apps} alt="apps" />
        </li>
        <li className={styles.navbar__item}>
          <img className={styles.user} src={user} alt="user" />
        </li>
      </ul>
    </nav>
  );
}
