import styles from "../../pages/ReviewDetail/ReviewDetail.module.scss";
import back from "../../images/back_btn.png";
import close from "../../images/close_btn.png";
import { Link } from "react-router-dom";

const ReviewDetail = () => {
  return (
    <div className={styles.detailHeader}>
      <Link to="/">
        <img src={back} className={styles.icon} alt="back icon" />
      </Link>
      <span>리뷰 상세보기</span>
      <Link to="/">
        <img src={close} className={styles.icon} alt="close icon" />
      </Link>
    </div>
  );
};

export default ReviewDetail;
