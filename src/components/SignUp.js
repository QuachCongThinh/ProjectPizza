import React from "react";
import { mockInfoSignUp as InfoSignUp } from "../data/InfoSignUp";

function SignUp() {
  return (
    <div className="section">
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
      <div className="container">
        {InfoSignUp.map((item) => (
          <div className="auth-wrapper">
            <div className="auth-description bg-cover bg-center dark-overlay dark-overlay-2">
              <div className="auth-description-inner">
                <>
                  <i class="flaticon-chili"></i>
                  <h2>{item.title}</h2>
                  <p>{item.description}</p>
                </>
              </div>
            </div>
            <div className="auth-form">
              <h2>{item.titleLogin}</h2>
              <form method="post">
                <div className="form-group">
                  <input
                    className="form-control form-control-light"
                    type="text"
                    placeholder="Use Name"
                  ></input>
                </div>
                <div className="form-group">
                  <input
                    className="form-control form-control-light"
                    type="email"
                    placeholder="Email Address"
                  ></input>
                </div>
                <div className="form-group">
                  <input
                    className="form-control form-control-light"
                    type="password"
                    placeholder="Password"
                  ></input>
                </div>
                <button type="submit" className="btn-custom">
                  SignUp
                </button>
                <div class="auth-seperator">
                  <span>OR</span>
                </div>
                <div class="social-login">
                  <button type="button" class="button-login facebook">
                    <i class="fab fa-facebook-f"></i>
                    Continue with Facebook
                  </button>
                  <button type="button" class="button-login google">
                    <i class="fab fa-google"></i>
                    Continue with Google
                  </button>
                </div>
                <p>
                  Already have an account?
                  <a href="/">Login</a>
                </p>
              </form>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default SignUp;
