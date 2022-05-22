import "./Dropdown.scss";
import { useEffect } from "react";
import { useField, ErrorMessage } from "formik";

const Dropdown = ({
  icon,
  label,
  selectedCountry,
  setSelectedCountry,
  setSelectedState,
  selectedState,
  ...props
}) => {
  const [field, meta] = useField(props);

  //Updating in form component based on value of country change
  useEffect(() => {
    if (label === "Select Country") setSelectedCountry(field.value);
    if (label === "Select State") setSelectedState(field.value);
  }, [field]);
  return (
    <div className="dropdown-container">
      <select
        {...field}
        {...props}
        className={`form-input ${meta.touched && meta.error && "is-invalid"} ${
          selectedCountry !== "" && selectedState !== "" ? "active-dropdown" : null
        }`}
      />
      <div className="icon">{icon}</div>
      <div className="error__msg">
        <ErrorMessage name={field.name} />
      </div>
    </div>
  );
};

export default Dropdown;
