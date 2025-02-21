"use client";

import { BuyFilterForm } from "@/components/organisms";
import { ListingResults } from "@/components/molecules";
import { useBuyFilter } from "@/@utils/useBuyFilter";

import styles from "./BuyPageTemplate.module.css";

const BuyPageTemplate = () => {
  const {
    filteredListings,
    setLocation,
    setBudgetLow,
    setBudgetHigh,
    type,
    setType,
    setBeds,
    setBaths,
    setCarparks,
    performSearch,
  } = useBuyFilter();

  return (
    <div className={styles.root}>
      <BuyFilterForm
        setLocation={setLocation}
        setBudgetLow={setBudgetLow}
        setBudgetHigh={setBudgetHigh}
        type={type}
        setType={setType}
        setBeds={setBeds}
        setBaths={setBaths}
        setCarparks={setCarparks}
        performSearch={performSearch}
      />
      <ListingResults listings={filteredListings} />
    </div>
  );
};

export default BuyPageTemplate;
