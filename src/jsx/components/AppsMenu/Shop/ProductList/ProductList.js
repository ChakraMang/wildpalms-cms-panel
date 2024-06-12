import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { Modal } from "react-bootstrap";
import { Rate } from 'rsuite';

import PageTitle from "../../../../layouts/PageTitle";

// images
import avatar1 from "../../../../..//images/avatar/1.jpg";
import product2 from "../../../../../images/product/2.jpg";
import product3 from "../../../../../images/product/3.jpg";
import product4 from "../../../../../images/product/4.jpg";
import product5 from "../../../../../images/product/5.jpg";
import product6 from "../../../../../images/product/6.jpg";
import product7 from "../../../../../images/product/7.jpg";

const ProductList = () => {
  const [reviewModal, setReviewModal] = useState(false);
  return (
    <Fragment>
      <PageTitle activeMenu="Product List" motherMenu="Shop" />

      <div className="row">
        <div className="col-lg-12 col-xl-6">
          <div className="card">
            <div className="card-body">
              <div className="row m-b-30">
                <div className="col-md-5 col-xxl-12">
                  <div className="new-arrival-product mb-4 mb-xxl-4 mb-md-0">
                    <div className="new-arrivals-img-contnent">
                      <img className="img-fluid" src={product2} alt="" />
                    </div>
                  </div>
                </div>
                <div className="col-md-7 col-xxl-12">
                  <div className="new-arrival-content position-relative">
                    <h4>
                      <Link to="ecom-product-detail">
                          Single-Family Home
                      </Link>
                    </h4>
                    <div className="comment-review star-rating">
                      <ul>
                        {" "}
                        <li>
                          <i className="fa fa-star" />
                        </li>{" "}
                        <li>
                          <i className="fa fa-star" />
                        </li>{" "}
                        <li>
                          <i className="fa fa-star" />
                        </li>{" "}
                        <li>
                          <i className="fa-solid fa-star-half-stroke" />
                        </li>{" "}
                        <li>
                          <i className="fa-solid fa-star-half-stroke" />
                        </li>
                      </ul>
                      <span className="review-text">(34 reviews) / </span>
                      <Link
                        className="product-review"
                        to="#"
                        
                        onClick={() => setReviewModal(true)}
                        data-target="#reviewModal"
                      >
                        Write a review?
                      </Link>
                      <p className="price lg">$320.00</p>
                    </div>
                    <p>
                      Availability:{" "}
                      <span className="item">
                        {" "}
                        In stock{" "}
                        <i className="fa fa-check-circle text-success" />
                      </span>
                    </p>
                    <p>
                      Product code: <span className="item">0405689</span>{" "}
                    </p>
                    <p>
                      Brand: <span className="item">Lee</span>
                    </p>
                    <p className="text-content">
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour, or randomised words.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-12 col-xl-6">
          <div className="card">
            <div className="card-body">
              <div className="row m-b-30">
                <div className="col-md-5 col-xxl-12">
                  <div className="new-arrival-product mb-4 mb-xxl-4 mb-md-0">
                    <div className="new-arrivals-img-contnent">
                      <img className="img-fluid" src={product3} alt="" />
                    </div>
                  </div>
                </div>
                <div className="col-md-7 col-xxl-12">
                  <div className="new-arrival-content position-relative">
                    <h4>
                      <Link to="ecom-product-detail">
                          Manufactured Home
                      </Link>
                    </h4>
                    <div className="comment-review star-rating">
                      <ul>
                        {" "}
                        <li>
                          <i className="fa fa-star" />
                        </li>{" "}
                        <li>
                          <i className="fa fa-star" />
                        </li>{" "}
                        <li>
                          <i className="fa fa-star" />
                        </li>{" "}
                        <li>
                          <i className="fa-solid fa-star-half-stroke" />
                        </li>{" "}
                        <li>
                          <i className="fa-solid fa-star-half-stroke" />
                        </li>
                      </ul>
                      <span className="review-text ">(34 reviews) / </span>
                      <Link
                        className="product-review "
                        to="#"
                        
                        onClick={() => setReviewModal(true)}
                        data-target="#reviewModal"
                      >
                        Write a review?
                      </Link>
                      <p className="price lg">$325.00</p>
                    </div>
                    <p>
                      Availability:{" "}
                      <span className="item">
                        {" "}
                        In stock{" "}
                        <i className="fa fa-check-circle text-success" />
                      </span>
                    </p>
                    <p>
                      Product code: <span className="item">0405689</span>{" "}
                    </p>
                    <p>
                      Brand: <span className="item">Lee</span>
                    </p>
                    <p className="text-content">
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour, or randomised words.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-12 col-xl-6">
          <div className="card">
            <div className="card-body">
              <div className="row m-b-30">
                <div className="col-md-5 col-xxl-12">
                  <div className="new-arrival-product mb-4 mb-xxl-4 mb-md-0">
                    <div className="new-arrivals-img-contnent">
                      <img className="img-fluid" src={product4} alt="" />
                    </div>
                  </div>
                </div>
                <div className="col-md-7 col-xxl-12">
                  <div className="new-arrival-content position-relative">
                    <h4>
                      <Link to="ecom-product-detail">
                        Container Home
                      </Link>
                    </h4>
                    <div className="comment-review star-rating">
                      <ul>
                        {" "}
                        <li>
                          <i className="fa fa-star" />
                        </li>{" "}
                        <li>
                          <i className="fa fa-star" />
                        </li>{" "}
                        <li>
                          <i className="fa fa-star" />
                        </li>{" "}
                        <li>
                          <i className="fa fa-star" />
                        </li>{" "}
                        <li>
                          <i className="fa fa-star" />
                        </li>
                      </ul>
                      <span className="review-text ">(34 reviews) / </span>
                      <Link
                        className="product-review "
                        to="#"
                        
                        onClick={() => setReviewModal(true)}
                        data-target="#reviewModal"
                      >
                        Write a review?
                      </Link>
                      <p className="price lg">$480.00</p>
                    </div>
                    <p>
                      Availability:{" "}
                      <span className="item">
                        {" "}
                        In stock{" "}
                        <i className="fa fa-check-circle text-success" />
                      </span>
                    </p>
                    <p>
                      Product code: <span className="item">0405689</span>{" "}
                    </p>
                    <p>
                      Brand: <span className="item">Lee</span>
                    </p>
                    <p className="text-content">
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour, or randomised words.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-12 col-xl-6">
          <div className="card">
            <div className="card-body">
              <div className="row m-b-30">
                <div className="col-md-5 col-xxl-12">
                  <div className="new-arrival-product mb-4 mb-xxl-4 mb-md-0">
                    <div className="new-arrivals-img-contnent">
                      <img className="img-fluid" src={product5} alt="" />
                    </div>
                  </div>
                </div>
                <div className="col-md-7 col-xxl-12">
                  <div className="new-arrival-content position-relative">
                    <h4>
                      <Link to="ecom-product-detail">
                        Apartment
                      </Link>
                    </h4>
                    <div className="comment-review star-rating">
                      <ul>
                        {" "}
                        <li>
                          <i className="fa fa-star" />
                        </li>{" "}
                        <li>
                          <i className="fa fa-star" />
                        </li>{" "}
                        <li>
                          <i className="fa fa-star" />
                        </li>{" "}
                        <li>
                          <i className="fa fa-star" />
                        </li>{" "}
                        <li>
                          <i className="fa fa-star" />
                        </li>
                      </ul>
                      <span className="review-text">(34 reviews) / </span>
                      <Link
                        className="product-review"
                        to="#"
                        
                        onClick={() => setReviewModal(true)}
                        data-target="#reviewModal"
                      >
                        Write a review?
                      </Link>
                      <p className="price lg">$658.00</p>
                    </div>
                    <p>
                      Availability:{" "}
                      <span className="item">
                        {" "}
                        In stock{" "}
                        <i className="fa fa-check-circle text-success" />
                      </span>
                    </p>
                    <p>
                      Product code: <span className="item">0405689</span>{" "}
                    </p>
                    <p>
                      Brand: <span className="item">Lee</span>
                    </p>
                    <p className="text-content">
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour, or randomised words.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-12 col-xl-6">
          <div className="card">
            <div className="card-body">
              <div className="row m-b-30">
                <div className="col-md-5 col-xxl-12">
                  <div className="new-arrival-product mb-4 mb-xxl-4 mb-md-0">
                    <div className="new-arrivals-img-contnent">
                      <img className="img-fluid" src={product6} alt="" />
                    </div>
                  </div>
                </div>
                <div className="col-md-7 col-xxl-12">
                  <div className="new-arrival-content position-relative">
                    <h4>
                      <Link to="ecom-product-detail">
                        Farmhouse
                      </Link>
                    </h4>
                    <div className="comment-review star-rating">
                      <ul>
                        {" "}
                        <li>
                          <i className="fa fa-star" />
                        </li>{" "}
                        <li>
                          <i className="fa fa-star" />
                        </li>{" "}
                        <li>
                          <i className="fa fa-star" />
                        </li>{" "}
                        <li>
                          <i className="fa fa-star" />
                        </li>{" "}
                        <li>
                          <i className="fa fa-star" />
                        </li>
                      </ul>
                      <span className="review-text ">(34 reviews) / </span>
                      <Link
                        className="product-review "
                        to="#"
                        
                        onClick={() => setReviewModal(true)}
                        data-target="#reviewModal"
                      >
                        Write a review?
                      </Link>
                      <p className="price lg">$280.00</p>
                    </div>
                    <p>
                      Availability:{" "}
                      <span className="item">
                        {" "}
                        In stock{" "}
                        <i className="fa fa-check-circle text-success" />
                      </span>
                    </p>
                    <p>
                      Product code: <span className="item">0405689</span>{" "}
                    </p>
                    <p>
                      Brand: <span className="item">Lee</span>
                    </p>
                    <p className="text-content">
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour, or randomised words.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-12 col-xl-6">
          <div className="card">
            <div className="card-body">
              <div className="row m-b-30">
                <div className="col-md-5 col-xxl-12">
                  <div className="new-arrival-product mb-4 mb-xxl-4 mb-md-0">
                    <div className="new-arrivals-img-contnent">
                      <img className="img-fluid" src={product7} alt="" />
                    </div>
                  </div>
                </div>
                <div className="col-md-7 col-xxl-12">
                  <div className="new-arrival-content position-relative">
                    <h4>
                      <Link to="ecom-product-detail">
                        Bungalow
                      </Link>
                    </h4>
                    <div className="comment-review star-rating">
                      <ul>
                        {" "}
                        <li>
                          <i className="fa fa-star" />
                        </li>{" "}
                        <li>
                          <i className="fa fa-star" />
                        </li>{" "}
                        <li>
                          <i className="fa fa-star" />
                        </li>{" "}
                        <li>
                          <i className="fa fa-star" />
                        </li>{" "}
                        <li>
                          <i className="fa fa-star" />
                        </li>
                      </ul>
                      <span className="review-text ">(34 reviews) / </span>
                      <Link
                        className="product-review "
                        to="#"
                        
                        onClick={() => setReviewModal(true)}
                        data-target="#reviewModal"
                      >
                        Write a review?
                      </Link>
                      <p className="price lg">$600.00</p>
                    </div>
                    <p>
                      Availability:{" "}
                      <span className="item">
                        {" "}
                        In stock{" "}
                        <i className="fa fa-check-circle text-success" />
                      </span>
                    </p>
                    <p>
                      Product code: <span className="item">0405689</span>{" "}
                    </p>
                    <p>
                      Brand: <span className="item">Lee</span>
                    </p>
                    <p className="text-content">
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour, or randomised words.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* review */}
        <Modal show={reviewModal} className="modal fade" id="reviewModal"> 
          <>
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Review</h5>
                <button
                  type="button"
                  className="btn-close"                  
                  onClick={() => setReviewModal(false)}
                >
                  
                </button>
              </div>
              <div className="modal-body">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setReviewModal(false);
                  }}
                >
                  <div className="text-center mb-4">
                    <img
                      className="img-fluid rounded"
                      width={78}
                      src={avatar1}
                      alt="DexignZone"
                    />
                  </div>
                  <div className="mb-3">
                    <div className="rating-widget text-center">
                      {/* Rating Stars Box */}
                      <div className="rating-stars">                        
                        <Rate 
                          defaultValue={3} 
                          className="product-rating"
                          onChange={(data)=>{
                            alert(`Thanks! You rated this ${data} stars.`)
                          }}                          
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mb-3">
                    <textarea
                      className="form-control"
                      placeholder="Comment"
                      rows={5}
                      defaultValue={""}
                    />
                  </div>
                  <button className="btn btn-success btn-block">RATE</button>
                </form>
              </div>
            </div>
          </>
        </Modal>
      </div>
    </Fragment>
  );
};

export default ProductList;