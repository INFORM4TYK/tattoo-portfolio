import styles from "../styles/Galeria.module.scss";
import { getArticles } from "../lib/Api";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import Button from "../components/utils/Button";
import Skeleton from "../components/utils/Skeleton";
export async function getStaticProps() {
  const aktu = await getArticles();
  return {
    props: {
      aktu,
    },
    revalidate: 1,
  };
}

export default function Galeria(props) {
  const { currentVisibleArticle, width, aktu } = props;
  const [visibleColumns, setVisibleColumns] = useState(1);
  useEffect(() => {
    if (width > 1320) setVisibleColumns(4);
    else if (width > 940) setVisibleColumns(3);
    else if (width > 680) setVisibleColumns(2);
    else setVisibleColumns(1);
  }, [width]);

  if (!aktu) return <Skeleton />;

  return (
    <>
      <Head>
        <title>Galeria</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <div className={styles.bg}>
        <div>
          <Link href="/" className={`${styles.button}`}>
            <Button />
          </Link>
        </div>
        <div className={styles.container}>
          {aktu.map((item) => {
            const { topic, thumbNail } = item.fields;
            const { id } = item.sys;
            return (
              <div key={id} className="box">
                <Image
                  src={"https:" + thumbNail.fields.file.url}
                  width={500}
                  height={500}
                  alt={topic}
                  priority={true}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
