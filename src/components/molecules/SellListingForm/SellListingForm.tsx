"use client";

import { useListings } from "@/@utils/useListings";
import { useEffect, useState } from "react";
import { PropertyType } from "@/@types/listing";

import styles from "./SellListingForm.module.css";
import { PropertyTypeCluster } from "..";
import { Button } from "@/components/atoms";

const SellListingForm = () => {
  const { listings, submitListing } = useListings();

  const [listingTitle, setListingTitle] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState(0);
  const [type, setType] = useState<PropertyType | undefined>();

  useEffect(() => {
    console.log(listings);
  }, [listings]);
  return (
    <div className={styles.root}>
      <div className={styles.title}>Create a new Property Listing</div>
      <div className={styles.sectionTitle}>Property Details</div>
      <div className={styles.section}>
        <input placeholder="A cozy 2-bedroom apartment..."></input>
        <input placeholder="Property Location"></input>
        <input placeholder="Listing Price ($)" type="number"></input>
        <PropertyTypeCluster type={type} setType={setType} />
      </div>
      <div className={styles.sectionTitle}>Preview</div>
      <div className={styles.section}>
        <Button variant="primary">Submit New Listing</Button>
      </div>
    </div>
  );
};

export default SellListingForm;
