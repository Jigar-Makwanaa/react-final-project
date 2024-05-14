import React from "react";
import "./login.css";

const Login = () => {
  return (
    <div className="login-section">
      <div className="container">
        <div className="row">
          <div className="login-form">
            <form>
              <h3>Login</h3>

              <label>Username or email address *</label>
              <input type="text" />

              <label>Password *</label>
              <input type="text" />

              <div className="chek-box flex">
                <div className="left flex">
                  <input type="checkbox" />
                  <label>Remember me</label>
                </div>
                <div className="right">
                  <a href="#">Last your password?</a>
                </div>
              </div>

              <div className="btn">
                <a href="#">Login</a>
              </div>

              <div className="social">
                <p>Sign in with social account</p>

                <ul className="flex">
                  <li className="f-book">
                    <i class="fa-brands fa-facebook-f"></i>
                  </li>
                  <li className="twitter">
                    <i class="fa-brands fa-twitter"></i>
                  </li>
                  <li className="google">
                    <i class="fa-brands fa-google"></i>
                  </li>
                </ul>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
