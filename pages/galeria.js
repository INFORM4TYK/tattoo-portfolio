import styles from "../styles/Galeria.module.scss";
import CustomHelmet from "../components/CustomHelmet";
import { getArticles } from "../lib/Api";

export async function getStaticProps() {
  const aktu = await getArticles();
  return {
    props: {
      aktu,
    },
    revalidate: 1,
  };
}

export default function Galeria({ aktu }) {
  return (
    <div className={styles.container}>
      <CustomHelmet Customtitle="Galeria" />
      {aktu.map((item) => {
        const { title, topic } = item.fields;
        return (
          <div key={item.sys.id} className={styles.boxes}>
            <h3>{title}</h3>
            <p>{topic}</p>
          </div>
        );
      })}
    </div>
  );
}
