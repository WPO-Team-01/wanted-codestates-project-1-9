import styles from "./ReviewDetail.module.scss";
import ReviewDetailHeader from "../../components/ReviewDetail/ReviewDetailHeader";
import ReviewContent from "../../components/ReviewDetail/ReviewContent";
import Comments from "../../components/Comments/Comments";
import { useSelector } from "react-redux";
import { useParams } from 'react-router-dom';


const ReviewDetail = () => {
  let state = useSelector((state) => state);
  const selectId = useParams().selectId;
  const params = useParams();
  const selectedReview = state.contents.data.filter(
    (item) => item.id === Number(params.id)
  );

  return (
    <div className={styles.container}>
      <div>
        {/* contentHeader */}
        <div className={styles.fixedHeader}>
          <ReviewDetailHeader />
        </div>
        <ReviewContent data={selectedReview[0]} />
         <Comments
          comments={state.contents.data[0].comment}
          id={state.contents.data[0].id}
        />

      </div>
    </div>
  );
};

export default ReviewDetail;
