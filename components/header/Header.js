import styles from "./Header.module.scss";
import Image from "next/image";
import ImgHeader from "../../images/header.jpg";
import Facebook from "../../images/facebook.svg";
import Instagram from "../../images/instagram.svg";
import Tiktok from "../../images/tiktok.svg";
import Link from "next/link";
const Header = () => {
  return (
    <header className={styles.header}>
      <section className={styles.secmain}>
        <div className={styles.mainText}>
          <p>VICTORIUU</p>
          <p>TATTOO</p>
        </div>
        <section className={styles.secContact}>
          <div>
            <Link
              href="https://www.facebook.com/wiktoria.woznicka.52"
              target="_blank"
            >
              <Image src={Facebook} alt="facebook" />
            </Link>
            <Link
              href="https://www.instagram.com/victoriu.tattoo/"
              target="_blank"
            >
              <Image src={Instagram} alt="instagram" />
            </Link>
            <Link href="#" legacyBehavior>
              <a>
                <Image src={Tiktok} alt="tiktok" />
              </a>
            </Link>
          </div>
          <div>
            <button><a href="#contact">Skontaktuj się</a></button>
          </div>
        </section>
      </section>
      <section className={styles.secimage}>
        <Image src={ImgHeader} alt="tattoimg" priority={true} />
      </section>
    </header>
  );
};

export default Header;
