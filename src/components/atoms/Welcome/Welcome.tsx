"use client";

import styles from "./Welcome.module.css";

interface WelcomeProps {
  name?: string;
}

const Welcome = ({ name }: WelcomeProps) => {
  return (
    <div className={styles.root} suppressHydrationWarning>
      {`Welcome${name && ", " + name}`}
    </div>
  );
};

export default Welcome;
