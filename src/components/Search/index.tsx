import React, { ChangeEvent, useState } from "react";
import styles from "./Search.module.scss";
import logo from "../../assets/logo.svg";
import Input from "../Input";
import { useNavigate } from "react-router-dom";

export default function Search() {
  const [searchValue, setSearchValue] = useState("");
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearchValue(value);
    setIsButtonEnabled(value.length > 0);
  };

  const handleSearch = () => {
    if (isButtonEnabled) {
      navigate(`/results?search=${searchValue}`);
    }
  };

  return (
    <div className={styles.search}>
      <div className={styles.search__container}>
        <img src={logo} alt="logo" />
        <Input onChange={handleInputChange} value={searchValue} />
        <button
          className={styles.search__btn}
          onClick={handleSearch}
          disabled={!isButtonEnabled}
        >
          Buscar
        </button>
      </div>
    </div>
  );
}
