/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

interface FormInputProps {
  id: string;
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  formik?: any;
  className?: string;
}

const FormInput: React.FC<FormInputProps> = ({
  id,
  name,
  label,
  type = "text",
  placeholder = "",
  required = false,
  formik,
  className = "",
}) => {
  const hasError = formik?.touched?.[name] && formik?.errors?.[name];
  return (
    <div className="form-group">
      <label htmlFor={id} className="form-label">
        {label} {required && <span className="required-mark">*</span>}
      </label>

      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        value={formik?.values?.[name] ? String(formik.values[name]) : ""}
        onChange={formik?.handleChange}
        onBlur={formik?.handleBlur}
        className={`form-input ${hasError ? "error" : ""} ${className}`}
      />
      {hasError && formik?.errors?.[name] && (
        <div className="error-message">{formik.errors[name]?.toString()}</div>
      )}
    </div>
  );
};

export default FormInput;
