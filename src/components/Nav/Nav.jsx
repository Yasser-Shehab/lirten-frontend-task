import "./Nav.scss";
import logo from "../../assets/imgs/logo_light.svg";
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";

function Nav() {
  return (
    <>
      <nav className="nav-container">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="nav-links">
          <ul>
            <li>dasdsd</li>
            <li></li>
          </ul>
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default Nav;
