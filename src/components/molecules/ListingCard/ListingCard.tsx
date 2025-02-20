import { Listing } from "@/@types/listing";

import styles from "./ListingCard.module.css";

interface ListingCardProps extends Omit<Listing, "id"> {}

const ListingCard = ({
  title,
  location,
  price,
  type,
  poster,
}: ListingCardProps) => {
  return <div className={styles.root}></div>;
};

export default ListingCard;
