import styles from "../styles/Galeria.module.scss";
import { news } from "../components/article-list/ArticleList";
import CustomHelmet from "../components/CustomHelmet";
export default function Galeria() {
  return (
    <div className={styles.container}>
      <CustomHelmet Customtitle='Galeria' />
      {news.map(({ title, body, topic }) => {
        return (
          <div key={title} className={styles.boxes}>
            <h3>{title}</h3>
            <p>{body}</p>
            <p>{topic}</p>
          </div>
        );
      })}
    </div>
  );
}
