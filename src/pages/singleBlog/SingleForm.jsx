import React from "react";
import { Link } from "react-router-dom";

import "../singleBlog/SingleBlog.scss";

const SingleForm = () => {
  return (
    <section className="single-form pb-3">
      <div className="container-xl">
        <div className="row">
          <div className="col-md-6">
            <input
              type="email"
              className="form-control"
              name="email"
              id="floatingInput"
              placeholder="email"
              required
            />
          </div>
          <div className="col-md-6">
            <input
              type="text"
              className="form-control"
              name="name"
              placeholder="name"
              required
            />
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-12">
            <div className="mb-3">
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="4"
                placeholder="comment"
              ></textarea>
            </div>
          </div>
        </div>
        <div className="btn-main py-3 ps-0">
          <Link>Post comment</Link>
        </div>
      </div>
    </section>
  );
};

export default SingleForm;
