import "./Nav.scss";
import logo from "../../assets/imgs/logo_light.svg";
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";

function Nav() {
  return (
    <>
      <nav className="nav-container">
        <div className="nav-wrapper">
          <div className="logo">
            <NavLink to="/">
              <img src={logo} alt="logo" />
            </NavLink>
          </div>
          <div className="nav-links">
            <ul>
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) => (isActive ? "purple-grad" : undefined)}
                >
                  PROFILES
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={`add/${0}`}
                  className={({ isActive }) => (isActive ? "purple-grad" : undefined)}
                >
                  ADD PROFILE
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default Nav;
