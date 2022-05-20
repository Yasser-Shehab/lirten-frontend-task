import "./Input.scss";
import { ErrorMessage, useField } from "formik";

function Input({ children, ...props }) {
  const [field, meta] = useField(props);
  return (
    <div className="form-group">
      <input
        {...props}
        {...field}
        className={`form-input ${meta.touched && meta.error && "is-invalid"}`}
      />
      <span>{children}</span>
      <div className="error__msg">
        <ErrorMessage name={field.name} />
      </div>
    </div>
  );
}

export default Input;
