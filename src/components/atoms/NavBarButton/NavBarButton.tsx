"use client";

import { ReactNode } from "react";

import styles from "./NavBarButton.module.css";
import clsx from "clsx";

type Variant = "neutral" | "active";
interface NavBarButtonProps {
  text?: string;
  onClick?: () => void;
  children?: ReactNode;
  variant?: Variant;
  bold?: boolean;
}

const NavBarButton = ({
  text,
  onClick,
  children,
  variant,
  bold,
}: NavBarButtonProps) => {
  return (
    <div
      className={clsx(styles.root, {
        [styles.active]: variant === "active",
        [styles.bold]: !!bold,
      })}
      onClick={onClick}
    >
      <div className={styles.text}>
        {text}
        {children}
      </div>
    </div>
  );
};

export default NavBarButton;
