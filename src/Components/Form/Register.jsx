import React from "react";
import "./login.css";

const Register = () => {
  return (
    <div className="login-section">
      <div className="container">
        <div className="row">
          <div className="login-form">
            <form>
              <h3>register</h3>

              <label>Your email address *</label>
              <input type="text" />

              <label>Password *</label>
              <input type="text" />

              <div className="policy">
                <p>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <span>privacy policy.</span></p>
              </div>

              <div className="chek-box flex">
                <div className="left flex">
                  <input type="checkbox" />
                  <label>I agree to the <span>privacy policy </span></label>
                </div>
              </div>

              <div className="btn">
                <a href="#">register</a>
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

export default Register;
