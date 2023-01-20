import React from "react";
import { Link } from "react-router-dom";
import Container from "../../components/container/Container";
import "../login/Login.scss";

const ForgotPass = () => {
  return (
    <section className="login">
      <Container className="container-xl">
        <div className="col-md-5 mx-auto">
          <div className="login-container text-center">
            <h3 className="text-danger pb-2">Reset Your Password</h3>
            <p className="text-success">
              We Will Send You An Email To Reset Your Password
            </p>
            <div className="form-box ">
              <form action="">
                <div>
                  <input
                    type="text"
                    className="form-text"
                    placeholder="email"
                  />
                </div>
              </form>
            </div>

            <div className="btn-main button">
              <Link>Submit</Link>
            </div>
            <div className="text-center">
              <Link to="/login" className="text-success">
                Cansel
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ForgotPass;
