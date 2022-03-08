import styles from "./ReviewDetail.module.scss";
import ReviewDetailHeader from "../../components/ReviewDetail/ReviewDetailHeader";
import ReviewContent from "../../components/ReviewDetail/ReviewContent";
import Comments from "../../components/Comments/Comments";
import { useSelector } from "react-redux";

const ReviewDetail = () => {
  let data = useSelector((state) => state);
  console.log(data);

  return (
    <div className={styles.container}>
      <div>
        {/* contentHeader */}
        <ReviewDetailHeader />
        <ReviewContent />
        <Comments comments={data.contents.data[0].comment} />
      </div>
    </div>
  );
};

export default ReviewDetail;
