import React from "react";
import Meta from "../../components/meta/Meta";
import BreadCrumbs from "../../components/breadcrumbs/BreadCrumbs";
import Container from "../../components/container/Container";
import CustomInput from "../../components/customInput/CustomInput";
import { useFormik } from "formik";
import * as yup from "yup";

import CustomButton from "../../components/button/CustomButton";
import { useDispatch } from "react-redux";
import { userRegister } from "../../features/users/userSlice";

const Registration = () => {
  const dispatch = useDispatch();

  let registerSchema = yup.object({
    firstName: yup.string().required("First Name Is Required"),
    lastName: yup.string().required("Last Name Is Required"),
    email: yup
      .string()
      .email("Email Should Be Valid")
      .required("Email Is Required"),
    mobile: yup.string().required("Mobile Name Is Required"),
    password: yup
      .string()
      .required("Password Is Required")
      .min(5, "Must Contain At Least 5 Characters"),
  });

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      mobile: "",
      password: "",
    },
    validationSchema: registerSchema,
    onSubmit: (values) => {
      dispatch(userRegister(values));
    },
  });

  return (
    <>
      <Meta title="Registration" />
      <BreadCrumbs title="Registration" />
      <section className="login">
        <Container className="container-xl">
          <div className="col-md-5 mx-auto">
            <div className="login-container">
              <h3>Registration</h3>
              <div className="form-box">
                <form action="" onSubmit={formik.handleSubmit}>
                  <CustomInput
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    formikValue={formik.values.firstName}
                    formikHandler={formik.handleChange("firstName")}
                  />
                  <div className="input-error">
                    {formik.touched.firstName && formik.errors.firstName}
                  </div>
                  <CustomInput
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    formikValue={formik.values.lastName}
                    formikHandler={formik.handleChange("lastName")}
                  />
                  <div className="input-error">
                    {formik.touched.lastName && formik.errors.lastName}
                  </div>
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
                  <CustomInput
                    type="text"
                    name="mobile"
                    placeholder="Mobile"
                    formikValue={formik.values.mobile}
                    formikHandler={formik.handleChange("mobile")}
                  />
                  <div className="input-error">
                    {formik.touched.mobile && formik.errors.mobile}
                  </div>
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
                  <CustomButton
                    type="submit"
                    text="create an account"
                    className="registration-btn"
                    align="center"
                  />
                </form>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Registration;
