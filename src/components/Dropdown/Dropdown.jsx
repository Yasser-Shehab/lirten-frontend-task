import "./Dropdown.scss";
import { ErrorMessage, useField } from "formik";
import { useState, useEffect } from "react";

function Dropdown({ type, ...props }) {
  const [field, meta] = useField(props);
  const contries = [
    { id: "1", name: "Egypt" },
    { id: "2", name: "Bahrain" },
    { id: "3", name: "Germany" },
  ];
  const states = [
    { id: "1", countryId: "1", name: "Cairo" },
    { id: "2", countryId: "1", name: "Aswan" },
    { id: "3", countryId: "1", name: "Alexandria" },
    { id: "4", countryId: "1", name: "Damietta " },
    { id: "5", countryId: "1", name: "Faiyum" },
    { id: "6", countryId: "1", name: "Beni Suef" },
    { id: "7", countryId: "2", name: "Capital Governorate" },
    { id: "8", countryId: "2", name: "Muharraq Governorate" },
    { id: "9", countryId: "2", name: "Northern Governorate" },
    { id: "10", countryId: "2", name: "Southern Governorate" },
  ];
  const [country, setCountry] = useState([]);
  const [state, setState] = useState([]);

  useEffect(() => {
    setCountry(contries);
  }, []);

  const handleCountry = (id) => {
    const dt = states.filter((country) => country.countryId === id);
    setState(dt);
  };

  if (type === "country") {
    return (
      <div className="drop-container">
        <div className="select-input">
          <select {...field} {...props} onChange={(e) => handleCountry(e.target.value)}>
            <option value="0">Select Country</option>

            {country.map((ctr, index) => {
              return (
                <option key={index} value={ctr.name} country_id={ctr.id}>
                  {ctr.name}
                </option>
              );
            })}
          </select>
        </div>
      </div>
    );
  }
  if (type === "state") {
    return (
      <div className="drop-container">
        <div className="select-input">
          <select {...field} {...props}>
            {state.map((state, index) => {
              return (
                <option key={index} value={state.name} country_id={state.countryId}>
                  {state.name}
                </option>
              );
            })}
          </select>
        </div>
      </div>
    );
  }
}

export default Dropdown;
