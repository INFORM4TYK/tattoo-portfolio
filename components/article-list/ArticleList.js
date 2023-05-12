import styles from "./Article.module.scss";
import LeftArrow from "../../images/leftarrow.svg";
import RightArrow from "../../images/rightarrow.svg";
import Image from "next/image";
import useWindowDimensions from "../../hooks/useWindowDimensions.js";
import { useState, useEffect } from "react";
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
  ];

  // const { width } = useWindowDimensions();
  const [currentVisibleArticle, setCurrentVisibleArticle] = useState(0);

  const [direction, setDirection] = useState("");
  const nextNews = (e) => {
    e.preventDefault();
    setCurrentVisibleArticle((prev) => prev + 1);
    console.log("next");
  };

  const prevNews = (e) => {
    e.preventDefault();
    setCurrentVisibleArticle((prev) => prev - 1);
    console.log("back");
  };

  return (
    <div
      className={styles.listContainer}
      currentVisibleArticle={currentVisibleArticle}
    >
      <Article news={news} />
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
