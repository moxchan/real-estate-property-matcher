"use client";

import { LogoButton, NavBarButton } from "@/components/atoms";
import { IconBookmark, IconUserCircle } from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import { useAppStore } from "@/stores/useAppStore";

import styles from "./Navbar.module.css";

const Navbar = () => {
  const router = useRouter();
  const { user } = useAppStore();

  const onBuyClick = () => {
    router.push("/buy");
  };
  const onSellClick = () => {
    router.push("/sell");
  };

  const onSavedClick = () => {
    router.push("/saved");
  };
  const onProfileClick = () => {
    router.push("/profile");
  };

  return (
    <div className={styles.root}>
      <LogoButton />
      <div className={styles.cluster}>
        <NavBarButton text="Buy" onClick={onBuyClick} />
        <NavBarButton text="Sell" onClick={onSellClick} />
      </div>
      <div className={styles.cluster}>
        <NavBarButton onClick={onSavedClick}>
          <IconBookmark />
        </NavBarButton>
        {user ? (
          <NavBarButton onClick={onProfileClick}>
            <IconUserCircle />
          </NavBarButton>
        ) : (
          <NavBarButton text="Join" onClick={onProfileClick} variant="active" />
        )}
      </div>
    </div>
  );
};

export default Navbar;
