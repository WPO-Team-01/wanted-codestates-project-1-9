import React from "react";
import classNames from "classnames";
import styles from "./Input.module.scss";

const Input = ({ text, setText, uploadComment, target }) => {
  const handleInputText = (e) => {
    setText(e.target.value);
  };

  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      uploadComment(target);
    }
  };

  return (
    <>
      <div className={classNames(styles.uploadComment)}>
        <input
          className={classNames(styles.inputComment)}
          placeholder="로그인후 댓글 작성이 가능합니다."
          onChange={(e) => handleInputText(e)}
          value={text}
          onKeyPress={(e) => onKeyPress(e)}
        />
        <button
          className={classNames(styles.upload)}
          onClick={() => uploadComment(target)}
        >
          게시
        </button>
      </div>
    </>
  );
};

export default Input;
