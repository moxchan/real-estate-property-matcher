"use client";

import { Listing, PropertyType } from "@/@types/listing";
import { useState } from "react";
import { useListings } from "./useListings";

export const useBuyFilter = () => {
  const [location, setLocation] = useState("");
  const [budgetLow, setBudgetLow] = useState<number | undefined>();
  const [budgetHigh, setBudgetHigh] = useState<number | undefined>();
  const [type, setType] = useState<PropertyType | undefined>();
  const [beds, setBeds] = useState<number | undefined>();
  const [baths, setBaths] = useState<number | undefined>();
  const [carparks, setCarparks] = useState<number | undefined>();

  const [filteredListings, setFilteredListings] = useState<Listing[]>([]);

  const { listings } = useListings();

  const performSearch = () => {
    setFilteredListings(
      listings!
        .filter((l) => (location?.length ? l.location === location : true))
        .filter((l) => (budgetLow !== undefined ? l.price >= budgetLow : true))
        .filter((l) =>
          budgetHigh !== undefined ? l.price <= budgetHigh : true
        )
        .filter((l) => (type ? l.type === type : true))
        .filter((l) => (beds ? l.beds === beds : true))
        .filter((l) => (baths ? l.baths === baths : true))
        .filter((l) => (carparks ? l.carparks === carparks : true))
    );
  };

  return {
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
  };
};
