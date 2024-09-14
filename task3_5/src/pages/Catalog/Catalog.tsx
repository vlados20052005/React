import React, { useEffect, useState } from "react";
import { Card } from "../../components/Card/Card";
import styles from "./styles.module.scss";

interface Item {
  id: number;
  name: string;
  price: string;
  image: string;
}

export const Catalog: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => setItems(data))
      .catch((error) => console.error("Error loading data:", error));
  }, []);
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        {items.map((item: any) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};
