import { Link } from "react-router-dom";
import { routes } from "../App";

const Header = () => {
  return (
    <div className="header">
      <div>
        <h3>Pizzeria fratm</h3>
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
