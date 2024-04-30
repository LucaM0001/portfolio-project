import { ReactTyped } from "react-typed";
import "./header.css";
import { Link } from "react-bootstrap-icons";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header-wraper">
      <div className="main-info">
        <h1 className="text-warning text-uppercase fw-bold">
          web developpement and websites promotions
        </h1>
        <ReactTyped
          className="text-white fs-2 typed-text"
          strings={[
            "Web Design",
            "Web Development",
            "Facebook Ads SMM",
            "Google Ads",
          ]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />

        <NavLink
          to="/contacts"
          className="btn btn-outline-danger text-uppercase"
        >
          contact
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
