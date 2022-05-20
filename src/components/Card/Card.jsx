import "./Card.scss";
import gradientLine from "../../assets/imgs/gradient_line.svg";
import logo_dark from "../../assets/imgs/logo_dark.svg";
import { Link } from "react-router-dom";

function Card({ firstname, lastname, job, email, country, state, id }) {
  return (
    <div className="card-contaienr">
      <div className="details">
        <Link to={`add/${id}`}>
          <h3>
            {firstname} {lastname}
          </h3>
        </Link>

        <p>{job}</p>
        <img src={gradientLine} />
      </div>
      <div className="info">
        <img src={logo_dark} />
        <ul>
          <li>{email}</li>
          <div className="address-info">
            <li>{country},</li>
            <li>{state}</li>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default Card;
