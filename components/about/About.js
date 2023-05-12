import styles from "./About.module.scss";
import ImgWomen from "../../images/women.png";
import Image from "next/image";
const About = () => {
  return (
    <section className={styles.mainSec}>
      <article className={styles.mainContent}>
        <h2>O mnie</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo voluptatem qui consequuntur hic?</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor, similique. Fugit, optio illum.</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque, officiis incidunt. Dolor, eveniet?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam labore doloremque culpa eius?</p>
      </article>
      <article className={styles.secImage}>
        <Image src={ImgWomen} alt="tattoimg" />
      </article>
    </section>
  );
};
export default About;
