import React, { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { updateShipmentInfo } from "../../store/shipmentSlice";
import { completeStep, resetSteps } from "../../store/stepsSlice";
import { RootState } from "../../store";
import styles from "./styles.module.scss";

export const Shipment: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { completedSteps, currentStep } = useSelector(
    (state: RootState) => state.steps
  );

  const shipmentInfo = useSelector((state: RootState) => state.shipment);

  useEffect(() => {
    if (!completedSteps.includes(2)) {
      navigate("/contact");
    }
  }, [completedSteps, navigate]);

  const validationSchema = Yup.object({
    address: Yup.string().required("Address is required"),
    apartment: Yup.string(),
    city: Yup.string().required("City is required"),
    country: Yup.string().required("Country is required"),
    state: Yup.string().required("State is required"),
    zip: Yup.string().required("ZIP code is required"),
  });

  // Функція для отримання класу активного шляху

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.path}>
          <Link
            to="/cart"
            className={
              currentStep === 1 ? styles.activeLink : styles.defaultLink
            }
          >
            Cart
          </Link>
          {"    "}
          &gt;
          {currentStep >= 2 ? (
            <Link
              to="/contact"
              className={
                currentStep === 2 ? styles.activeLink : styles.defaultLink
              }
            >
              Contact information
            </Link>
          ) : (
            <span className={styles.disabled}>Contact information</span>
          )}{" "}
          &gt;
          {currentStep >= 3 ? (
            <Link
              to="/shipment"
              className={
                currentStep === 3 ? styles.activeLink : styles.defaultLink
              }
            >
              Shipment information
            </Link>
          ) : (
            <span className={styles.disabled}>Shipment information</span>
          )}
        </div>
        <div className={styles.block}>
          <div className={styles.title}>Shipment information</div>
          <Formik
            initialValues={{
              address: shipmentInfo.address || "",
              apartment: shipmentInfo.apartment || "",
              city: shipmentInfo.city || "",
              country: shipmentInfo.country || "",
              state: shipmentInfo.state || "",
              zip: shipmentInfo.zip || "",
            }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              dispatch(updateShipmentInfo(values));
              dispatch(completeStep(3));
              dispatch(resetSteps());
              navigate("/check");
            }}
          >
            <Form className={styles.form}>
              <div className={styles.inputBlock}>
                <label htmlFor="address" className={styles.label}>
                  Address (No P. O. Boxes)*
                </label>
                <Field
                  name="address"
                  type="text"
                  className={styles.input}
                  placeholder="Enter your address"
                />
                <div className={styles.line}></div>
                <ErrorMessage
                  name="address"
                  component="div"
                  className={styles.errorText}
                />
              </div>
              <div className={styles.inputBlock}>
                <label htmlFor="apartment" className={styles.label}>
                  Apartment, suite etc. (optional)
                </label>
                <Field
                  name="apartment"
                  type="text"
                  className={styles.input}
                  placeholder="Enter your apartment information"
                />
                <div className={styles.line}></div>
                <ErrorMessage
                  name="apartment"
                  component="div"
                  className={styles.errorText}
                />
              </div>
              <div className={styles.inputBlock}>
                <label htmlFor="city" className={styles.label}>
                  City*
                </label>
                <Field
                  name="city"
                  type="text"
                  className={styles.input}
                  placeholder="Enter your city"
                />
                <div className={styles.line}></div>
                <ErrorMessage
                  name="city"
                  component="div"
                  className={styles.errorText}
                />
              </div>
              <div className={styles.inputs}>
                <div className={styles.inputBlock}>
                  <label htmlFor="country" className={styles.label}>
                    Country/Region*
                  </label>
                  <Field
                    name="country"
                    type="text"
                    className={styles.input}
                    placeholder="Enter your country/region"
                  />
                  <div className={styles.line}></div>
                  <ErrorMessage
                    name="country"
                    component="div"
                    className={styles.errorText}
                  />
                </div>
                <div className={styles.inputBlock}>
                  <label htmlFor="state" className={styles.label}>
                    State*
                  </label>
                  <Field
                    name="state"
                    type="text"
                    className={styles.input}
                    placeholder="Enter your state"
                  />
                  <div className={styles.line}></div>
                  <ErrorMessage
                    name="state"
                    component="div"
                    className={styles.errorText}
                  />
                </div>
                <div className={styles.inputBlock}>
                  <label htmlFor="zip" className={styles.label}>
                    ZIP code*
                  </label>
                  <Field
                    name="zip"
                    type="text"
                    className={styles.input}
                    placeholder="Enter your ZIP code"
                  />
                  <div className={styles.line}></div>
                  <ErrorMessage
                    name="zip"
                    component="div"
                    className={styles.errorText}
                  />
                </div>
              </div>
              <button type="submit" className={styles.submit}>
                Submit order
              </button>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};
