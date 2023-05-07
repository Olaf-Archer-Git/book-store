import React from "react";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import * as yup from "yup";
import Meta from "../../components/meta/Meta";
import BreadCrumbs from "../../components/breadcrumbs/BreadCrumbs";
import Container from "../../components/container/Container";
import { BsHouse, BsTelephone, BsEnvelope, BsInfoCircle } from "react-icons/bs";
import CustomButton from "../../components/button/CustomButton";
import CustomInput from "../../components/customInput/CustomInput";
import { createQuery } from "../../features/contact/contactSlice";

import "./Contact.scss";

const Contact = () => {
  const dispatch = useDispatch();

  let contactSchema = yup.object({
    name: yup.string().required("Name Is Required"),
    email: yup
      .string()
      .email("Email Should Be Valid")
      .required("Email Is Required"),
    message: yup.string().required("Message Is Required"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: contactSchema,
    onSubmit: (values) => {
      dispatch(createQuery(values));
    },
  });

  return (
    <>
      <Meta title={"Contact"} />
      <BreadCrumbs title={"Contact"} />
      <section className="contact">
        <Container className="container-xxl">
          <div className="col-lg-12">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m11!1m3!1d1536.2743709749714!2d-97.06636553621361!3d36.74282797890616!2m2!1f0!2f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87b0f5349a3fa457%3A0xcef42936b02358ae!2sShirlee%20Ave%2C%20Ponca%20City%2C%20OK%2C%20USA!5e1!3m2!1sen!2sua!4v1673547461256!5m2!1sen!2sua"
              width="100%"
              height="500"
              style={{ border: "0" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="2"
            ></iframe>
          </div>
          <div className="contact-container">
            <div className="row">
              <div className="col-md-6">
                <h3 className="title">Contact Us</h3>
                <form
                  action=""
                  onSubmit={formik.handleSubmit}
                  className="contact-box"
                >
                  <CustomInput
                    className="form-control"
                    type="text"
                    name="name"
                    placeholder="Name"
                    formikValue={formik.values.name}
                    formikHandler={formik.handleChange("name")}
                  />

                  <CustomInput
                    className="form-control my-3"
                    type="email"
                    name="email"
                    placeholder="Email"
                    formikValue={formik.values.email}
                    formikHandler={formik.handleChange("email")}
                  />

                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="4"
                    type="text"
                    name="message"
                    placeholder="Message"
                    value={formik.values.message}
                    onChange={formik.handleChange("message")}
                  ></textarea>

                  <CustomButton
                    type="submit"
                    text="Contact Us"
                    className="registration-btn"
                    align="center"
                  />
                </form>
              </div>
              <div className="col-md-6">
                <h3 className="title">Get in touch with us</h3>
                <div className="contact-box">
                  <div>
                    <BsHouse />
                    <span>Shirlee Ave Ponca City, Oklahoma(OK), 74604</span>
                  </div>
                  <div>
                    <BsTelephone />
                    <span>(580) 762-4578 1602</span>
                  </div>
                  <div>
                    <BsEnvelope />
                    <span>demo@email.com</span>
                  </div>
                  <div>
                    <BsInfoCircle />
                    <span>Monday - Friday 10 AM - 8 PM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Contact;
