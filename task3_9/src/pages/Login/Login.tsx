import { useNavigate } from "react-router-dom";

import "./Login.scss";

import Button from "components/Button/Button";
import GoogleIcon from "components/Icons/GoogleIcon/GoogleIcon";

import logo from "../../assets/logo.svg";

const Login = () => {
  const navigate = useNavigate();
  const handleLogin = () => {
    localStorage.setItem("isAuthenticated", "true");
    navigate("/calendar");
  };

  return (
    <div className={"login_wrapper"}>
      <div className={"login"}>
        <figure className={"login_logo"}>
          <img alt={"Logo"} src={logo} />
        </figure>
        <Button
          variant={"secondary"}
          onClick={handleLogin}
          children={"Continue with Google"}
          startIcon={<GoogleIcon />}
        />
      </div>
    </div>
  );
};

export default Login;
