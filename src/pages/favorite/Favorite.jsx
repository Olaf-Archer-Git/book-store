import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Meta from "../../components/meta/Meta";
import BreadCrumbs from "../../components/breadcrumbs/BreadCrumbs";
import Container from "../../components/container/Container";
import { getUserFavorite } from "../../features/user/userSlice";
import { addToFavorite } from "../../features/product/productSlice";

import "./Favorite.scss";

const Favorite = () => {
  const dispatch = useDispatch();
  const favoriteState = useSelector(
    (state) => state.user?.userFavorite?.favorite
  );

  useEffect(() => {
    dispatch(getUserFavorite());
  }, [dispatch]);

  const removeFavoriteProduct = (id) => {
    dispatch(addToFavorite(id));

    setTimeout(() => {
      dispatch(getUserFavorite());
    }, 500);
  };

  return (
    <>
      <Meta title={"Favorite"} />
      <BreadCrumbs title={"Favorite"} />
      <section className="favorite">
        <Container className={"container-xxl"}>
          {favoriteState &&
            favoriteState.map((item) => {
              return (
                <div className="col-lg-3" key={item._id}>
                  <div className="card text-center">
                    <img
                      src={item.images[0]?.url}
                      className="card-img-top p-2"
                      alt="..."
                    />

                    <div className="favorite-body">
                      <h5 className="favorite-title">{item.title}</h5>
                      <h5 className="favorite-title">{item.author}</h5>
                      <p className="card-text">Price: ${item.price}</p>
                    </div>
                    <div className="button">
                      <button
                        type="button"
                        className="btn btn-danger"
                        onClick={() => {
                          removeFavoriteProduct(item._id);
                        }}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
        </Container>
      </section>
    </>
  );
};

export default Favorite;
