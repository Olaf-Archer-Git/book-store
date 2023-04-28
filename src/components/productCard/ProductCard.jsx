import React from "react";
import ReactStars from "react-rating-stars-component";
import { useDispatch } from "react-redux";
import { BsSuitHeart } from "react-icons/bs";
import { Link } from "react-router-dom";
import { addToFavorite } from "../../features/product/productSlice";

import "./ProductCard.scss";

const ProductCard = ({ sortLayout, productState }) => {
  const dispatch = useDispatch();

  const addToFavoriteProduct = (id) => {
    dispatch(addToFavorite(id));
  };

  const ratingChanged = () => {
    console.log("newRating");
  };

  /////////////////////////////////////////////////////////////
  // const favorite = async (prodID) => {
  //   const response = await axios.put(
  //     "http://localhost:3003/api/product/favorite",
  //     { prodID },
  //     tokenConfig
  //   );
  //   return response.data;
  // };

  /////

  return (
    <>
      {productState &&
        productState.map((item) => {
          return (
            <div key={item._id} className={sortLayout}>
              <div className="cards-container">
                <div className="cards-wrapper">
                  <div className="cards-img">
                    <img className="image" src={item.images[0].url} alt="#!" />
                  </div>
                  <button
                    title="add to favorite"
                    className="cards-like"
                    onClick={() => {
                      addToFavoriteProduct(item?._id);
                    }}
                  >
                    <BsSuitHeart />
                  </button>
                </div>

                <div className="cards-box">
                  <div className="title">{item.title}</div>
                  <div className="subtitle">{item.author}</div>
                  <div
                    className={`cards-description ${
                      sortLayout === "col-lg-8" || sortLayout === "col-lg-6"
                        ? "d-block"
                        : "d-none"
                    }`}
                  >
                    {item.description.replace(new RegExp("<[^>]*>", "g"), "")}
                  </div>
                  <div className="cards-rating">
                    <ReactStars
                      count={5}
                      onChange={ratingChanged}
                      value={parseInt(item.totalRating)}
                      size={21}
                      activeColor="#ffd700"
                    />
                  </div>
                  <p>
                    Price: $<span>{item.price}</span>
                  </p>

                  <Link className="cards-link" to="/product/:id">
                    Details
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
    </>
  );
};

export default ProductCard;
