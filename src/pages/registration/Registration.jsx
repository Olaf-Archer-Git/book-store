import React from "react";
import Meta from "../../components/meta/Meta";
import BreadCrumbs from "../../components/breadcrumbs/BreadCrumbs";
import { Link } from "react-router-dom";
const Registration = () => {
  return (
    <>
      <Meta title={"Registration"} />
      <BreadCrumbs title={"Registration"} />
      <section className="login">
        <div className="container-xl">
          <div className="col-md-5 mx-auto">
            <div className="login-container">
              <h3>Registration</h3>
              <div className="form-box">
                <form action="">
                  <div>
                    <input
                      type="text"
                      className="form-text"
                      placeholder="First Name"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      className="form-text"
                      placeholder="Last Name"
                    />
                  </div>
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

              <div className="btn-main button">
                <Link>Create</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Registration;
