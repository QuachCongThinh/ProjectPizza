import React from "react";
import "../../pages/SignUp/style.scss";
import { FormSignUp } from "../../components/FormSignUp";

function SignUp() {
  return (
    <div className="signUp">
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
      <FormSignUp />
    </div>
  );
}
export default SignUp;
