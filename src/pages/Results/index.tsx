import React, { useState, ChangeEvent } from "react";
import styles from "./Results.module.scss";
import Input from "../../components/Input";
import logo from "../../assets/logo.svg";
import user from "../../assets/user.jpg";
import apps from "../../assets/nav.svg";
import ResultsList from "../../components/ResultsList";
import data from "../../data";

export default function Results() {
  const [searchValue, setSearchValue] = useState(""); // Estado para o valor do input

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearchValue(value);
  };

  // Filtre os resultados com base no valor de pesquisa
  const filteredResults = data.filter((item) =>
    item.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <>
      <header className={styles.results__header}>
        <div className={styles.results__container}>
          <div className={styles.results__search}>
            <img className={styles.results__logo} src={logo} alt="logo" />
            <Input onChange={handleInputChange} />
          </div>
          <div className={styles.results__user}>
            <img src={apps} alt="apps" />
            <img className={styles.results__img_user} src={user} alt="user" />
          </div>
        </div>
      </header>
      <div className={styles.results__section}>
        <ResultsList results={filteredResults} />
      </div>
    </>
  );
}
