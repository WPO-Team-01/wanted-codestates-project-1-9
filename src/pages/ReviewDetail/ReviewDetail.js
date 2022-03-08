import styles from "./ReviewDetail.module.scss";
import ReviewDetailHeader from "../../components/ReviewDetail/ReviewDetailHeader";
import ReviewContent from "../../components/ReviewDetail/ReviewContent";
import Comments from "../../components/Comments/Comments";
import { useSelector } from "react-redux";
import { useParams } from 'react-router-dom';

const data = {
  comment: [
    {
      contents:
        "금주의 베스트 리뷰로 선정되어 상품권 10,000원이 발급 되었습니다!",
      depth: 0,
      nickname: "admin",
      regdt: "2022-02-22T04:23:59.000Z",
      target_nickname: null,
    },
    {
      contents: "리뷰만 보여서 그러는데 혹시 어떤상품인지 알려주실 수 있나요?",
      depth: 0,
      nickname: "happys2",
      regdt: "2022-02-22T14:29:18.000Z",
      target_nickname: null,
    },
    {
      contents: "자크뮈스 21fw 시즌 니트입니다.",
      depth: 1,
      nickname: "errorr",
      regdt: "2022-02-27T12:59:10.000Z",
      target_nickname: "happys2",
    },
  ],
  contents:
    "너무 특이한 골지 니트에요.\n시크하게 입기에 딱 좋고, 스키니와 와이드 팬츠 둘 다 너무 잘어울려서 애용하고 있습니다!",
  id: 145521,
  img: ["https://i.balaan.io/review/44cbea94e62dc80fbc4ecfed4b73e29a.jpeg"],
  like: 66,
  nickname: "errorr",
  point: 4,
  regdt: "2022-02-22 04:28:59",
  thumbnail:
    "https://i.balaan.io/review/44cbea94e62dc80fbc4ecfed4b73e29a-t.jpeg",
};
const ReviewDetail = () => {
  const selectId = useParams().selectId
  let state = useSelector((state) => state);
  return (
    <div className={styles.container}>
      <div>
        {/* contentHeader */}
        <ReviewDetailHeader />
        <ReviewContent data={data} />
        <Comments
          comments={state.contents.data[0].comment}
          id={state.contents.data[0].id}
        />
      </div>
    </div>
  );
};

export default ReviewDetail;
