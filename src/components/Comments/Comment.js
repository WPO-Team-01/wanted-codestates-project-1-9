import React from "react";
import classNames from "classnames";
import styles from "./Comment.module.scss";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { ko } from "date-fns/locale";
import Input from "./Input";

const Comment = ({
  comment,
  index,
  inputOpen,
  setinputOpen,
  inputIndex,
  handleIndex,
  text,
  setText,
  uploadComment,
}) => {
  const handleInput = () => {
    setinputOpen(!inputOpen);
  };
  return (
    <>
      <section className={classNames(styles.comment)}>
        <span className={classNames(styles.writer)}>{comment.nickname}</span>
        <div className={classNames(styles.content)}>{comment.contents}</div>
        <div className={classNames(styles.addon)}>
          <span className={classNames(styles.date)}>
            {formatDistanceToNow(new Date(comment.regdt), { locale: ko }) +
              " 전"}
          </span>
          <span
            className={classNames(styles.button)}
            onClick={() => {
              handleInput();
              handleIndex(index);
            }}
          >
            {inputOpen ? "답글 취소" : "답글 달기"}
          </span>
        </div>
      </section>
      {index === inputIndex && inputOpen ? (
        <Input
          text={text}
          setText={setText}
          uploadComment={uploadComment}
          target={comment.nickname}
        />
      ) : null}
    </>
  );
};

export default Comment;