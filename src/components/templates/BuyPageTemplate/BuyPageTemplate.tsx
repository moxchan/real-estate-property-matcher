import { BuyFilterForm } from "@/components/organisms";

import styles from "./BuyPageTemplate.module.css";

const BuyPageTemplate = () => {
  return (
    <div className={styles.root}>
      <BuyFilterForm />
    </div>
  );
};

export default BuyPageTemplate;
