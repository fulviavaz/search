import React, { ChangeEvent } from "react";
import styles from "./Input.module.scss";
import { FaSearch } from "react-icons/fa";

interface InputProps {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

const Input: React.FC<InputProps> = ({ onChange, value }) => {
  return (
    <div className={styles.input__container}>
      <input type="text" onChange={onChange} value={value} />{" "}
      <FaSearch className={styles.input__icon} />
    </div>
  );
};

export default Input;
