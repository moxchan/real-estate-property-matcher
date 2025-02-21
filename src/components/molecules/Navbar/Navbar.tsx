"use client";

import { LogoButton, NavBarButton } from "@/components/atoms";
import { IconUserCircle } from "@tabler/icons-react";
import { useRouter } from "next/navigation";

import styles from "./Navbar.module.css";
import { toast } from "react-toastify";

const Navbar = () => {
  const router = useRouter();

  const onBuyClick = () => {
    router.push("/buy");
  };
  const onSellClick = () => {
    router.push("/sell");
  };

  const onContactClick = () => {
    toast.info("You already have my email :)");
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
        <NavBarButton text="Contact" onClick={onContactClick} />
        <NavBarButton onClick={onProfileClick}>
          <IconUserCircle />
        </NavBarButton>
      </div>
    </div>
  );
};

export default Navbar;
