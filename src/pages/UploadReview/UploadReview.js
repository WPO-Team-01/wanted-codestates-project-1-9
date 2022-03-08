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
import { Link } from "react-router-dom";

const UploadReview = () => {
  const [rating, setRating] = useState(0);
  const [nickname, setNickname] = useState("");
  const [contents, setContents] = useState("");
  const [imgBase64, setImgBase64] = useState([]);
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();

    if (!rating || !nickname || !contents || imgBase64.length === 0) {
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
        thumbnail: imgBase64[0],
        img: imgBase64.slice(0),
        comment: [],
      })
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

  const handleRemoveFile = (id) => {
    setImgBase64((prev) => prev.filter((item) => item !== id));
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.goBack}>
          <Link to='/'>
            <ArrowBackIcon />
          </Link>
        </div>
        <div className={styles.title}>리뷰 등록</div>
        <div className={styles.escape}>
          <Link to='/'>
            <ClearIcon />
          </Link>
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
            <UploadImage
              imgBase64={imgBase64}
              setImgBase64={setImgBase64}
              onRemoveFile={handleRemoveFile}
            />
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
