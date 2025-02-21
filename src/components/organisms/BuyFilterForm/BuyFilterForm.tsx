import { useBuyFilter } from "@/@utils/useBuyFilter";
import { Button } from "@/components/atoms";
import {
  IconBath,
  IconBed,
  IconCar,
  IconCoin,
  IconMapPin,
  IconSearch,
} from "@tabler/icons-react";
import { PropertyTypeCluster } from "@/components/molecules";

import styles from "./BuyFilterForm.module.css";

const BuyFilterForm = () => {
  const {
    setLocation,
    setBudgetLow,
    setBudgetHigh,
    setType,
    setBeds,
    setBaths,
    setCarparks,
    performSearch,
  } = useBuyFilter();
  return (
    <div className={styles.root}>
      <div className={styles.header}>Finding your new home</div>
      <div className={styles.section}>
        <div className={styles.sectionTitle}>Property Type</div>
        <PropertyTypeCluster type={undefined} setType={setType} />
      </div>
      <div className={styles.section}>
        <div className={styles.sectionTitle}>Listing Details</div>

        <div className={styles.inputCluster}>
          <IconMapPin size={30} />
          <input
            className={styles.input}
            placeholder="Property Location..."
            onChange={(e) => setLocation(e.target.value)}
            maxLength={50} // Arbitrary. Keeps cards looking clean
          ></input>
        </div>
        <div className={styles.inputCluster}>
          <IconCoin size={30} />
          <input
            placeholder="Min Price ($)"
            onChange={(e) => {
              setBudgetLow(+e.target.value);
            }}
            type="number"
            step={1000}
            min={0}
          ></input>
          <input
            placeholder="Max Price ($)"
            onChange={(e) => {
              setBudgetHigh(+e.target.value);
            }}
            type="number"
            step={1000}
            min={0}
          ></input>
        </div>
      </div>
      <div className={styles.section}>
        <div className={styles.sectionTitle}>Property Details</div>
        <div className={styles.inputCluster}>
          <IconBed size={30} />
          <input
            placeholder="No. of Bedrooms"
            onChange={(e) => {
              setBeds(+e.target.value);
            }}
            type="number"
            step={1}
            min={0}
          ></input>
        </div>
        <div className={styles.inputCluster}>
          <IconBath size={30} />
          <input
            placeholder="No. of Bathrooms"
            onChange={(e) => {
              setBaths(+e.target.value);
            }}
            type="number"
            step={1}
            min={0}
          ></input>
        </div>
        <div className={styles.inputCluster}>
          <IconCar size={30} />
          <input
            placeholder="No. of Car Parks"
            onChange={(e) => {
              setCarparks(+e.target.value);
            }}
            type="number"
            step={1}
            min={0}
          ></input>
        </div>
      </div>
      <Button icon={<IconSearch />} variant="primary" onClick={performSearch}>
        Search
      </Button>
    </div>
  );
};

export default BuyFilterForm;
