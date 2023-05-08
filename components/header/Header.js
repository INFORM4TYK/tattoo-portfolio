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
            <Link href="#">
              <Image src={Facebook} alt="facebook" />
            </Link>
            <Link href="#">
              <Image src={Instagram} alt="instagram" />
            </Link>
            <Link href="#">
              <Image src={Tiktok} alt="tiktok" />
            </Link>
          </div>
          <div>
            <button>Skontaktuj się</button>
          </div>
        </section>
      </section>
      <section className={styles.secimage}>
      

        <Image src={ImgHeader} alt="tattoimg" />
       
      </section>
    </header>
  );
};

export default Header;
