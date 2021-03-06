import React, { useState } from "react";
import classNames from "classnames";
import styles from "./Comments.module.scss";
import Input from "./Input";
import Comment from "./Comment";
import Recomment from "./Recomment";
import { useDispatch } from "react-redux";
import { addComment } from "../../redux/contents/contentsSlice";
import { customAlphabet } from "nanoid";

const Comments = ({ comments, id }) => {
  const [inputOpen, setInputOpen] = useState(false);
  const [inputId, setInputId] = useState(0);
  const nanoid = customAlphabet("123456789", 9);
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleInputId = (id) => {
    setInputId(id);
  };

  const uploadComment = () => {
    if (text === "") {
      alert("내용을 입력해 주세요.");
    } else {
      dispatch(
        addComment({
          id: id,
          data: {
            id: nanoid(),
            target_id: null,
            parent_id: null,
            nickname: "비로그인Id",
            contents: text,
            depth: 0,
            regdt: new Date().toISOString(),
            target_nickname: "비로그인Id",
          },
        })
      );
      setText("");
      setInputOpen(false);
    }
  };

  const uploadReComment = (target) => {
    if (text === "") {
      alert("내용을 입력해 주세요.");
    } else {
      dispatch(
        addComment({
          id: id,
          data: {
            id: nanoid(),
            target_id: target.id,
            parent_id: target.parent_id ?? target.id,
            nickname: "비로그인Id",
            regdt: new Date().toISOString(),
            contents: text,
            depth: 1,
            target_nickname: target.nickname,
          },
        })
      );
      setText("");
      setInputOpen(false);
    }
  };

  const parentComments = comments.filter((comment) => !comment.parent_id);
  const recommentsById = comments.reduce((acc, cur) => {
    if (!cur.parent_id) {
      return acc;
    }
    return {
      ...acc,
      [cur.parent_id]: [...(acc[cur.parent_id] ?? []), cur],
    };
  }, {});

  return (
    <section className={classNames(styles.container)}>
      <div className={classNames(styles.subContainer)}>
        {parentComments.map((comment, index) => (
          <div key={index}>
            <Comment
              comment={comment}
              inputOpen={inputOpen}
              setInputOpen={setInputOpen}
              inputId={inputId}
              handleInputId={handleInputId}
              text={text}
              setText={setText}
              uploadComment={uploadReComment}
            />
            {recommentsById[comment.id]?.map((reco, idx) => (
              <Recomment
                key={reco.id}
                comment={reco}
                inputOpen={inputOpen}
                setInputOpen={setInputOpen}
                inputId={inputId}
                handleInputId={handleInputId}
                text={text}
                setText={setText}
                uploadComment={uploadReComment}
              />
            ))}
          </div>
        ))}
      </div>
      {inputOpen ? null : (
        <Input
          text={text}
          setText={setText}
          uploadComment={uploadComment}
          target={comments}
        />
      )}
    </section>
  );
};

export default Comments;
