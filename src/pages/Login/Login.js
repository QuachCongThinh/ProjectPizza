import React from "react";
import "../../pages/Login/style.scss";
import { FormLogin } from "../../components/FormLogin";

function Login() {
  return (
    <div className="login">
      <div className="img-wrapper">
        <img
          src="https://androthemes.com/themes/react/slices/assets/img/veg/11.png"
          alt="Bg"
        />
        <img
          src="http://androthemes.com/themes/react/slices/assets/img/prods/3.png"
          alt="pizza"
        />
      </div>
      <FormLogin />
    </div>
  );
}
export default Login;
