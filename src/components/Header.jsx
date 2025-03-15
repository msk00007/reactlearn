import "../css/Header.css";
import myImg from "../../public/mobile.jpeg";
const Header = () => {
  return (
    <>
      <div className="header">
        <img src={myImg} alt="My Image" />
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
        </ul>
      </div>
    </>
  );
};
export default Header;
