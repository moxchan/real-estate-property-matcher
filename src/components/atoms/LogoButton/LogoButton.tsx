"use client";

import clsx from "clsx";
import styles from "./LogoButton.module.css";
import { useRouter } from "next/navigation";

interface LogoButtonProps {
  mode?: "dark" | "light";
}

const LogoButton = ({ mode }: LogoButtonProps) => {
  const router = useRouter();

  const onClick = () => {
    router.push("/");
  };

  return (
    <div className={styles.root} onClick={onClick}>
      <span
        className={clsx({
          [styles.dark]: mode !== "light", // default,
          [styles.light]: mode === "light",
        })}
      >
        RealEstate
      </span>
      <span className={styles.hub}>Hub</span>
    </div>
  );
};

export default LogoButton;
