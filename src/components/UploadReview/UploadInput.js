import styles from "./UploadInput.module.scss";

const UploadInput = ({ label, onChange, placeholder, value }) => {
  return (
    <div className={styles.inputContainer}>
      <label className={styles.label}>{label}</label>
      <input
        type="text"
        placeholder={placeholder}
        className={styles.input}
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

export default UploadInput;
