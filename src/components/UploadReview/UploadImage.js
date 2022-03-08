import React from "react";
import styles from "./UploadImage.module.scss";
import ClearIcon from "@mui/icons-material/Clear";

const UploadImage = ({ onRemoveFile, setImgBase64, imgBase64 }) => {
  const onChangeFile = (event) => {
    setImgBase64([]);
    for (var i = 0; i < event.target.files.length; i++) {
      if (event.target.files[i]) {
        let reader = new FileReader();
        reader.readAsDataURL(event.target.files[i]);
        reader.onloadend = () => {
          const base64 = reader.result;
          if (base64) {
            var base64Sub = base64.toString();

            setImgBase64((imgBase64) => [...imgBase64, base64Sub]);
          }
        };
      }
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        {imgBase64.map((data) => {
          return (
            <div className={styles.images} key={data}>
              <img className={styles.img} src={data} alt="" />
              <div className={styles.button}>
                <ClearIcon onClick={() => onRemoveFile(data)}>x</ClearIcon>
              </div>
            </div>
          );
        })}
      </div>
      <div>
        <label className={styles.selectImg} htmlFor="input-file">
          업로드
        </label>
        <input
          type="file"
          id="input-file"
          style={{ display: "none" }}
          multiple={true}
          onChange={onChangeFile}
        />
      </div>
    </div>
  );
};

export default UploadImage;
