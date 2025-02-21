"use client";

import ListingCard from "../ListingCard/ListingCard";
import { Listing } from "@/@types/listing";
import { useAppStore } from "@/stores/useAppStore";

import styles from "./ListingResults.module.css";

interface ListingResultsProps {
  listings: Listing[];
}

const ListingResults = ({ listings }: ListingResultsProps) => {
  const { user } = useAppStore();

  return (
    <div className={styles.root}>
      {listings.map((l, i) => (
        <ListingCard
          key={`listing-result-${i}`}
          {...l}
          saved={!!user?.savedItems.find((v) => v.id === l.id)}
        />
      ))}
    </div>
  );
};

export default ListingResults;
