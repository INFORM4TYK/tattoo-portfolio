import React, { useEffect, useState } from "react";
import styles from "./Article.module.scss";
import Link from "next/link";
export const Article = (props) => {
  const { currentVisibleArticle, width, aktu } = props;
  const [visibleColumns, setVisibleColumns] = useState(1);
  useEffect(() => {
    if (width > 1320) setVisibleColumns(4);
    else if (width > 940) setVisibleColumns(3);
    else if (width > 680) setVisibleColumns(2);
    else setVisibleColumns(1);
  }, [width]);

  return (
    <div className={styles.border}>
      <h1>Moje Prace</h1>
      <div
        className={styles.listBoxes}
        style={{
          transform: `translateX(calc(${currentVisibleArticle} / ${visibleColumns} * -100%))`,
        }}
      >
        {aktu.map((item) => {
          const { title, topic } = item.fields;
          const { id } = item.sys;
          return (
            <div key={id} className={styles.box}>
              <h3>{title}</h3>
              <p>{topic}</p>
            </div>
          );
        })}
      </div>
      <Link href="galeria">
        <button className="button">Zobacz Galerie</button>
      </Link>
    </div>
  );
};
