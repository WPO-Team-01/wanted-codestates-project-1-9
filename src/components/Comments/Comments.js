import React, { useState } from "react";
import classNames from "classnames";
import styles from "./Comments.module.scss";
import Input from "./Input";
import Comment from "./Comment";
import Recomment from "./Recomment";
import { useDispatch } from "react-redux";
import { addComment } from "../../redux/contents/contentsSlice";

const Comments = ({ comments, id }) => {
  const [inputOpen, setinputOpen] = useState(false);
  const [inputIndex, setInputIndex] = useState(0);
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  console.log({ text });
  console.log({ id });

  const handleIndex = (index) => {
    setInputIndex(index);
  };

  const uploadComment = (target) => {
    console.log({ target });
    if (text === "") {
      alert("내용을 입력해 주세요.");
    } else {
      dispatch(
        addComment({
          id: id,
          data: {
            nickname: "비로그인Id",
            contents: text,
            depth: 0,
            regdt: new Date().toISOString(),
            target_nickname: target,
          },
        })
      );
      setText("");
      setinputOpen(false);
    }
  };

  const uploadReComment = (target) => {
    console.log({ target });
    if (text === "") {
      alert("내용을 입력해 주세요.");
    } else {
      dispatch(
        addComment({
          id: id,
          data: {
            nickname: "비로그인Id",
            regdt: new Date().toISOString(),
            contents: text,
            depth: 1,
            target_nickname: target,
          },
        })
      );
      setText("");
      setinputOpen(false);
    }
  };

  return (
    <section className={classNames(styles.container)}>
      <div className={classNames(styles.subContainer)}>
        {comments.map((comment, index) =>
          comment.target_nickname === null ? (
            <Comment
              key={index}
              comment={comment}
              index={index}
              inputOpen={inputOpen}
              setinputOpen={setinputOpen}
              inputIndex={inputIndex}
              handleIndex={handleIndex}
              text={text}
              setText={setText}
              uploadComment={uploadReComment}
            />
          ) : (
            <Recomment
              key={index}
              comment={comment}
              index={index}
              inputOpen={inputOpen}
              setinputOpen={setinputOpen}
              inputIndex={inputIndex}
              handleIndex={handleIndex}
              text={text}
              setText={setText}
              uploadComment={uploadReComment}
            />
          )
        )}
      </div>
      {inputOpen ? null : (
        <Input
          text={text}
          setText={setText}
          uploadComment={uploadComment}
          target={null}
        />
      )}
    </section>
  );
};

export default Comments;
