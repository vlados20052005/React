import React, { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { updateContactInfo } from "../../store/contactSlice";
import { completeStep, setCurrentStep } from "../../store/stepsSlice";
import { RootState } from "../../store";
import styles from "./styles.module.scss";

export const Contact: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { completedSteps, currentStep } = useSelector(
    (state: RootState) => state.steps
  );

  const contactInfo = useSelector((state: RootState) => state.contact);

  useEffect(() => {
    if (!completedSteps.includes(1)) {
      navigate("/cart");
    }
  }, [completedSteps, navigate]);

  const validationSchema = Yup.object({
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    phone: Yup.string().required("Phone number is required"),
  });

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
          </Link>{"    "}
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
          <div className={styles.title}>Contact information</div>
          <Formik
            initialValues={{
              firstName: contactInfo.firstName || "",
              lastName: contactInfo.lastName || "",
              email: contactInfo.email || "",
              phone: contactInfo.phone || "",
            }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              dispatch(updateContactInfo(values));
              dispatch(completeStep(2));
              dispatch(setCurrentStep(3));
              navigate("/shipment");
            }}
          >
            <Form className={styles.form}>
              <div className={styles.up}>
                <div className={styles.inputBlock}>
                  <label htmlFor="firstName" className={styles.label}>
                    First name*
                  </label>
                  <Field
                    name="firstName"
                    type="text"
                    className={styles.input}
                    placeholder="Enter your first name"
                  />
                  <div className={styles.line}></div>
                  <ErrorMessage
                    name="firstName"
                    component="div"
                    className={styles.errorText}
                  />
                </div>
                <div className={styles.inputBlock}>
                  <label htmlFor="lastName" className={styles.label}>
                    Last name*
                  </label>
                  <Field
                    name="lastName"
                    type="text"
                    className={styles.input}
                    placeholder="Enter your last name"
                  />
                  <div className={styles.line}></div>
                  <ErrorMessage
                    name="lastName"
                    component="div"
                    className={styles.errorText}
                  />
                </div>
              </div>
              <div className={styles.down}>
                <div className={styles.inputBlock}>
                  <label htmlFor="email" className={styles.label}>
                    Email*
                  </label>
                  <Field
                    name="email"
                    type="email"
                    className={styles.input}
                    placeholder="Enter your email"
                  />
                  <div className={styles.line}></div>
                  <ErrorMessage
                    name="email"
                    component="div"
                    className={styles.errorText}
                  />
                </div>
                <div className={styles.inputBlock}>
                  <label htmlFor="phone" className={styles.label}>
                    Phone*
                  </label>
                  <Field
                    name="phone"
                    type="text"
                    className={styles.input}
                    placeholder="Enter your phone"
                  />
                  <div className={styles.line}></div>
                  <ErrorMessage
                    name="phone"
                    component="div"
                    className={styles.errorText}
                  />
                </div>
              </div>
              <button type="submit" className={styles.nextBtn}>
                Next step
              </button>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};
