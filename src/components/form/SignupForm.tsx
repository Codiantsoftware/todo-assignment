import { useFormik } from "formik";
import React from "react";
import * as Yup from "yup";
import { SignupFormProps, SignupFormValues } from "../../types/user";
import FormInput from "../common/FormInput";

const SignupForm: React.FC<SignupFormProps> = ({ onSubmitSuccess }) => {
  const formik = useFormik<SignupFormValues>({
    initialValues: {
      name: "",
      email: "",
      contactNumber: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      contactNumber: Yup.string()
        .matches(/^\d+$/, "Contact number must only contain numbers")
        .length(10, "Contact number must be exactly 10 digits")
        .required("Contact number is required"),
    }),
    onSubmit: (values) => {
      if (onSubmitSuccess) {
        onSubmitSuccess(values);
      }
      formik.resetForm();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="form-section">
      <FormInput
        id="name"
        name="name"
        label="Name"
        formik={formik}
        required={true}
        placeholder="Enter your name"
      />

      <FormInput
        id="email"
        name="email"
        label="Email"
        type="email"
        formik={formik}
        required={true}
        placeholder="Enter your email"
      />

      <FormInput
        id="contactNumber"
        name="contactNumber"
        label="Contact Number"
        type="tel"
        formik={formik}
        required={true}
        placeholder="Enter your number"
      />

      <button
        type="submit"
        disabled={!(formik.isValid && formik.dirty)}
        className={`btn ${
          formik.isValid && formik.dirty ? "btn-secondary" : ""
        }`}
      >
        Submit
      </button>
    </form>
  );
};

export default SignupForm;
