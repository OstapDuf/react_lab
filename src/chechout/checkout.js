import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import "./checkout.css";

export const CheckoutPage = () => {
  const navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    firstName: Yup.string()
      .max(20, "First name must be less than 20 characters")
      .required("First name is required"),
    lastName: Yup.string()
      .max(20, "Last name must be less than 20 characters")
      .required("Last name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    phone: Yup.string()
      .matches(/^[0-9]+$/, "Phone number must contain only digits")
      .min(10, "Phone number must be at least 10 digits")
      .required("Phone number is required"),
    address: Yup.string()
      .min(5, "Address must be at least 5 characters")
      .required("Address is required"),
  });

  const handleSubmit = (values) => {
    console.log("Form Values:", values);
    navigate("/success");
  };

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          address: "",
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form className="checkout-form">
            <div>
              <label htmlFor="firstName">First Name</label>
              <Field name="firstName" />
              <ErrorMessage name="firstName" component="div" className="error" />
            </div>
            <div>
              <label htmlFor="lastName">Last Name</label>
              <Field name="lastName" />
              <ErrorMessage name="lastName" component="div" className="error" />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <Field name="email" type="email" />
              <ErrorMessage name="email" component="div" className="error" />
            </div>
            <div>
              <label htmlFor="phone">Phone</label>
              <Field name="phone" />
              <ErrorMessage name="phone" component="div" className="error" />
            </div>
            <div>
              <label htmlFor="address">Address</label>
              <Field name="address" />
              <ErrorMessage name="address" component="div" className="error" />
            </div>
            <button type="submit" className="btn-submit">
              Continue
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
