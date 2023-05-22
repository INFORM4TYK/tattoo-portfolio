import styles from "./Header.module.scss";
import Image from "next/image";
import ImgHeader from "../../public/headerImg.jpg";
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
              href="https://www.facebook.com/OlokonTattooArtStudio"
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
            <Link href="https://www.tiktok.com/@victoriu.tattoo" legacyBehavior>
              <a target="_blank">
                <Image src={Tiktok} alt="tiktok" />
              </a>
            </Link>
          </div>
          <div>
            <a href="#contact">
              <button className="button">Skontaktuj się</button>
            </a>
          </div>
        </section>
      </section>
      <section className={styles.secimage}>
        <Image src={ImgHeader} 
        alt="tattoimg" 
        priority={true} 
        height={600}
        width={600}/>
      </section>
    </header>
  );
};

export default Header;
