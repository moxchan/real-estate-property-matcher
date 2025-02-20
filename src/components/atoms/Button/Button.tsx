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
  disabled?: boolean;
  selected?: boolean;
}

const Button = ({
  children,
  onClick,
  variant,
  expanded,
  icon,
  disabled,
  selected,
}: ButtonProps) => {
  return (
    <div
      className={clsx(styles.root, {
        [styles.primary]: variant === "primary",
        [styles.expanded]: !!expanded,
        [styles.disabled]: !!disabled,
        [styles.selected]: !!selected,
      })}
      onClick={onClick}
    >
      {icon}
      {children}
    </div>
  );
};

export default Button;
