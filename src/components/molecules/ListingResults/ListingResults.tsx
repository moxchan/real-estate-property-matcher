import ListingCard from "../ListingCard/ListingCard";
import { Listing } from "@/@types/listing";

import styles from "./ListingResults.module.css";

interface ListingResultsProps {
  listings: Listing[];
}

const ListingResults = ({ listings }: ListingResultsProps) => {
  return (
    <div className={styles.root}>
      {listings.map((l, i) => (
        <ListingCard key={`listing-result-${i}`} {...l} />
      ))}
    </div>
  );
};

export default ListingResults;
