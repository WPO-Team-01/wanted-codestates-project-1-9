import styles from "./ReviewDetail.module.scss";
import ReviewDetailHeader from "../../components/ReviewDetail/ReviewDetailHeader";
import ReviewContent from "../../components/ReviewDetail/ReviewContent";
import Comment from "../../components/Comment/Comment";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const ReviewDetail = () => {
  const data = useSelector((state) => state.contents.data);
  const params = useParams();
  const selectedReview = data.filter((item) => item.id === Number(params.id));

  return (
    <div className={styles.container}>
      <div>
        {/* contentHeader */}
        <div className={styles.fixedHeader}>
          <ReviewDetailHeader />
        </div>
        <ReviewContent data={selectedReview[0]} />
        <Comment />
      </div>
    </div>
  );
};

export default ReviewDetail;
