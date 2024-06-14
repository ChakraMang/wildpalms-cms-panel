import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Nav, Tab } from "react-bootstrap";

//** Import Image */
import customers04 from "../../../images/customers/4.jpg";
import customers03 from "../../../images/customers/3.jpg";
import customers02 from "../../../images/customers/2.jpg";
import customers05 from "../../../images/customers/5.jpg";

const reviewData = [
  {
    customerId: "#wp00001",
    name: "Niharika",
    joiningDate: "8/1/2024",
    time: "18:00:00",
    review:
      "I recently enjoyed a fantastic stay at Wildpalms Hospitality in North Goa. The experience was nothing short of exceptional. The villa’s Indo-Portuguese design immediately caught our eye, and the private pool provided a perfect oasis of relaxation. The attentive staff ensured every detail was taken care of, making our stay truly comfortable and memorable. Special thanks to our hosts, Ashish and Nikhil, who went above and beyond to ensure our comfort. Located conveniently near beaches and markets, yet offering a serene escape, Wildpalms Hospitality is a gem. I highly recommend it for a luxurious and peaceful getaway!",
    rating: 5,
    profilePic:
      "https://wildpalms-hospitality-db.s3.ap-south-1.amazonaws.com/Customers/Niharika/Niharika.jpeg",
  },
  {
    customerId: "#wp00002",
    name: "Shivi",
    joiningDate: "2024-02-09",
    time: "19:00:00",
    review:
      "I had an amazing stay at Wildpalms Hospitality in North Goa. The villa’s design was exquisite, and the private pool was a perfect retreat. The staff was incredibly attentive, and the hosts ensured our comfort throughout our stay. Highly recommended!",
    rating: 4,
    profilePic:
      "https://wildpalms-hospitality-db.s3.ap-south-1.amazonaws.com/Customers/Shivi/Shivi.jpeg",
  },
  {
    customerId: "#wp00003",
    name: "Utkarsh",
    joiningDate: "2024-03-26",
    time: "20:00:00",
    review:
      "I thoroughly enjoyed my stay at Wildpalms Hospitality. The villa was beautifully designed, and the private pool was a highlight. The staff was exceptionally attentive, and the hosts went above and beyond to make my stay comfortable.",
    rating: 5,
    profilePic:
      "https://wildpalms-hospitality-db.s3.ap-south-1.amazonaws.com/Customers/Utkarsh /utkarsh.jpeg",
  },
  {
    customerId: "#wp00004",
    name: "Anmol",
    joiningDate: "2024-02-14",
    time: "21:00:00",
    review:
      "My stay at Wildpalms Hospitality was exceptional. The villa’s design and private pool were fantastic. The attentive staff and accommodating hosts made my experience unforgettable. A must-visit for a luxurious getaway.",
    rating: 5,
    profilePic:
      "https://wildpalms-hospitality-db.s3.ap-south-1.amazonaws.com/Customers/Anmol/anmol.jpeg",
  },
  {
    customerId: "#wp00005",
    name: "Ujjwal",
    joiningDate: "2024-01-10",
    time: "22:00:00",
    review:
      "I loved my stay at Wildpalms Hospitality. The villa’s Indo-Portuguese design and private pool were wonderful. The staff’s attentiveness and the hosts' hospitality ensured a memorable experience. Definitely recommended!",
    rating: 4,
    profilePic:
      "https://wildpalms-hospitality-db.s3.ap-south-1.amazonaws.com/Customers/Ujjwal/ujjwall.png",
  },
  {
    customerId: "#wp00006",
    name: "Sparsh",
    joiningDate: "2024-01-29",
    time: "23:00:00",
    review:
      "I had a fantastic stay at Wildpalms Hospitality. The villa’s design and the serene environment were perfect. The staff was very attentive, and the hosts made my stay extremely comfortable. Highly recommended!",
    rating: 5,
    profilePic:
      "https://wildpalms-hospitality-db.s3.ap-south-1.amazonaws.com/Customers/sparsh/sparsh.jpeg",
  },
  {
    customerId: "#wp00007",
    name: "Yashish",
    joiningDate: "2024-05-10",
    time: "00:00:00",
    review:
      "I had an excellent stay at Wildpalms Hospitality. The beautiful villa and the private pool were highlights. The staff was very attentive, and the hosts ensured a comfortable stay. Looking forward to returning!",
    rating: 4,
    profilePic:
      "https://wildpalms-hospitality-db.s3.ap-south-1.amazonaws.com/Customers/yashish/yashish.jpeg",
  },
];

