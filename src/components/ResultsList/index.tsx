import React, { useState } from "react";
import styles from "./ResultsList.module.scss";
import ResultsCard from "../ResultsCard";

export type Result = {
  id: number;
  url: string;
  title: string;
  description: string;
  image: string;
};

interface ResultsListProps {
  results: Result[];
}

export default function ResultsList({ results }: ResultsListProps) {
  const [selectedItem, setSelectedItem] = useState<Result | null>(null);

  const handleItemClick = (item: Result) => {
    setSelectedItem(item);
  };

  return (
    <div className={styles.resultsContainer}>
      <div className={styles.resultsList}>
        {results.map((item: Result) => (
          <div
            key={item.id}
            className={styles.resultsList__container}
            onClick={() => handleItemClick(item)}
          >
            <p className={styles.resultsList__url}>{item.url}</p>
            <a className={styles.resultsList__title} href={item.url}>
              {item.title}
            </a>
            <p className={styles.resultsList__description}>
              {item.description}
            </p>
          </div>
        ))}
      </div>
      {selectedItem && <ResultsCard item={selectedItem} />}{" "}
    </div>
  );
}
