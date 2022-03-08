import React from "react";
import classNames from "classnames";
import styles from "./Input.module.scss";

const Input = () => {
  return (
    <>
      <div className={classNames(styles.uploadComment)}>
        <input
          className={classNames(styles.inputComment)}
          placeholder="로그인후 댓글 작성이 가능합니다."
        />
        <button className={classNames(styles.upload)}>게시</button>
      </div>
    </>
  );
};

export default Input;
