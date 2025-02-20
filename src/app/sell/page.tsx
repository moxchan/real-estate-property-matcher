"use client";

import SellListingForm from "@/components/molecules/SellListingForm/SellListingForm";
import { useAppStore } from "@/stores/useAppStore";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const SellPage = () => {
  const router = useRouter();
  const { user } = useAppStore();

  // Redirect the user if they are not logged in. Sellers can't be anon.
  useEffect(() => {
    if (!user) {
      router.push("/profile");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <SellListingForm />
    </div>
  );
};

export default SellPage;
