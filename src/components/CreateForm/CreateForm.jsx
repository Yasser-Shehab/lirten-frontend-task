import "./CreateForm.scss";
import { Formik, Form } from "formik";
import Input from "../Input/Input";
import { FaEnvelope, FaUserAlt, FaUserTie } from "react-icons/fa";
import Button from "../Button/Button";
import * as Yup from "yup";
import Dropdown from "../Dropdown/Dropdown";

function CreateForm() {
  const validate = Yup.object({
    firstname: Yup.string()
      .max(15, "Cant be more than 15 Characters")
      .required("This field is Required"),
    lastname: Yup.string()
      .max(20, "Cant be more than 20 Characters")
      .required("This field is Required"),
    email: Yup.string().email("Email is Invalid"),
    jobTitle: Yup.string().max(20, "Cant be more than 20 Characters"),
  });
  return (
    <Formik
      initialValues={{
        firstname: "",
        lastname: "",
        email: "",
        jobTitle: "",
        country: "",
        state: "",
      }}
      validationSchema={validate}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {(formik) => (
        <div className="form-container">
          <div className="form-title">
            {console.log(formik.values)}
            <h1>Submit Profile</h1>

            <Form>
              <Input placeholder="First Name*" name="firstname" type="text">
                <FaUserAlt />
              </Input>
              <Input placeholder="Last Name*" name="lastname" type="text">
                <FaUserAlt />
              </Input>
              <Input placeholder="E-Mail" name="email" type="text">
                <FaEnvelope />
              </Input>
              <Input placeholder="Job Title" name="jobTitle" type="text">
                <FaUserTie />
              </Input>
              <Dropdown />
              <Button type="submit" valid={formik.isValid} />
            </Form>
          </div>
        </div>
      )}
    </Formik>
  );
}

export default CreateForm;
