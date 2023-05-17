import React from "react";
import { Link } from "react-router-dom";
import Meta from "../../components/meta/Meta";
import BreadCrumbs from "../../components/breadcrumbs/BreadCrumbs";
import { AiOutlineDoubleLeft } from "react-icons/ai";
import CheckOutOrder from "./CheckOutOrder";
import Container from "../../components/container/Container";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import * as yup from "yup";
import "./CheckOut.scss";

const CheckOut = () => {
  const dispatch = useDispatch();
  const cartState = useSelector((state) => state.order.orderCart);

  // console.log(cartState);
  let checkOutSchema = yup.object({
    firstName: yup.string().required("First Name Is Required"),
    lastName: yup.string().required("Last Name Is Required"),
    country: yup.string().required("Country Is Required"),
    city: yup.string().required("City Is Required"),
    address: yup.string().required("Address Is Required"),
    zipCode: yup.number().required("This Field Is Required"),
  });

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      country: "",
      city: "",
      address: "",
      zipCode: undefined,
    },
    validationSchema: checkOutSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values));
      // dispatch(createQuery(values));
    },
  });

  return (
    <>
      <Meta title={"CheckOut"} />
      <BreadCrumbs title={"CheckOut"} />
      <section className="checkout">
        <Container className="container-xxl">
          <div className="col-lg-7 pe-1">
            <div className="checkout-forms">
              <h4>Book Store 35 56</h4>
              <nav
                style={{ "--bs-breadcrumb-divider": "'>'" }}
                aria-label="breadcrumb"
              >
                <ol className="breadcrumb">
                  <li className="breadcrumb-item active" aria-current="page">
                    <Link className="checkout-breadcrumb" to="/cart">
                      CART
                    </Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    <Link className="checkout-breadcrumb" to="/shopping">
                      Shopping
                    </Link>
                  </li>
                  <li className="breadcrumb-item">Payment</li>
                </ol>
              </nav>

              <div className="checkout-container">
                <h5>Contact Information</h5>
                <div className="checkout-details">demo@email.com</div>

                <h5 className="my-4">Delivery Details</h5>

                <form className="checkout-box" onSubmit={formik.handleSubmit}>
                  <div className="checkout-input">
                    <input
                      type="text"
                      className="form-control"
                      placeholder={
                        formik.errors.firstName
                          ? formik.errors.firstName
                          : "First Name"
                      }
                      name="firstName"
                      value={formik.values.firstName}
                      onChange={formik.handleChange("firstName")}
                    />

                    <input
                      type="text"
                      className="form-control"
                      placeholder={
                        formik.errors.lastName
                          ? formik.errors.lastName
                          : "Last Name"
                      }
                      name="lastName"
                      value={formik.values.lastName}
                      onChange={formik.handleChange("lastName")}
                    />
                  </div>
                  <div className="checkout-input">
                    <input
                      type="text"
                      className="form-control"
                      placeholder={
                        formik.errors.country
                          ? formik.errors.country
                          : "Country"
                      }
                      name="country"
                      value={formik.values.country}
                      onChange={formik.handleChange("country")}
                    />
                    <input
                      type="text"
                      className="form-control"
                      placeholder={
                        formik.errors.city ? formik.errors.city : "City"
                      }
                      name="city"
                      value={formik.values.city}
                      onChange={formik.handleChange("city")}
                    />
                    <input
                      type="text"
                      className="form-control"
                      placeholder={
                        formik.errors.zipCode
                          ? formik.errors.zipCode
                          : "Zip Code"
                      }
                      name="zipCode"
                      value={formik.values.zipCode}
                      onChange={formik.handleChange("zipCode")}
                    />
                  </div>

                  <div className="checkout-input">
                    <input
                      type="text"
                      className="form-control"
                      placeholder={
                        formik.errors.address
                          ? formik.errors.address
                          : "Address"
                      }
                      name="address"
                      value={formik.values.address}
                      onChange={formik.handleChange("address")}
                    />
                  </div>

                  <div className="checkout-btn">
                    <Link to="/cart" className="checkout-link">
                      <AiOutlineDoubleLeft /> <span>Go Back</span>
                    </Link>
                    <button className="checkout-button" type="submit">
                      Place Order
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <CheckOutOrder state={cartState} />
        </Container>
      </section>
    </>
  );
};

export default CheckOut;
