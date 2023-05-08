import styles from "./About.module.scss";
import ImgWomen from "../../images/women.png";
import Image from "next/image";
const About = () => {
  return (
    <section className={styles.mainSec}>
      <article className={styles.mainContent}>
        <h2>O mnie</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium
          labore nam, veniam, recusandae sapiente ipsam fugit voluptate
          excepturi reiciendis itaque minima beatae ab dignissimos, id accusamus
          doloribus. Laudantium quasi assumenda similique aliquam tenetur at,
          dolore ratione tempora, commodi repellat fugit quidem! Illo cum
          perferendis quidem officia. Nulla, itaque temporibus. Nisi,
          perspiciatis praesentium, vero aspernatur nulla asperiores molestiae
          ipsam dolorum quisquam et dicta quasi delectus, hic doloremque aliquam
          tenetur qui sunt iure! Nostrum officia repellat consequatur hic non
          dolore minus tenetur necessitatibus, dolores minima aspernatur nisi
          autem dignissimos recusandae dolor mollitia, maxime culpa animi
          distinctio voluptatibus neque quis accusantium adipisci? Molestias.
        </p>
      </article>
      <article className={styles.secImage}>
        <Image src={ImgWomen} alt="tattoimg" />
      </article>
    </section>
  );
};
export default About;
