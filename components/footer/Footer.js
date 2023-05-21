import styles from "./Footer.module.scss";
import Link from "next/link";
function Footer() {
  return (
    <footer className={styles.footer}>
      <p>Copyright &copy; 2023 Wiktoria Woźnicka</p>
      <p>
        <Link href="/rodo">Rodo</Link>
      </p>
    </footer>
  );
}

export default Footer;
