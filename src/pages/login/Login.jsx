import React from "react";
import { Link } from "react-router-dom";
import Meta from "../../components/meta/Meta";
import BreadCrumbs from "../../components/breadcrumbs/BreadCrumbs";
import "./Login.scss";

const Login = () => {
  return (
    <>
      <Meta title={"Login"} />
      <BreadCrumbs title={"Login"} />
      <section className="login">
        <div className="container-xl">
          <div className="col-md-5 mx-auto">
            <div className="login-container">
              <h3>Login</h3>
              <div className="form-box">
                <form action="">
                  <div>
                    <input
                      type="text"
                      className="form-text"
                      placeholder="email"
                    />
                  </div>
                  <div>
                    <input
                      type="password"
                      className="form-password"
                      placeholder="password"
                    />
                  </div>
                </form>
              </div>
              <div className="login-prompt">
                <Link>Forgot The Password</Link>
              </div>
              <div className="btn-main button">
                <Link>Login</Link>
                <Link>Register</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
