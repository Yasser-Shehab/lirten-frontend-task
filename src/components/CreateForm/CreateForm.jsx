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
import { CountryDropdown, RegionDropdown, CountryRegionData } from "react-country-region-selector";
import { useParams } from "react-router-dom";
import spinner from "../../assets/imgs/spinner.gif";

function CreateForm() {
  const [initialValues, setInitialValues] = useState({
    firstname: "",
    lastname: "",
    email: "",
    jobTitle: "",
    country: "",
    state: "",
  });

  const { id } = useParams();
  console.log(id);
  const navigate = useNavigate();
  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("");
  const [loading, setLoading] = useState(true);

  const selectCountry = (val) => {
    setCountry(val);
  };

  const selectRegion = (val) => {
    setCountry(val);
  };

  useEffect(() => {
    if (id !== "0") {
      axios.get("http://localhost:4000/api/profile/" + id).then(({ data }) => {
        const { firstname, lastname, email, jobTitle, country, state } = data;
        setInitialValues({ firstname, lastname, email, jobTitle, country, state });

        setLoading(false);
        console.log(data);
      });
    } else {
      setLoading(false);
    }
  }, []);

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
  if (loading) {
    return (
      <div className="spinner-container">
        <img src={spinner} />
      </div>
    );
  }

  const handleDelete = () => {
    axios
      .delete("http://localhost:4000/api/profile/" + id)
      .then(() => {
        toast.success("Deleted Successfuly");
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.response.data);
        console.log(error);
      });
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validate}
      onSubmit={async (values) => {
        if (id !== "0") {
          axios
            .put("http://localhost:4000/api/profile/" + id, values)
            .then(() => {
              toast.success("Updated Successfuly");
              navigate("/");
            })
            .catch((error) => {
              toast.error(error.response.data);
              console.log(error);
            });
          return;
        }
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
              <Input
                placeholder="First Name*"
                value={initialValues.name}
                name="firstname"
                type="text"
              >
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
              <Button type="submit" title={id !== "0" ? "EDIT" : "SUBMIT"} valid={formik.isValid} />

              {id !== "0" && (
                <Button
                  type="button"
                  onDelete={handleDelete}
                  title="DELETE"
                  valid={formik.isValid}
                />
              )}
            </Form>
          </div>
        </div>
      )}
    </Formik>
  );
}

export default CreateForm;
