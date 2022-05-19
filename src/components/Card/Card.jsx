import "./Card.scss";
import gradientLine from "../../assets/imgs/gradient_line.svg";
import logo_dark from "../../assets/imgs/logo_dark.svg";

function Card() {
  return (
    <div className="card-contaienr">
      <div className="details">
        <h3>Youssef Samir</h3>
        <p>Software Engineer</p>
        <img src={gradientLine} />
      </div>
      <div className="info">
        <img src={logo_dark} />
        <ul>
          <li>+20 100 2222 444</li>
          <li>youssef@stract.com</li>
          <li>Cairo, Egypt.</li>
        </ul>
      </div>
    </div>
  );
}

export default Card;
