import { Listing } from "@/@types/listing";

export const fetchListings = async (): Promise<Listing[]> => {
  const res = await fetch(`/api/find-listing`, {
    method: "GET",
  });

  if (res.status !== 200) {
    return [];
  }

  return await res.json();
};
