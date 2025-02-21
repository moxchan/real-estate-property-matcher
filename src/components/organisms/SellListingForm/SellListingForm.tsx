"use client";

import { useListings } from "@/@utils/useListings";
import { useEffect, useState } from "react";
import { MAX_PRICE, PropertyType } from "@/@types/listing";
import { ListingCard, PropertyTypeCluster } from "../../molecules";
import { Button } from "@/components/atoms";
import { toast } from "react-toastify";
import {
  IconBath,
  IconBed,
  IconCar,
  IconCoin,
  IconHomeEdit,
  IconMapPin,
} from "@tabler/icons-react";
import { useAppStore } from "@/stores/useAppStore";

import styles from "./SellListingForm.module.css";

const SellListingForm = () => {
  const { user } = useAppStore();
  const { listings, submitListing } = useListings();

  const [listingTitle, setListingTitle] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState(0);
  const [type, setType] = useState<PropertyType | undefined>();

  const [beds, setBeds] = useState(0);
  const [baths, setBaths] = useState(0);
  const [carparks, setCarParks] = useState(0);

  const onSubmitClick = async () => {
    // There's a nicer way to handle errors using Formik but it's way overkill.
    if (!listingTitle.length) {
      toast.error("Please enter a listing title");
      return;
    }

    if (!location.length) {
      toast.error("Please enter a property location");
      return;
    }

    if (!price || price <= 0 || price > MAX_PRICE) {
      toast.error("Please enter a valid price");
      return;
    }

    if (!type) {
      toast.error("Please select a property type");
      return;
    }

    if (!beds) {
      toast.error("Please enter the number of bedrooms");
      return;
    }

    if (!baths) {
      toast.error("Please enter the number of bathrooms");
      return;
    }

    if (!carparks) {
      toast.error("Please enter the number of carparks");
      return;
    }

    const res = await submitListing({
      title: listingTitle,
      location,
      price,
      beds,
      baths,
      carparks,
      type: type!,
      poster: user?.name,
    });

    if (res) {
      toast.success("Successfully submitted listing!");
    }
  };

  useEffect(() => {
    console.log(listings);
  }, [listings]);
  return (
    <div className={styles.root}>
      <div className={styles.title}>Create a new Property Listing</div>
      <div className={styles.section}>
        <div className={styles.sectionTitle}>Listing Details</div>
        <div className={styles.inputCluster}>
          <IconHomeEdit size={30} />
          <input
            className={styles.input}
            placeholder="A cozy 2-bedroom apartment..."
            onChange={(e) => setListingTitle(e.target.value)}
            maxLength={50} // Arbitrary. Keeps cards looking clean
          ></input>
        </div>
        <div className={styles.inputCluster}>
          <IconMapPin size={30} />
          <input
            className={styles.input}
            placeholder="Property Location"
            onChange={(e) => setLocation(e.target.value)}
            maxLength={85} // That place in NZ has this many chars. More sophisticated data-cleaning when scope increases
          ></input>
        </div>
        <div className={styles.inputCluster}>
          <IconCoin size={30} />
          <input
            className={styles.input}
            placeholder="Listing Price ($)"
            onChange={(e) => {
              setPrice(+e.target.value);
            }}
            type="number"
            step={1000}
            min={0}
          ></input>
        </div>
        <div className={styles.inputWarning}>
          {price > MAX_PRICE &&
            "* Note that any prices set above the maximum price of $9,999,999,999 will not be acceptable"}
          {price < 0 &&
            "* Note that any prices below $0 will not be acceptable"}
        </div>
      </div>
      <div className={styles.section}>
        <div className={styles.sectionTitle}>Property Details</div>
        <PropertyTypeCluster type={type} setType={setType} />
        <div className={styles.inputCluster}>
          <IconBed size={30} />
          <input
            placeholder="No. of Bedrooms"
            onChange={(e) => {
              setBeds(+e.target.value);
            }}
            type="number"
            step={1}
            min={0}
          ></input>
        </div>
        <div className={styles.inputCluster}>
          <IconBath size={30} />
          <input
            placeholder="No. of Bathrooms"
            onChange={(e) => {
              setBaths(+e.target.value);
            }}
            type="number"
            step={1}
            min={0}
          ></input>
        </div>
        <div className={styles.inputCluster}>
          <IconCar size={30} />
          <input
            placeholder="No. of Car Parks"
            onChange={(e) => {
              setCarParks(+e.target.value);
            }}
            type="number"
            step={1}
            min={0}
          ></input>
        </div>
      </div>
      <div className={styles.section}>
        <div className={styles.sectionTitle}>Preview</div>
        <ListingCard
          title={listingTitle || "Listing Title..."}
          location={location || "Location..."}
          price={price}
          beds={beds}
          baths={baths}
          carparks={carparks}
          type={type!}
        />
      </div>

      <div className={styles.section}>
        <Button variant="primary" onClick={onSubmitClick}>
          Submit New Listing
        </Button>
      </div>
    </div>
  );
};

export default SellListingForm;
