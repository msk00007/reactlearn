import "../css/Header.css";
import myImg from "../../public/mobile.jpeg";
import { Link } from "react-router-dom";
const Header = ({ isLoggedIn }) => {
  return (
    <>
      <div className="header">
        <img src={myImg} alt="My Image" />
        <ul>
          {isLoggedIn ? (
            <>
              <li>
                <Link to="/logout">Logout</Link>
              </li>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/register">Register</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </>
  );
};
export default Header;
