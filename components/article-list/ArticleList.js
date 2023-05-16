import styles from "./Article.module.scss";
import LeftArrow from "../../images/leftarrow.svg";
import RightArrow from "../../images/rightarrow.svg";
import Image from "next/image";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import { useEffect, useState } from "react";
import { Article } from "./Article";

const ArticleList = ({ aktu }) => {
  const { width } = useWindowDimensions();
  const [currentVisibleArticle, setCurrentVisibleArticle] = useState(0);
  useEffect(() => {
    setCurrentVisibleArticle(0);
  }, [width]);
  const nextNews = (e) => {
    e.preventDefault();
    if (
      currentVisibleArticle ===
      aktu.length -
        (width > 1320
          ? 4
          : width <= 1320 && width > 940
          ? 3
          : width <= 940 && width > 680
          ? 2
          : width <= 680
          ? 1
          : 0)
    ) {
      return null;
    }
    setCurrentVisibleArticle((prev) => prev + 1);
  };

  const prevNews = (e) => {
    e.preventDefault();
    if (currentVisibleArticle === 0) {
      return null;
    }
    setCurrentVisibleArticle((prev) => prev - 1);
  };

  return (
    <article
      className={styles.listContainer}
      currentVisibleArticle={currentVisibleArticle}
    >
      <Article
       aktu={aktu}
        currentVisibleArticle={currentVisibleArticle}
        width={width}
        className={styles.box}
      />
      <Image
        src={LeftArrow}
        className={styles.leftArrow}
        onClick={nextNews}
        alt="leftArrow"
      />
      <Image
        src={RightArrow}
        className={styles.rightArrow}
        onClick={prevNews}
        alt="rightArrow"
      />
    </article>
  );
};

export default ArticleList;
