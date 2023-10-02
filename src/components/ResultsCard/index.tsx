import React from "react";
import styles from "./ResultsCard.module.scss";
import { Result } from "../ResultsList";

interface ResultsCardProps {
  item: Result;
}

export default function ResultsCard({ item }: ResultsCardProps) {
  return (
    <div className={styles.resultsCard}>
      <img className={styles.resultsCard__img} src={item.image} alt="Animal" />
      <p className={styles.resultsCard__url}>{item.url}</p>
      <h1 className={styles.resultsCard__title}>{item.title}</h1>
      <p className={styles.resultsCard__text}>{item.description}</p>
    </div>
  );
}
