import { useNavigate } from "react-router-dom";

const Logout = ({ setIsLoggedIn }) => {
  setIsLoggedIn(false);
  const navigate = useNavigate();
  navigate("/");
};

export default Logout;
