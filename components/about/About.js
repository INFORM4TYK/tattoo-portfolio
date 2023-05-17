import styles from "./About.module.scss";
import ImgWomen from "../../images/women.png";
import Image from "next/image";
import Link from "next/link";
const About = () => {
  return (
    <section className={styles.mainSec}>
      <article className={styles.mainContent}>
        <h2>O mnie</h2>
        <p>
          Cześć, jestem Wiktoria i jestem tatuażystką specjalizującą się w
          lekkich motywach tatuażu. Moja pasja do sztuki zaczęła się już we
          wczesnym dzieciństwie i z czasem przerodziła się w miłość do tatuażu.
        </p>
        <p>
          Jako tatuażystka, moim celem jest stworzenie wyjątkowego i
          oryginalnego motywu, który będzie oddawał indywidualność mojego
          klienta. W swojej pracy stawiam na precyzję i dbam o każdy szczegół,
          aby uzyskać najlepszy efekt końcowy. Moje projekty są zwykle subtelne,
          delikatne i mają prostą formę, ale jednocześnie mają znaczenie dla
          moich klientów. Często inspiruję się naturą, a moje projekty zawierają
          motywy roślinne, zwierzęce lub geometryczne.
        </p>
        <p>
          Zapraszam Cię do zapoznania się z moim portfolio i do odkrycia mojego
          stylu i podejścia do tatuażu. Cieszę się na myśl, że będę mógł
          stworzyć dla Ciebie wyjątkowy motyw, który będziesz zawsze nosić ze
          sobą z dumą i radością.
        </p>
      <Link href="galeria">
        <button className="button">Zobacz Galerie</button>
      </Link>
      </article>
      <article className={styles.secImage}>
        <Image src={ImgWomen} alt="tattoimg" />
      </article>
    </section>
  );
};
export default About;
