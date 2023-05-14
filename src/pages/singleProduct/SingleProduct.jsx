import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { RiRecycleFill, RiLink } from "react-icons/ri";
import { TfiHeart } from "react-icons/tfi";
import Meta from "../../components/meta/Meta";
import { useDispatch, useSelector } from "react-redux";
import BreadCrumbs from "../../components/breadcrumbs/BreadCrumbs";
import ReactStars from "react-rating-stars-component";
import Zoom from "react-img-zoom";
import { getSingleProduct } from "../../features/product/productSlice";
import "./SingleProduct.scss";
import img1 from "../../assets/book1.png";
import { createOrderCart, getOrderCart } from "../../features/order/orderSlice";

const SingleProduct = () => {
  const dispatch = useDispatch();
  const productState = useSelector((state) => state.product.singleProduct);
  const cartState = useSelector((state) => state.order.orders);

  // console.log(cartState);

  const [quantity, setQuantity] = useState(1);
  const [alreadyAdded, setAlreadyAdded] = useState(false);

  const location = useLocation();
  const productId = location.pathname.split("/")[2];

  const link = window.location.href;

  const ratingChanged = () => {
    console.log("newRating");
  };

  const addToCart = (id) => {
    dispatch(
      createOrderCart({ productID: id, quantity, price: productState?.price })
    );
  };

  useEffect(() => {
    dispatch(getSingleProduct(productId));
    dispatch(getOrderCart());
  }, [dispatch, productId]);

  useEffect(() => {
    for (let index = 0; index < cartState.length; index++) {
      if (productId === cartState[index]?.productID?._id) {
        setAlreadyAdded(true);
      }
    }
  }, [cartState, productId]);

  return (
    <>
      <Meta title={"Product Name"} />
      <BreadCrumbs title={"Product Name"} />
      <section className="product">
        <div className="conatiner-xxl">
          <div className="row mx-2">
            <div className="col-lg-9 mx-auto">
              <div className="product-container">
                <div className="product-img">
                  <Zoom
                    img={
                      productState?.images[0]?.url
                        ? productState?.images[0]?.url
                        : img1
                    }
                    zoomScale={1.5}
                    width={300}
                    height={350}
                    transitionTime={0.3}
                  />
                </div>
                <div className="product-box">
                  <h3>{productState?.author}</h3>
                  <h3>{productState?.title}</h3>
                  <p className="price">
                    price: <span>{productState?.price} $</span>
                  </p>
                  <p>
                    categories:
                    <span>&nbsp;{productState?.category}</span>
                  </p>
                  <p>
                    availability: <span>in stock</span>
                  </p>
                  <div className="product-review">
                    <div className="cards-rating">
                      <ReactStars
                        count={5}
                        onChange={ratingChanged}
                        value={productState?.totalRating}
                        size={21}
                        activeColor="#ffd700"
                      />
                    </div>
                    <p className="ms-3 text-lowercase fw-normal">
                      ( 2 reviews )
                    </p>
                  </div>

                  {alreadyAdded === false && (
                    <div className="button-block">
                      <span>quantity:&nbsp;</span>
                      <input
                        type="number"
                        className="block-input"
                        min={1}
                        max={10}
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                      />
                    </div>
                  )}

                  <button type="button" className="product-btn ">
                    buy now
                  </button>
                  <button
                    type="button"
                    className="product-btn"
                    onClick={() => addToCart(productState?._id)}
                  >
                    Add To Card
                  </button>
                  <div className="links-block">
                    <div className="middle-item">
                      <RiRecycleFill />
                      <Link to="/compare">Compare</Link>
                    </div>
                    <div className="middle-item">
                      <TfiHeart />
                      <Link to="/favorite">favorite</Link>
                    </div>
                  </div>
                  <div className="product-links">
                    <Link
                      to="/refund-policy"
                      className="fs-6 color text-inform text-capitalize"
                    >
                      refound policy
                    </Link>

                    <Link
                      className="share"
                      onClick={() => {
                        navigator.clipboard.writeText(link);
                      }}
                    >
                      <RiLink />
                      Share
                    </Link>
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

export default SingleProduct;
