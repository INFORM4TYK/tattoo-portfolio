import styles from "./Article.module.scss";
import LeftArrow from "../../images/leftarrow.svg";
import RightArrow from "../../images/rightarrow.svg";
import Image from "next/image";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import { useEffect, useState } from "react";
import { Article } from "./Article";

const ArticleList = () => {
  const news = [
    {
      title: "Akt1",
      body: "Blah Blah Blah",
      topic: "Flower",
    },
    {
      title: "Akt2",
      body: "Blah Blah Blah",
      topic: "Flower",
    },
    {
      title: "Akt3",
      body: "Blah Blah Blah",
      topic: "Flower",
    },
    {
      title: "Akt4",
      body: "Blah Blah Blah",
      topic: "Flower",
    },
    {
      title: "Akt5",
      body: "Blah Blah Blah",
      topic: "Flower",
    },
    {
      title: "Akt6",
      body: "Blah Blah Blah",
      topic: "Flower",
    },
    {
      title: "Akt7",
      body: "Blah Blah Blah",
      topic: "Flower",
    },
    {
      title: "Akt8",
      body: "Blah Blah Blah",
      topic: "Flower",
    },
    {
      title: "Akt9",
      body: "Blah Blah Blah",
      topic: "Flower",
    },
    {
      title: "Akt10",
      body: "Blah Blah Blah",
      topic: "Flower",
    },
    {
      title: "Akt10",
      body: "Blah Blah Blah",
      topic: "Flower",
    },
  ];
  const { width } = useWindowDimensions();
  const [currentVisibleArticle, setCurrentVisibleArticle] = useState(0);
  useEffect(() => {
    setCurrentVisibleArticle(0);
  }, [width]);
  const nextNews = (e) => {
    e.preventDefault();
    if(currentVisibleArticle === news.length - (
      (width > 1320) ? 9 :
      (width <= 1320 && width > 940) ? 8 :
      (width <= 940 && width > 680) ? 6 :
      (width <= 680) ? 1 :
      0
    )){
      return null;
    }

    setCurrentVisibleArticle(prev => prev + 1);
    console.log("next");
  };

  const prevNews = (e) => {
    e.preventDefault();
    setCurrentVisibleArticle(prev => prev - 1);
    console.log("back");
  };

  return (
    <div
      className={styles.listContainer}
      currentVisibleArticle={currentVisibleArticle}
    >
      <Article news={news} currentVisibleArticle={currentVisibleArticle}/>
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
    </div>
  );
};

export default ArticleList;
