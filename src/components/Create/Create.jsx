import "./Create.scss";
import plus from "../../assets/imgs/plus.svg";
import { Link } from "react-router-dom";

function Create() {
  return (
    <Link to={`add/${0}`}>
      <div className="create-container">
        <img src={plus} className="create-icon" />
      </div>
    </Link>
  );
}

export default Create;
