import React from "react";
import Meta from "../../components/meta/Meta";
import BreadCrumbs from "../../components/breadcrumbs/BreadCrumbs";
import { Link } from "react-router-dom";

const ResetPass = () => {
  return (
    <>
      <Meta title={"Reset Password"} />
      <BreadCrumbs title={"Reset Password"} />
      <section className="login">
        <div className="container-xl">
          <div className="col-md-5 mx-auto">
            <div className="login-container">
              <h3>Reset Password</h3>
              <div className="form-box">
                <form action="">
                  <div>
                    <input
                      name="password"
                      type="password"
                      className="form-password"
                      placeholder="password"
                    />
                  </div>

                  <div>
                    <input
                      type="password"
                      name="confirm password"
                      className="form-password"
                      placeholder="confirm password"
                    />
                  </div>
                </form>
              </div>

              <div className="btn-main button">
                <Link>Create New</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ResetPass;