const ReviewCard = (props) => {
  return (
    <div className="card review-table">
      <div className="media align-items-center">
        <img
          className="me-3 img-fluid rounded"
          width={90}
          src={props.image}
          alt="DexignZone"
        />
        <div className="media-body d-lg-flex d-block row align-items-center">
          <div className="col-xl-4 col-xxl-5 col-lg-12 review-bx">
            <span className="text-primary d-block">{props?.customerId}</span>
            <h3 className="fs-18 text-black font-w600 mb-1">{props.title}</h3>
            <span className="d-block mb-xl-0 mb-3">
              Join on {props.join}, 12:42 AM
            </span>
          </div>
          <div className="col-xl-7 col-xxl-7 col-lg-12 text-dark mb-xl-0 mb-2">
            {props.para}
          </div>
        </div>
        <div className="media-footer d-sm-flex d-block align-items-center">
          <div className="me-5 text-xl-center text-start  ms-xl-3 mb-sm-0 mb-3 ms-0">
            <span className="bgl-primary text-primary rounded p-1 ps-2 pe-2 font-w600 fs-12 d-inline-block mb-2 mb-sm-3">
              EXCELENT
            </span>
            <span className="star-review d-block">
              {/* <i className="fa fa-star text-primary" />{" "}
              <i className="fa fa-star text-primary" />{" "}
              <i className="fa fa-star text-primary" />{" "}
              <i className="fa fa-star text-primary" />{" "}
              <i className="fa fa-star text-gray" /> */}
              {props?.rating === 5 ? (
                <>
                  <i className="fa fa-star text-primary" />{" "}
                  <i className="fa fa-star text-primary" />{" "}
                  <i className="fa fa-star text-primary" />{" "}
                  <i className="fa fa-star text-primary" />{" "}
                  <i className="fa fa-star text-primary" />
                </>
              ) : (
                <>
                  <i className="fa fa-star text-primary" />{" "}
                  <i className="fa fa-star text-primary" />{" "}
                  <i className="fa fa-star text-primary" />{" "}
                  <i className="fa fa-star text-primary" />{" "}
                  <i className="fa fa-star text-gray" />
                </>
              )}
            </span>
          </div>

          {props?.isPublished ? (
            <></>
          ) : (
            <div className="edit ms-auto">
              <Link
                to="/review"
                className="btn btn-outline-success rounded  me-2"
              >
                Approve
              </Link>
              <Link to="/review" className="btn btn-outline-danger rounded">
                Reject
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const reviewtable = [
  { join: "26/04/2020", title: "Robert Patilson", detail: "one" },
  { join: "20/07/2021", title: "Peter Parkur", detail: "two" },
  { join: "15/01/2019", title: "Emilia Sigh", detail: "one" },
  { join: "10/08/2022", title: "Robert Patilson", detail: "one" },
  { join: "22/09/2020", title: "Peter Parkur", detail: "two" },
  { join: "01/01/2023", title: "Emilia Sigh", detail: "one" },
];

function Reviews() {
  const [tableData, setTableData] = useState(reviewData);
  function SortData() {
    let value = reviewtable.filter((el) => {
      return el.detail.includes("two");
    });
    setTableData(reviewData);
  }
  function SortDataSecond() {
    let value = reviewtable.filter((el) => {
      return el.detail.includes("one");
    });
    setTableData([]);
  }
  return (
    <>
      <div className="form-head page-titles d-flex  align-items-center">
        <div className="me-auto  d-lg-block">
          <h4 className="mb-1">Reviews</h4>
          <ol className="breadcrumb">
            <li className="breadcrumb-item active">
              <Link to="/review">Customer</Link>
            </li>
            <li className="breadcrumb-item">
              <Link to="/review">Reviews</Link>
            </li>
          </ol>
        </div>
        <Link to="#" className="btn btn-primary rounded light">
          Refresh
        </Link>
      </div>
      <div className="row">
        <div className="col-xl-12">
          <Tab.Container defaultActiveKey="navpills-1">
            <Nav className="nav nav-pills review-tab" variant="" as="ul">
              <Nav.Item as="li">
                <Nav.Link
                  eventKey="navpills-1"
                  onClick={() => setTableData(reviewData)}
                >
                  All Review
                </Nav.Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Nav.Link eventKey="navpills-2" onClick={SortData}>
                  Published
                </Nav.Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Nav.Link eventKey="navpills-3" onClick={SortDataSecond}>
                  Deleted
                </Nav.Link>
              </Nav.Item>
            </Nav>
            <Tab.Content className="tab-content pt-4 bg-white">
              <Tab.Pane eventKey="navpills-1">
                {tableData.map((item, ind) => (
                  <ReviewCard
                    image={item.profilePic}
                    customerId={item.customerId}
                    title={item.name}
                    join={item.joiningDate}
                    para={item.review}
                    key={ind}
                    rating={item.rating}
                    isPublished={false}
                  />
                ))}
              </Tab.Pane>
              <Tab.Pane eventKey="navpills-2">
                {tableData.map((item, ind) => (
                  <ReviewCard
                    image={item.profilePic}
                    customerId={item.customerId}
                    title={item.name}
                    join={item.joiningDate}
                    para={item.review}
                    key={ind}
                    rating={item.rating}
                    isPublished={true}
                  />
                ))}
              </Tab.Pane>
              <Tab.Pane eventKey="navpills-3">
                {tableData.map((item, ind) => (
                  <ReviewCard
                    image={item.image}
                    title={item.title}
                    join={item.join}
                    para={item.detail}
                    key={ind}
                  />
                ))}
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </div>
      </div>
    </>
  );
}

export default Reviews;
