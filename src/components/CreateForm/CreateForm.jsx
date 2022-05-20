import "./CreateForm.scss";
import { Formik, Form, Field } from "formik";
import Input from "../Input/Input";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { FaEnvelope, FaUserAlt, FaUserTie, FaFlag, FaSearchLocation } from "react-icons/fa";
import Button from "../Button/Button";
import * as Yup from "yup";
import axios from "axios";
import Dropdown from "../Dropdown/Dropdown";
import { createProfile, reset } from "../../store/slices/profileSlice";

function CreateForm() {
  const navigate = useNavigate();

  const validate = Yup.object({
    firstname: Yup.string()
      .max(15, "Cant be more than 15 Characters")
      .required("This field is Required"),
    lastname: Yup.string()
      .max(20, "Cant be more than 20 Characters")
      .required("This field is Required"),
    email: Yup.string().email("Email is Invalid").required("Email is Required"),
    jobTitle: Yup.string().max(20, "Cant be more than 20 Characters"),
    country: Yup.string().required("This field is Required"),
    state: Yup.string().required("This field is Required"),
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
      onSubmit={async (values) => {
        axios
          .post("http://localhost:4000/api/profile/", values)
          .then(() => {
            toast.success("Created Successfuly");
            navigate("/");
          })
          .catch((error) => {
            toast.error(error.response.data);
            console.log(error);
          });
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
              <Input placeholder="E-Mail*" name="email" type="text">
                <FaEnvelope />
              </Input>
              <Input placeholder="Job Title" name="jobTitle" type="text">
                <FaUserTie />
              </Input>
              <div className="countires-container">
                <Input placeholder="Country*" name="country" type="text">
                  <FaFlag />
                </Input>
                <Input placeholder="States" name="state" type="text">
                  <FaSearchLocation />
                </Input>
              </div>

              <Button type="submit" valid={formik.isValid} />
            </Form>
          </div>
        </div>
      )}
    </Formik>
  );
}

export default CreateForm;
