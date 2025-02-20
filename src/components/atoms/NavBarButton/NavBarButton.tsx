import { ReactNode } from "react";
import styles from "./NavBarButton.module.css";

interface NavBarButtonProps {
  text?: string;
  onClick?: () => void;
  children?: ReactNode;
}

const NavBarButton = ({ text, onClick, children }: NavBarButtonProps) => {
  return (
    <div className={styles.root} onClick={onClick}>
      <div className={styles.text}>
        {text}
        {children}
      </div>
    </div>
  );
};

export default NavBarButton;
