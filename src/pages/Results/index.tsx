import React, { useState, ChangeEvent, useEffect } from "react";
import styles from "./Results.module.scss";
import Input from "../../components/Input";
import logo from "../../assets/logo.svg";
import user from "../../assets/user.jpg";
import apps from "../../assets/nav.svg";
import ResultsList from "../../components/ResultsList";
import data from "../../data";
import { Link, useLocation } from "react-router-dom";

export default function Results() {
  const location = useLocation();
  const urlSearchParams = new URLSearchParams(location.search);
  const searchParam = urlSearchParams.get("search");

  const [searchValue, setSearchValue] = useState(searchParam || "");

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearchValue(value);
  };

  const filteredResults = data.filter((item) =>
    item.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  useEffect(() => {
    const updatedSearchParam = urlSearchParams.get("search");
    if (updatedSearchParam !== searchValue) {
      setSearchValue(updatedSearchParam || "");
    }
  }, [location.search, searchValue]);

  return (
    <>
      <header className={styles.results__header}>
        <div className={styles.results__container}>
          <div className={styles.results__search}>
            <Link to="/">
              <img className={styles.results__logo} src={logo} alt="logo" />
            </Link>
            <Input onChange={handleInputChange} value={searchValue} />
          </div>
          <div className={styles.results__user}>
            <img src={apps} alt="apps" />
            <img className={styles.results__img_user} src={user} alt="user" />
          </div>
        </div>
      </header>
      <section className={styles.results__section}>
        <ResultsList results={filteredResults} searchTerm={""} />
      </section>
    </>
  );
}
