"use client";

import { Listing } from "@/@types/listing";
import {
  useIsRestoring,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { fetchListings } from "./fetch/fetchListings";
import { submitListing } from "./fetch/submitListing";

const LISTINGS = ["listings"];

export const useListings = () => {
  const isRestoring = useIsRestoring();
  const queryClient = useQueryClient();

  const performSubmit = async (listing: Omit<Listing, "id">) => {
    const res = await submitListing(listing);
    queryClient.invalidateQueries({ queryKey: LISTINGS });

    return res;
  };

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

  return { listings: data, performSubmit, isPending, error };
};
