"use client";

import { useListings } from "@/@utils/useListings";

import styles from "./ContentPreview.module.css";
import ListingCard from "../ListingCard/ListingCard";
import { useEffect } from "react";

type ContentPreviewVariant =
  | "newest-listings"
  | "recent-search"
  | "recent-listings";

interface ContentPreviewProps {
  title: string;
  variant: ContentPreviewVariant;
}

const ContentPreview = ({ title, variant }: ContentPreviewProps) => {
  const { listings } = useListings();

  // identifier is for the scroll event listener targetting.
  const identifier = new Date();

  // Horizontal scrolling on CSS is kinda impossible without doing the rotation trick. This is less janky
  useEffect(() => {
    const horizontalScroll = document.getElementById(
      `scrollable-${identifier}`
    );

    horizontalScroll?.addEventListener("wheel", (e) => {
      e.preventDefault();
      horizontalScroll.scrollLeft += e.deltaY / 2;
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const Cards = () => {
    switch (variant) {
      case "newest-listings":
        return <NewestListings />;
    }
  };

  const NewestListings = () => {
    const newestListings = (
      listings?.sort((a, b) => (a.id < b.id ? 1 : -1)) ?? []
    ).slice(0, 5);

    return newestListings.map((listing, i) => (
      <ListingCard key={`new-listing-${i}`} {...listing} />
    ));
  };

  return (
    <div className={styles.root}>
      <div className={styles.header}>{title}</div>
      <div className={styles.items}>
        <div id={`scrollable-${identifier}`} className={styles.content}>
          <Cards />
        </div>
      </div>
    </div>
  );
};

export default ContentPreview;
