import React from "react";
import { Card } from "../../components/Card/Card";
import styles from "./styles.module.scss";

export const Catalog: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};
