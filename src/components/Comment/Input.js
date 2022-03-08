import React from "react";
import classNames from "classnames";
import styles from "./Comment.module.scss";

const { uploadComment, inputComment, upload } = styles;

const Input = ({ setComment }) => {
  return (
    <>
      <div className={classNames(uploadComment)}>
        <input
          className={classNames(inputComment)}
          placeholder="로그인후 댓글 작성이 가능합니다."
        />
        <button className={classNames(upload)}>게시</button>
      </div>
    </>
  );
};

export default Input;
