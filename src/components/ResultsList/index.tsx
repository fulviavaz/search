import React, { useState, useEffect, useRef } from "react";
import styles from "./ResultsList.module.scss";
import ResultsCard from "../ResultsCard";
import isMobile from "is-mobile";

export type Result = {
  id: number;
  url: string;
  title: string;
  description: string;
  image: string;
};

interface ResultsListProps {
  results: Result[];
  searchTerm: string;
}

export default function ResultsList({ results, searchTerm }: ResultsListProps) {
  const [selectedItem, setSelectedItem] = useState<Result | null>(null);
  const resultsListRef = useRef<HTMLDivElement | null>(null);

  const handleItemClick = (item: Result) => {
    setSelectedItem(item);
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        resultsListRef.current &&
        !resultsListRef.current.contains(event.target as Node)
      ) {
        setSelectedItem(null);
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  const isMobileDevice = isMobile();

  return (
    <div className={styles.resultsContainer}>
      <div className={styles.resultsContent} ref={resultsListRef}>
        {results.length === 0 ? (
          <p>No results found.</p>
        ) : (
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
        )}
        {selectedItem && (
          <div
            className={
              isMobileDevice ? styles.modal : styles.resultsCardContainer
            }
          >
            <ResultsCard item={selectedItem} isModal={isMobileDevice} />
          </div>
        )}
      </div>
      {results.length === 0 && <p>No results found.</p>}
      {/* {!searchTerm && <p>Please enter a search term.</p>} */}
    </div>
  );
}
