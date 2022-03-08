import styles from "../../pages/ReviewDetail/ReviewDetail.module.scss";
import back from "../../images/back_btn.png";
import close from "../../images/close_btn.png";

const ReviewDetail = () => {
  return (
    <div className={styles.detailHeader}>
      <img src={back} className={styles.icon} alt="back icon" />
      <span>리뷰 상세보기</span>
      <img src={close} className={styles.icon} alt="close icon" />
    </div>
  );
};

export default ReviewDetail;
