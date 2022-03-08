import React, { useState } from "react";
import classNames from "classnames";
import styles from "./Comment.module.scss";
import Input from "./Input";

const {
  container,
  comment,
  writer,
  content,
  addon,
  date,
  recomment,
  subContainer,
} = styles;

const Comment = () => {
  const [inputOpen, setinputOpen] = useState(false);

  const handleInput = () => {
    setinputOpen(!inputOpen);
  };

  return (
    <section className={classNames(container)}>
      <div className={classNames(comment)}>
        <span className={classNames(writer)}>작성자1</span>
        <div className={classNames(content)}>
          금주의 베스트 리뷰로 선정되어 상품권 10,000원이 발급 되었습니다!
        </div>
        <div className={classNames(addon)}>
          <span className={classNames(date)}>7일</span>
          <span className={classNames(recomment)} onClick={handleInput}>
            {inputOpen ? "답글 취소" : "답글 달기"}
          </span>
        </div>
        {/* 대댓글이 존재한다면 */}
        <section className={classNames(subContainer)}>
          <span className={classNames(writer)}>작성자2</span>
          <div className={classNames(content)}>상품권 감사합니다~~</div>
          <div className={classNames(addon)}>
            <span className={classNames(date)}>7일</span>
            <span className={classNames(recomment)} onClick={handleInput}>
              {inputOpen ? "답글 취소" : "답글 달기"}
            </span>
          </div>
        </section>
        {inputOpen ? <Input /> : null}
      </div>
      {inputOpen ? null : <Input />}
    </section>
  );
};

export default Comment;
