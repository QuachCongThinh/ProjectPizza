import React from "react";
import { mockInfoSignUp as InfoLogin } from "../data/InfoSignUp";

export function FormLogin() {
  return (
    <div className="container">
      {InfoLogin.map((item) => (
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
                  type="password"
                  placeholder="Password"
                ></input>
              </div>
              <a href="/">Forget Password ?</a>
              <button type="submit" className="btn-custom">
                Login
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
                Don't have an account?
                <a href="/">Creact One</a>
              </p>
            </form>
          </div>
        </div>
      ))}
    </div>
  );
}
