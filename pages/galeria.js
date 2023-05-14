import styles from "../styles/Galeria.module.scss";
import { news } from "../components/article-list/ArticleList";
export default function Galeria() {
  return (
    <div className={styles.container}>
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
