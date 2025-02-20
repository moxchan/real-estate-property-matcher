"use client";

import { Listing } from "@/@types/listing";
import { useIsRestoring, useQuery } from "@tanstack/react-query";
import { fetchListings } from "./fetch/fetchListings";
import { submitListing } from "./fetch/submitListing";

const LISTINGS = ["listings"];

export const useListings = () => {
  const isRestoring = useIsRestoring();

  const { data, isPending, error } = useQuery<Listing[]>({
    enabled: !isRestoring,
    queryFn: async () => {
      try {
        return await fetchListings();
      } catch (e) {
        console.error(e);
        return [];
      }
    },
    queryKey: LISTINGS,
  });

  return { listings: data, submitListing, isPending, error };
};
