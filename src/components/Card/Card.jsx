import "./Card.scss";
import gradientLine from "../../assets/imgs/gradient_line.svg";
import logo_dark from "../../assets/imgs/logo_dark.svg";

function Card({ firstname, lastname, job, email, country, state }) {
  return (
    <div className="card-contaienr">
      <div className="details">
        <h3>
          {firstname} {lastname}
        </h3>
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
