import "./Dropdown.scss";
import { useEffect } from "react";
import { useField, ErrorMessage } from "formik";

const Dropdown = ({ label, setSelectedCountry, ...props }) => {
  const [field, meta, helpers] = useField(props);

  //Updating in form component based on value of country change
  useEffect(() => {
    if (label === "Select Country") setSelectedCountry(field.value);
  }, [field]);

  return (
    <div className="dropdown-container">
      <select
        {...field}
        {...props}
        className={`form-input ${meta.touched && meta.error && "is-invalid"}`}
      />
      <div className="error__msg">
        <ErrorMessage name={field.name} />
      </div>
    </div>
  );
};

export default Dropdown;
