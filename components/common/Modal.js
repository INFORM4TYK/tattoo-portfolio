import styles from "./Modal.module.scss";
import Image from "next/image";
import LeftArrow from "../../images/leftarrow.svg";
import RightArrow from "../../images/rightarrow.svg";
const Modal = (props) => {
  const { clickedImg, currentIndex, setClickedImg, handleRight, handleLeft } =
    props;
  const handleClick = () => {
    setClickedImg(null);
  };
  return (
    <>
      <div className={styles.overlay} onClick={handleClick}>
        <img src={clickedImg} alt={currentIndex} width={750} height={750} loading="lazy" />
        <span onClick={handleClick}>X</span>
        <div onClick={handleRight} className={styles.overlayarrows_left}>
          <Image src={LeftArrow} alt="rightArrow" />
        </div>
        <div onClick={handleLeft} className={styles.overlayarrows_right}>
          <Image src={RightArrow} alt="leftArrow" />
        </div>
      </div>
    </>
  );
};
export default Modal;
