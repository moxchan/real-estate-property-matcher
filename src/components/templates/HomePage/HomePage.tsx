import { ContentPreview } from "@/components/molecules";

import styles from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={styles.root}>
      <ContentPreview title={"Newest Listings"} variant="newest-listings" />
    </div>
  );
};

export default HomePage;
