import { ContentPreview } from "@/components/molecules";

import styles from "./HomePage.module.css";
import { Banner } from "@/components/atoms";

const HomePage = () => {
  return (
    <div className={styles.root}>
      <Banner />
      <ContentPreview title={"Newest Listings"} variant="newest-listings" />
    </div>
  );
};

export default HomePage;
