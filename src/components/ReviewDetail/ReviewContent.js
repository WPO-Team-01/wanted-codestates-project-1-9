import styles from "../../pages/ReviewDetail/ReviewDetail.module.scss";
import more from "../../images/more.png";
import siren from "../../images/siren.png";
import thumb from "../../images/like_hand.png";
import thumbFill from "../../images/like_hand_fill.png";
import share from "../../images/share.png";
import heart from "../../images/heart_normal.png";
import star from "../../images/star_black.png";
import starGray from "../../images/star_gray.png";
import url from "../../images/share_url.png";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { likePlus } from "../../redux/contents/contentsSlice";

const ReviewContent = ({ data }) => {
  const [reportModalOpen, setReportModalOpen] = useState(false);
  const [urlModalOpen, setUrlModalOpen] = useState(false);
  const [isLike, setIsLike] = useState(false);
  const dispatch = useDispatch();

  const likeAlert = () => {
    alert("이미 좋아요를 누르셨습니다.");
  };

  const likeOn = () => {
    dispatch(
      likePlus({
        id: data.id,
      }),
    );
    setIsLike(true);
  };

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
              <>
                <div className={styles.reportModal}>
                  <img src={siren} alt="siren icon" className={styles.siren} />
                  <span>신고하기</span>
                </div>
                <div
                  className={styles.layout}
                  onClick={() => {
                    setReportModalOpen(!reportModalOpen);
                  }}
                ></div>
              </>
            ) : (
              ""
            )}
          </div>
        </div>

        {/* img */}
        <div>
          <img src={data.img[0]} key={data.id} alt="" className={styles.img} />
        </div>
        {/* function bar */}
        <div className={styles.contentHeader}>
          <div className={styles.thumbWrapper}>
            {isLike ? (
              <img
                src={thumbFill}
                className={styles.thumbFillIcon}
                onClick={likeAlert}
                alt="thumb icon"
              />
            ) : (
              <>
                <img
                  src={thumb}
                  className={styles.thumbIcon}
                  onClick={() => {
                    likeOn();
                  }}
                  alt="thumb icon"
                />
              </>
            )}
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
          {data.point > 1 ? (
            <img src={star} className={styles.starIcon} alt="star icon" />
          ) : (
            <img
              src={starGray}
              className={styles.starGrayIcon}
              alt="star icon"
            />
          )}
          {data.point > 2 ? (
            <img src={star} className={styles.starIcon} alt="star icon" />
          ) : (
            <img
              src={starGray}
              className={styles.starGrayIcon}
              alt="star icon"
            />
          )}
          {data.point > 3 ? (
            <img src={star} className={styles.starIcon} alt="star icon" />
          ) : (
            <img
              src={starGray}
              className={styles.starGrayIcon}
              alt="star icon"
            />
          )}
          {data.point > 4 ? (
            <img src={star} className={styles.starIcon} alt="star icon" />
          ) : (
            <img
              src={starGray}
              className={styles.starGrayIcon}
              alt="star icon"
            />
          )}

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
