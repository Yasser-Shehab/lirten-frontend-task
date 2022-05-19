import "./Create.scss";
import plus from "../../assets/imgs/plus.svg";
import { NavLink } from "react-router-dom";

function Create() {
  return (
    <NavLink to="add">
      <div className="create-container">
        <img src={plus} className="create-icon" />
      </div>
    </NavLink>
  );
}

export default Create;
