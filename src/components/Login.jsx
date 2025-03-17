import { useNavigate } from "react-router-dom";
const Login = ({ setIsLoggedIn }) => {
  setIsLoggedIn(true);
  const navigate = useNavigate();
  navigate("/dashboard");
};

export default Login;
