import React from "react";
import { Link } from "react-router-dom";
import Meta from "../../components/meta/Meta";
import BreadCrumbs from "../../components/breadcrumbs/BreadCrumbs";
import { BsHouse, BsTelephone, BsEnvelope, BsInfoCircle } from "react-icons/bs";

import "./Contact.scss";

const Contact = () => {
  return (
    <>
      <Meta title={"Contact"} />
      <BreadCrumbs title={"Contact"} />
      <section className="contact">
        <div className="container-xxl">
          <div className="row">
            <div className="col-lg-12"></div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5673.3330135403!2d14.755150602052469!3d67.51919776368118!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x45dee1a985a96fd3%3A0xac146ac03622da8a!2zODA5MyBLamVycmluZ8O4eSwg0J3QvtGA0LLQtdKR0ZbRjw!5e1!3m2!1suk!2sua!4v1673534139128!5m2!1suk!2sua"
              width="750"
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
                <div class="mb-1 pt-4">
                  <label for="exampleFormControlInput1" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Name"
                  />
                </div>
                <div class="mb-1">
                  <label for="exampleFormControlInput1" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="name@example.com"
                  />
                </div>
                <div class="mb-1">
                  <label for="exampleFormControlInput1" className="form-label">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="phone number"
                  />
                </div>
                <div class="mb-1">
                  <label
                    for="exampleFormControlTextarea1"
                    className="form-label"
                  >
                    Example textarea
                  </label>
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="4"
                  ></textarea>
                </div>
                <div className="btn-main">
                  <Link>submit</Link>
                </div>
              </div>
              <div className="col-md-6">
                <h3 className="title">Get iin touch with us</h3>
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
        </div>
      </section>
    </>
  );
};

export default Contact;
