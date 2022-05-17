import { Link } from "react-router-dom";
import { routes } from "../App";
import logo from "../assets/logo-fratm.png"

const Header = () => {
  return (
    <div className="header">
      <div>
        <img src={logo} alt="" width={200} />
      </div>
      {routes.map((route, index) => (
        <Link to={route.path} key={index}>
          {route.name}
        </Link>
      ))}
    </div>
  );
};
export default Header;
