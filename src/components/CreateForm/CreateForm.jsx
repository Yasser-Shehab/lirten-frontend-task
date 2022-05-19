import "./CreateForm.scss";
import { Formik, Form } from "formik";
import Input from "../Input/Input";
import { FaEnvelope, FaUserAlt, FaUserTie } from "react-icons/fa";

function CreateForm() {
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
    >
      {(formik) => (
        <div className="form-container">
          <div className="form-title">
            {console.log(formik)}
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
            </Form>
          </div>
        </div>
      )}
    </Formik>
  );
}

export default CreateForm;
