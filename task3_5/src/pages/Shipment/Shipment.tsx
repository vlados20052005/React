import React from "react";
import { Link } from "react-router-dom";
import { Input } from "../../components/Input/Input";
import styles from "./styles.module.scss";

export const Shipment: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.path}>
          {"Cart > Contact information > Shipment information"}
        </div>
        <div className={styles.block}>
          <div className={styles.title}>Shipment information</div>
          <form action="" className={styles.form}>
            <Input
              label="Address (No P. O. Boxes)*"
              placeholder="Enter your address"
              type="text"
              htmlFor="address"
            />
            <br />
            <Input
              label="Apartment, suite etc. (optional)"
              placeholder="Enter your apartment information"
              type="text"
              htmlFor="apartment"
            />
            <br />
            <Input
              label="City*"
              placeholder="Enter your city"
              type="text"
              htmlFor="city"
            />
            <br />

            <div className={styles.inputs}>
              <Input
                label="Country/Region*"
                placeholder="Enter your country/region"
                type="text"
                htmlFor="country"
              />
              <Input
                label="State*"
                placeholder="Enter your State"
                type="text"
                htmlFor="state"
              />
              <Input
                label="ZIP code*"
                placeholder="Enter your ZIP code"
                type="text"
                htmlFor="zip"
              />
            </div>
          </form>
          <Link to="/check" className={styles.submit}>
          Submit order
          </Link>
        </div>
      </div>
    </div>
  );
};
