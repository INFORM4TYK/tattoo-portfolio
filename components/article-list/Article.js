import React from 'react'
import styles from "./Article.module.scss";
import { useEffect,useState } from 'react';
export const Article = ({news}) => {
  return (
    <div className={styles.listBoxes}>

          {news.map(({title,body,topic}) =>{
            return <div key={title} className={styles.box} >
              <h3>{title}</h3>
              <p>{body}</p>
              <p>{topic}</p>
            </div>
          })}
      </div>
  )
}
