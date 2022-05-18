import { Link } from "react-router-dom";
import { routes } from "../App";
import logo from "../assets/logo-fratm.png";

const Header = () => {
  return (
    <header className="header">
      <div className="navbar navbar-expand-lg" style={{width: "100%", paddingRight: "10px"}}>
        <div className="container-fluid">
          <div className="navbar-brand">
            <img src={logo} alt="" width={200} />
          </div>
          <div className="collapse navbar-collapse d-flex justify-content-end">
            <ul className="navbar-nav" style={{ listStyleType: "none" }}>
              {routes.map((route, index) => (
                <li className="nav-item">
                  <Link
                    to={route.path}
                    key={index}
                    className="nav-link"
                    style={{ fontSize: "24px"}}
                  >
                    {route.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
