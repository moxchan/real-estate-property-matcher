"use client";

import { Welcome } from "@/components/atoms";
import { ContentPreview } from "@/components/molecules";
import { useAppStore } from "@/stores/useAppStore";

import styles from "./UserProfilePage.module.css";

const UserProfilePage = () => {
  const { user } = useAppStore();

  return (
    <div className={styles.root}>
      <Welcome name={user?.name} />
      <ContentPreview variant="your-listings" title="Your Posted Listings" />
      <ContentPreview variant="saved-listings" title="Your Saved Listings" />
    </div>
  );
};

export default UserProfilePage;
