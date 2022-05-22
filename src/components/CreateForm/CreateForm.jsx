import "./CreateForm.scss";
import { Formik, Form } from "formik";
import Input from "../Input/Input";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FaEnvelope, FaUserAlt, FaUserTie, FaFlag, FaSearchLocation } from "react-icons/fa";
import Button from "../Button/Button";
import * as Yup from "yup";
import axios from "axios";
import Dropdown from "../Dropdown/Dropdown";
import { useParams } from "react-router-dom";
import spinner from "../../assets/imgs/spinner.gif";
import { useQuery } from "react-query";

function CreateForm() {
  const [initialValues, setInitialValues] = useState({
    firstname: "",
    lastname: "",
    email: "",
    jobTitle: "",
    country: "",
    state: "",
  });
  const [countries, setcountries] = useState([]);
  const [selectedState, setSelectedState] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();

  //Fetching Countries once and Caching them to Prevent Re-fetching on Re-rendering
  const { isError } = useQuery("countries", async () => {
    let requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    const { data } = await axios("https://countriesnow.space/api/v0.1/countries", requestOptions);
    setcountries(data.data);
    return data;
  });

  useEffect(() => {
    if (id !== "0") {
      axios.get("http://localhost:4000/api/profile/" + id).then(({ data }) => {
        const { firstname, lastname, email, jobTitle, country, state } = data;
        setInitialValues({ firstname, lastname, email, jobTitle, country, state });
        setLoading(false);
      });
    } else {
      setLoading(false);
    }
  }, [id]);

  //Form Validation Schema Using Yup
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

  if (isError) {
    return <h1>Could not fetch Countries and State Data</h1>;
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

  //Get Index Of Selected Country
  let countryIndex = countries.findIndex((object) => {
    return object.country === selectedCountry;
  });
  let citiesFromCountryIndex = countries[countryIndex];

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
                <Dropdown
                  name="country"
                  label="Select Country"
                  selectedCountry={selectedCountry}
                  setSelectedCountry={setSelectedCountry}
                  icon={<FaFlag />}
                >
                  <option value="">Country*</option>
                  {countries.map((c, index) => (
                    <option key={index} value={c.country}>
                      {c.country}
                    </option>
                  ))}
                </Dropdown>
                <Dropdown
                  name="state"
                  label="Select State"
                  icon={<FaSearchLocation />}
                  selectedState={selectedState}
                  setSelectedState={setSelectedState}
                >
                  <option value="">State*</option>
                  {countryIndex !== -1
                    ? citiesFromCountryIndex.cities.map((city, index) => (
                        <option key={index} value={city}>
                          {city}
                        </option>
                      ))
                    : null}
                </Dropdown>
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
