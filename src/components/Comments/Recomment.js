import React from "react";
import classNames from "classnames";
import styles from "./Comment.module.scss";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { ko } from "date-fns/locale";
import Input from "./Input";

const Recomment = ({
  comment,
  index,
  inputIndex,
  handleIndex,
  text,
  setText,
  uploadComment,
}) => {
  const [isInputOpen, setIsInputOpen] = React.useState(false);

  const handleInput = () => {
    setIsInputOpen((prev) => !prev);
  };

  return (
    <>
      <section className={classNames(styles.recomment)}>
        <div className={classNames(styles.writer)}>
          {comment.nickname}
          <span className={classNames(styles.reWriter)}>
            @{comment.target_nickname}
          </span>
        </div>
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
            {isInputOpen ? "답글 취소" : "답글 달기"}
          </span>
        </div>
      </section>
      {index === inputIndex && isInputOpen ? (
        <Input
          text={text}
          setText={setText}
          uploadComment={uploadComment}
          target={comment}
        />
      ) : null}
    </>
  );
};

export default Recomment;
