import styles from "./ReviewDetail.module.scss";
import ReviewDetailHeader from "../../components/ReviewDetail/ReviewDetailHeader";
import ReviewContent from "../../components/ReviewDetail/ReviewContent";

const ReviewDetail = () => {
  return (
    <div className={styles.container}>
      <div>
        {/* contentHeader */}
        <ReviewDetailHeader />
        <ReviewContent />
      </div>
    </div>
  );
};

export default ReviewDetail;
