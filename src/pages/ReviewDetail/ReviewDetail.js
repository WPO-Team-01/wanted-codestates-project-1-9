import styles from "./ReviewDetail.module.scss";
import ReviewDetailHeader from "../../components/ReviewDetail/ReviewDetailHeader";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import StarIcon from "@mui/icons-material/Star";

const ReviewDetail = () => {
  return (
    <div className={styles.container}>
      <div>
        {/* contentHeader */}
        <ReviewDetailHeader />
        <div className={styles.contentHeader}>
          <span className={styles.contentTitle}>title</span>
          <span>2022-03-07</span>
          <MoreHorizIcon />
        </div>
        {/* img */}
        <div>
          {/* <img src="" alt="" /> */}
          <div className={styles.img}></div>
        </div>
        {/* function bar */}
        <div className={styles.contentHeader}>
          <div className={styles.thumbWrapper}>
            <ThumbUpOffAltIcon className={styles.thumbIcon} />
            38
          </div>
          <ShareOutlinedIcon />
          <FavoriteBorderIcon className={styles.heartIcon} />
        </div>
        {/* review */}
        <div className={styles.contentComment}>
          <StarIcon />
          <p>
            일단 배송도 생각보다 빠르고 상태도 좋네요 다만 모양이 기존에
            가지고있는거랑 조금 달라서 정품 감정 맡겨볼려구요~
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReviewDetail;
