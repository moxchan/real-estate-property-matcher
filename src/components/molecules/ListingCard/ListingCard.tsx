import { Listing, MAX_PRICE, PropertyType } from "@/@types/listing";
import { capitalise } from "@/@types/string";
import {
  IconBath,
  IconBed,
  IconBuildings,
  IconBuildingSkyscraper,
  IconCar,
  IconHome2,
} from "@tabler/icons-react";

import styles from "./ListingCard.module.css";

interface ListingCardProps extends Omit<Listing, "id"> {
  onClick?: () => void;
}

const ListingCard = ({
  title,
  location,
  price,
  type,
  beds,
  baths,
  carparks,
  onClick,
}: ListingCardProps) => {
  const typeIcon = (type: PropertyType) => {
    switch (type) {
      case "house":
        return <IconHome2 />;
      case "apartment":
        return <IconBuildingSkyscraper />;
      case "condo":
        return <IconBuildings />;
    }
  };
  return (
    <div className={styles.root} onClick={onClick}>
      <div className={styles.infoCluster}>
        <div className={styles.title}>{title}</div>
        <div className={styles.location}>{location}</div>
        <div className={styles.type}>
          {typeIcon(type)}
          {capitalise(type)}
        </div>
      </div>
      <div className={styles.infoCluster}>
        <div className={styles.price}>
          {new Intl.NumberFormat("en-AU", {
            maximumFractionDigits: 0,
            style: "currency",
            currency: "AUD",
          }).format(Math.min(MAX_PRICE, price))}
        </div>
        <div className={styles.detailedInfoCluster}>
          {beds !== undefined && (
            <div className={styles.type}>
              <IconBed /> {beds > 0 ? beds : "Studio"}
            </div>
          )}
          {baths! > 0 && (
            <div className={styles.type}>
              <IconBath /> {baths}
            </div>
          )}
          {carparks! > 0 && (
            <div className={styles.type}>
              <IconCar /> {carparks}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ListingCard;
