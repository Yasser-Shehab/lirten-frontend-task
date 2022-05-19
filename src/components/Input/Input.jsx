import "./Input.scss";
import { useField } from "formik";

function Input({ children, ...props }) {
  const [field, meta] = useField(props);
  console.log(field, meta);
  return (
    <div className="form-group">
      <input {...props} />
      <span>{children}</span>
    </div>
  );
}

export default Input;
