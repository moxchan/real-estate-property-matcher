"use client";

import { useEffect, useState } from "react";
import { HERO_IMAGE_COUNT } from "@/constants";

import hero0 from "../../../../public/images/hero/0.jpg";
import hero1 from "../../../../public/images/hero/1.jpg";
import hero2 from "../../../../public/images/hero/2.jpg";

import styles from "./Banner.module.css";
import { useListings } from "@/@utils/useListings";

const BannerImages = [hero0, hero1, hero2];

const Banner = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const { listings } = useListings();

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % HERO_IMAGE_COUNT);
    }, 5000);

    return () => clearInterval(interval);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className={styles.root}
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 0.65) 100%), url(${BannerImages[imageIndex].src})`,
      }}
    >
      <div className={styles.heading}>Find your next home today</div>
      <div className={styles.subheading}>
        {listings && (
          <span>
            Currently listing over{" "}
            <span className={styles.headingBold}>{`${
              listings?.length - 1
            } `}</span>
            properties for you to find
          </span>
        )}
      </div>
    </div>
  );
};

export default Banner;
