import { ReactNode } from "react";
import styles from "./Button.module.css";
import clsx from "clsx";

type ButtonVariant = "primary" | "secondary";

interface ButtonProps {
  children?: ReactNode;
  onClick?: () => void;
  variant?: ButtonVariant;
  expanded?: boolean;
  icon?: ReactNode;
}

const Button = ({
  children,
  onClick,
  variant,
  expanded,
  icon,
}: ButtonProps) => {
  return (
    <div
      className={clsx(styles.root, {
        [styles.primary]: variant === "primary",
        [styles.expanded]: !!expanded,
      })}
      onClick={onClick}
    >
      {icon}
      {children}
    </div>
  );
};

export default Button;
