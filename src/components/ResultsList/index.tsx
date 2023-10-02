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
      <div className={styles.resultsContent}>
        <div className={styles.resultsList}>
          {results.map((item: Result) => (
            <div
              key={item.id}
              className={styles.resultsList__container}
              onClick={() => handleItemClick(item)}
            >
              <p className={styles.resultsList__url}>
                <a
                  href={item.url}
                  className={styles.resultsList__url}
                  onClick={(e) => e.preventDefault()}
                >
                  {item.url}
                </a>
              </p>
              <a
                className={styles.resultsList__title}
                href={item.url}
                onClick={(e) => e.preventDefault()}
              >
                {item.title}
              </a>
              <p className={styles.resultsList__description}>
                {item.description}
              </p>
            </div>
          ))}
        </div>
        {selectedItem && (
          <div className={styles.resultsCardContainer}>
            <ResultsCard item={selectedItem} />
          </div>
        )}
      </div>
    </div>
  );
}
