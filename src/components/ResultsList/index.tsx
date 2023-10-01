import React from "react";
import styles from "./ResultsList.module.scss";

type Result = {
  id: number;
  url: string;
  title: string;
  description: string;
};

interface ResultsListProps {
  results: Result[];
}

export default function ResultsList({ results }: ResultsListProps) {
  return (
    <div className={styles.resultsList}>
      {results.map((item: Result) => (
        <div key={item.id} className={styles.resultsList__container}>
          <p className={styles.resultsList__url}>{item.url}</p>
          <a className={styles.resultsList__title} href={item.url}>
            {item.title}
          </a>
          <p className={styles.resultsList__description}>{item.description}</p>
        </div>
      ))}
    </div>
  );
}
