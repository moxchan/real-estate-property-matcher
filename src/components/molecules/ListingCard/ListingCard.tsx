"use client";

import { useState } from "react";
import { Listing, MAX_PRICE, PropertyType } from "@/@types/listing";
import { capitalise } from "@/@types/string";
import {
  IconBath,
  IconBed,
  IconBookmark,
  IconBuildings,
  IconBuildingSkyscraper,
  IconCar,
  IconHome2,
} from "@tabler/icons-react";
import { useSaveItem } from "@/@utils/useSaveItem";
import clsx from "clsx";

import styles from "./ListingCard.module.css";
import { toast } from "react-toastify";

interface ListingCardProps extends Listing {
  onClick?: () => void;
  saved?: boolean;
  unsaveable?: boolean;
}

const ListingCard = ({
  id,
  title,
  location,
  price,
  type,
  beds,
  baths,
  carparks,
  onClick,
  saved: initialSaved,
  unsaveable,
}: ListingCardProps) => {
  const [saved, setSaved] = useState(initialSaved);
  const { toggleSave } = useSaveItem();

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

  const onSaveClick = () => {
    if (!saved) {
      toast.success("Successfully Saved Listing");
    } else {
      toast.info("Listing unsaved");
    }
    setSaved(!saved);
    toggleSave({
      id,
      title,
      location,
      price,
      type,
      beds,
      baths,
      carparks,
    });
  };

  return (
    <div className={styles.root} onClick={onClick}>
      <div className={styles.topSection}>
        <div className={styles.infoCluster}>
          <div className={styles.title}>{title}</div>
          <div className={styles.location}>{location}</div>
          <div className={styles.type}>
            {typeIcon(type)}
            {capitalise(type)}
          </div>
        </div>
        {!unsaveable && (
          <IconBookmark
            size={30}
            className={clsx(styles.bookmark, {
              [styles.bookmarkFilled]: saved,
            })}
            onClick={onSaveClick}
          />
        )}
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
