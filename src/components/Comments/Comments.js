import React, { useState } from "react";
import classNames from "classnames";
import styles from "./Comments.module.scss";
import Input from "./Input";
import Comment from "./Comment";
import Recomment from "./Recomment";
import { CommentTwoTone } from '@mui/icons-material';

const Comments = ({ comments }) => {
  const [inputOpen, setinputOpen] = useState(false);
  const [inputIndex, setInputIndex] = useState(0);

  const handleIndex = (index) => {
    setInputIndex(index);
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
              />
          )
        )}
      </div>
      {inputOpen ? null : <Input />}
    </section>
  );
};

export default Comments;
