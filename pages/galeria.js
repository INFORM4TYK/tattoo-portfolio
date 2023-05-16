import styles from "../styles/Galeria.module.scss";
import { getArticles } from "../lib/Api";
import Head from "next/head";
import Image from "next/image";
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
    <>
      <Head>
        <title>Galeria</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className={styles.container}>
        {aktu.map((item) => {
          const { title, topic,date,thumbNail } = item.fields;
          const { id } = item.sys;
          return (
            <div key={id} className="box">
              <Image 
              src={'https:' + thumbNail.fields.file.url}
              width={thumbNail.fields.file.details.image.width}
              height={thumbNail.fields.file.details.image.height}
              alt={topic}
              />
              {/* <h2>Motyw: {title}</h2>
              <p>{date}</p> */}
            </div>
          );
        })}
      </div>
    </>
  );
}
