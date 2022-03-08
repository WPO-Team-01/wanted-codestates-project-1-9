import styles from "../../pages/ReviewDetail/ReviewDetail.module.scss";
import more from "../../images/more.png";
import siren from "../../images/siren.png";
import thumb from "../../images/like_hand.png";
import share from "../../images/share.png";
import heart from "../../images/heart_normal.png";
import star from "../../images/star_black.png";
import url from "../../images/share_url.png";
import { useState } from "react";

const ReviewContent = ({ data }) => {
  const [reportModalOpen, setReportModalOpen] = useState(false);
  const [urlModalOpen, setUrlModalOpen] = useState(false);
  return (
    <div className={styles.content}>
      <div>
        <div className={styles.contentHeader}>
          <span className={styles.contentTitle}>{data.nickname}</span>
          <span>{data.regdt.slice(0, 10)}</span>
          <div className={styles.reportWrapper}>
            <img
              src={more}
              alt="more icon"
              className={styles.more}
              onClick={() => {
                setReportModalOpen(!reportModalOpen);
              }}
            />
            {reportModalOpen ? (
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
          <img src={data.img[0]} alt="" className={styles.img} />
          {/* <div className={styles.img}></div> */}
        </div>
        {/* function bar */}
        <div className={styles.contentHeader}>
          <div className={styles.thumbWrapper}>
            <img src={thumb} className={styles.thumbIcon} alt="thumb icon" />
            {data.like}
          </div>
          <img
            src={share}
            className={styles.shareIcon}
            onClick={() => {
              setUrlModalOpen(!urlModalOpen);
            }}
            alt="share icon"
          />
          <img src={heart} className={styles.heartIcon} alt="heart icon" />
        </div>
        {/* review */}
        <div className={styles.contentComment}>
          <img src={star} className={styles.starIcon} alt="star icon" />
          <p>{data.contents}</p>
        </div>
      </div>

      {urlModalOpen ? (
        <div
          className={styles.linkWrapper}
          onClick={() => {
            setUrlModalOpen(!urlModalOpen);
          }}
        >
          <img src={url} className={styles.urlIcon} alt="url icon" />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default ReviewContent;
