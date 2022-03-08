import styles from "./UploadReview.module.scss";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ClearIcon from "@mui/icons-material/Clear";
import UploadInput from "../../components/UploadReview/UploadInput";
import Rating from "@mui/material/Rating";
import UploadImage from "../../components/UploadReview/UploadImage";
import { useState } from "react";
import { nanoid } from "nanoid";
import { useDispatch } from "react-redux";
import { addReview } from "../../redux/contents/contentsSlice";

const UploadReview = () => {
  const [rating, setRating] = useState(0);
  const [nickname, setNickname] = useState("");
  const [contents, setContents] = useState("");
  const [upload, setUpload] = useState([]);
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();

    if (!rating || !nickname || !contents || upload.length === 0) {
      alert("모든 폼을 입력해 주세요");
      return;
    }

    dispatch(
      addReview({
        id: nanoid(),
        nickname,
        contents,
        point: rating,
        like: 0,
        thumbnail: upload[0],
        img: upload.slice(0),
        comment: [],
      }),
    );
  };

  const handleChangeRating = (e, value) => {
    setRating(value);
  };

  const handleChangeNickname = (e) => {
    setNickname(e.target.value);
  };

  const handleChangeReview = (e) => {
    setContents(e.target.value);
  };

  const handleChangeUpload = (file) => {
    setUpload((prev) => [...prev, file]);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.goBack}>
          <ArrowBackIcon />
        </div>
        <div className={styles.title}>리뷰 등록</div>
        <div className={styles.escape}>
          <ClearIcon />
        </div>
      </div>
      <div className={styles.contentsContainer}>
        <form onSubmit={onSubmit} className={styles.formContainer}>
          <UploadInput
            label={"닉네임"}
            placeholder="닉네임을 입력해 주세요"
            onChange={handleChangeNickname}
            value={nickname}
          />
          <UploadInput
            label={"리뷰"}
            placeholder="리뷰를 입력해 주세요"
            onChange={handleChangeReview}
            value={contents}
          />
          <div className={styles.uploadContainer}>
            <label className={styles.label}>파일 업로드</label>
            <UploadImage onChange={handleChangeUpload} />
          </div>
          <div>
            <Rating onChange={handleChangeRating} size="large" value={rating} />
          </div>
          <div className={styles.upload}>
            <button type="submit" className={styles.uploadBtn}>
              올리기
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UploadReview;
