import styles from "../../pages/ReviewDetail/ReviewDetail.module.scss";
import more from "../../images/more.png";
import siren from "../../images/siren.png";
import thumb from "../../images/like_hand.png";
import share from "../../images/share.png";
import heart from "../../images/heart_normal.png";
import star from "../../images/star_black.png";
import { useState } from "react";

const ReviewContent = () => {
  const [modalOpen, setModalOpen] = useState(false);
  console.log(setModalOpen, modalOpen);
  return (
    <>
      <div className={styles.contentHeader}>
        <span className={styles.contentTitle}>title</span>
        <span>2022-03-07</span>
        <div className={styles.reportWrapper}>
          <img
            src={more}
            alt="more icon"
            className={styles.more}
            onClick={() => {
              setModalOpen(!modalOpen);
            }}
          />
          {modalOpen ? (
            <div className={styles.reportModal}>
              <img src={siren} alt="siren icon" className={styles.siren} />
              <span>신고하기</span>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>

      {/* img */}
      <div>
        {/* <img src="" alt="" /> */}
        <div className={styles.img}></div>
      </div>
      {/* function bar */}
      <div className={styles.contentHeader}>
        <div className={styles.thumbWrapper}>
          <img src={thumb} className={styles.thumbIcon} alt="thumb icon" />
          38
        </div>
        <img src={share} className={styles.shareIcon} alt="share icon" />
        <img src={heart} className={styles.heartIcon} alt="heart icon" />
      </div>
      {/* review */}
      <div className={styles.contentComment}>
        <img src={star} className={styles.starIcon} alt="star icon" />
        <p>
          일단 배송도 생각보다 빠르고 상태도 좋네요 다만 모양이 기존에
          가지고있는거랑 조금 달라서 정품 감정 맡겨볼려구요~
        </p>
      </div>
    </>
  );
};

export default ReviewContent;
