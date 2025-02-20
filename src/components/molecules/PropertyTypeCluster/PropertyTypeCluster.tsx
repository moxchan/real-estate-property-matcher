import { PropertyType } from "@/@types/listing";
import { Button } from "@/components/atoms";
import {
  IconBuildings,
  IconBuildingSkyscraper,
  IconHome2,
} from "@tabler/icons-react";

import styles from "./PropertyTypeCluster.module.css";

interface PropertyTypeClusterProps {
  type: PropertyType | undefined;
  setType: (type: PropertyType) => void;
}

const PropertyTypeCluster = ({ type, setType }: PropertyTypeClusterProps) => {
  return (
    <div className={styles.root}>
      <Button
        icon={<IconHome2 />}
        onClick={() => setType("house")}
        selected={type === "house"}
        expanded
      >
        House
      </Button>
      <Button
        icon={<IconBuildingSkyscraper />}
        onClick={() => setType("apartment")}
        selected={type === "apartment"}
        expanded
      >
        Apartment
      </Button>
      <Button
        icon={<IconBuildings />}
        onClick={() => setType("condo")}
        selected={type === "condo"}
        expanded
      >
        Condo
      </Button>
    </div>
  );
};

export default PropertyTypeCluster;
