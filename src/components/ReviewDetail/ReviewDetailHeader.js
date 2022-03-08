import styles from "../../pages/ReviewDetail/ReviewDetail.module.scss";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CloseIcon from "@mui/icons-material/Close";

const ReviewDetail = () => {
  return (
    <div className={styles.detailHeader}>
      <ArrowBackIcon />
      <span>리뷰 상세보기</span>
      <CloseIcon />
    </div>
  );
};

export default ReviewDetail;
