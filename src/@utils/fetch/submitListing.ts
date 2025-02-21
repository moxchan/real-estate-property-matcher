import { Listing } from "@/@types/listing";

export const submitListing = async (listing: Omit<Listing, "id">) => {
  const res = await fetch(`/api/create-listing`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json,",
    },
    body: JSON.stringify(listing),
  });

  return await res.json();
};
