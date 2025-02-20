"use client";

import styles from "./LogoButton.module.css";
import { useRouter } from "next/navigation";

const LogoButton = () => {
  const router = useRouter();

  const onClick = () => {
    router.push("/");
  };

  return (
    <div className={styles.root} onClick={onClick}>
      RealEstateHub
    </div>
  );
};

export default LogoButton;
