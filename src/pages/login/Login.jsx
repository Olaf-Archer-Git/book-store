import React from "react";
import { Link } from "react-router-dom";
import Meta from "../../components/meta/Meta";
import BreadCrumbs from "../../components/breadcrumbs/BreadCrumbs";
import CustomInput from "../../components/customInput/CustomInput";
import { useFormik } from "formik";
import * as yup from "yup";
import CustomButton from "../../components/button/CustomButton";
import { useDispatch } from "react-redux";
import { userLogin } from "../../features/user/userSlice";
import "./Login.scss";

const Login = () => {
  const dispatch = useDispatch();

  let loginSchema = yup.object({
    email: yup
      .string()
      .email("Email Should Be Valid")
      .required("Email Is Required"),
    password: yup
      .string()
      .required("Password Is Required")
      .min(5, "Must Contain At Least 5 Characters"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: (values) => {
      dispatch(userLogin(values));
    },
  });
  return (
    <>
      <Meta title={"Login"} />
      <BreadCrumbs title={"Login"} />
      <section className="login">
        <div className="col-md-5 mx-auto">
          <div className="login-container">
            <h3>Login</h3>

            <form onSubmit={formik.handleSubmit} className="form-box">
              <div>
                <CustomInput
                  type="email"
                  name="email"
                  placeholder="Email"
                  formikValue={formik.values.email}
                  formikHandler={formik.handleChange("email")}
                />
                <div className="input-error">
                  {formik.touched.email && formik.errors.email}
                </div>
              </div>
              <div>
                <CustomInput
                  type="password"
                  name="password"
                  placeholder="Password"
                  formikValue={formik.values.password}
                  formikHandler={formik.handleChange("password")}
                />
                <div className="input-error">
                  {formik.touched.password && formik.errors.password}
                </div>
              </div>

              <div style={{ display: "flex", justifyContent: "center" }}>
                <CustomButton
                  type="submit"
                  text="login"
                  className="login-btn"
                  align="center"
                />
                <Link className="login-link" to="/registration">
                  Sign Up
                </Link>
              </div>
            </form>
            <div className="login-prompt">
              <Link to="/forgot-password">Forgot The Password ?</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
