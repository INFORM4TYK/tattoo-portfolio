import React from 'react'
import styles from "./Article.module.scss";
export const Article = ({news,currentVisibleArticle}) => {
  return (
    <div className={styles.listBoxes} style={{
      
      '@media screen (min-width: 940px)': {
        transform: `translateX(calc(${currentVisibleArticle} / 3 * -100%))`
      },
      '@media screen (min-width: 680px)': {
        transform: `translateX(calc(${currentVisibleArticle} / 2 * -100%))`
      },
      '@media screen (min-width: 1320px)': {
        transform: `translateX(calc(${currentVisibleArticle} / 4 * -100%))`
      },
      transform: `translateX(calc(${currentVisibleArticle} / 1 * -100%))`
    }}>

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
