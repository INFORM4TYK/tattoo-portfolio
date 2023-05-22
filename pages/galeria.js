import styles from "../styles/Galeria.module.scss";
import { getArticles } from "../lib/Api";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import Button from "../components/utils/Button";
import Skeleton from "../components/utils/Skeleton";
import Modal from "../components/common/Modal";
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
  const { width, aktu } = props;
  const [visibleColumns, setVisibleColumns] = useState(1);
  const [clickedImg, setClickedImg] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);
  useEffect(() => {
    if (width > 1320) setVisibleColumns(4);
    else if (width > 940) setVisibleColumns(3);
    else if (width > 680) setVisibleColumns(2);
    else setVisibleColumns(1);
  }, [width]);

  const handleClick = (id, src) => {
    // setCurrentIndex(id);
    setClickedImg(src);
  };

  const handleRight = (e) => {
    e.stopPropagation();
    const currentIndexIndex = aktu.findIndex(
      (item) => item.sys.id === currentIndex
    );
    const totalLength = aktu.length;
    const newIndex = (currentIndexIndex + 1) % totalLength;
    const newUrl = aktu[newIndex].fields.thumbNail.fields.file.url;
    const newId = aktu[newIndex].sys.id;
    setCurrentIndex(newId);
    setClickedImg(newUrl);
  };

  const handleLeft = (e) => {
    e.stopPropagation();
    const currentIndexIndex = aktu.findIndex(
      (item) => item.sys.id === currentIndex
    );
    const totalLength = aktu.length;
    const newIndex = (currentIndexIndex - 1 + totalLength) % totalLength;
    const newUrl = aktu[newIndex].fields.thumbNail.fields.file.url;
    const newId = aktu[newIndex].sys.id;
    setCurrentIndex(newId);
    setClickedImg(newUrl);
  };
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
                  onClick={() =>
                    handleClick(id, "https:" + thumbNail.fields.file.url)
                  }
                />
              </div>
            );
          })}
          {clickedImg && (
            <Modal
              clickedImg={clickedImg}
              setClickedImg={setClickedImg}
              handleRight={handleRight}
              handleLeft={handleLeft}
            />
          )}
        </div>
      </div>
    </>
  );
}
