import React from "react";
import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";

//** Import Image */
import customers4 from "../../../images/customers/4.jpg";
import customers3 from "../../../images/customers/3.jpg";
import customers2 from "../../../images/customers/2.jpg";
import customers1 from "../../../images/customers/1.jpg";

const customerData = [
  {
    customerId: "#wp00001",
    name: "Niharika",
    joiningDate: "8/1/2024",
    location: "Jaipur",
    phoneNumber: "8003230978",
    emailId: "niharika@gmail.com",
    orderHistory: "Sharayu",
    picture:
      "https://wildpalms-hospitality-db.s3.ap-south-1.amazonaws.com/sharayu/sharayu+(first).jpg",
    price: "₹20000",
    profilePic:
      "https://wildpalms-hospitality-db.s3.ap-south-1.amazonaws.com/Customers/Niharika/Niharika.jpeg",
  },
  {
    customerId: "#wp00002",
    name: "Shivi",
    joiningDate: "2024-02-09",
    location: "Jaipur",
    phoneNumber: "8947967203",
    emailId: "shivi@gmail.com",
    orderHistory: "Vaddo Villa",
    picture:
      "https://wildpalms-hospitality-db.s3.ap-south-1.amazonaws.com/Vaddo+1BHK/vaddo+(first).jpeg",
    price: "₹25000",

    profilePic:
      "https://wildpalms-hospitality-db.s3.ap-south-1.amazonaws.com/Customers/Shivi/Shivi.jpeg",
  },
  {
    customerId: "#wp00003",
    name: "Utkarsh",
    joiningDate: "2024-03-26",
    location: "Bangalore",
    phoneNumber: "9570852682",
    emailId: "utkarsh@gmail.com",
    orderHistory: "Iris Morjim",
    picture:
      "https://wildpalms-hospitality-db.s3.ap-south-1.amazonaws.com/morjim/WP-MOR+1-(first).png",
    price: "₹3000",

    profilePic:
      "https://wildpalms-hospitality-db.s3.ap-south-1.amazonaws.com/Customers/Utkarsh /utkarsh.jpeg",
  },
  {
    customerId: "#wp00004",
    name: "Anmol",
    joiningDate: "2024-02-14",
    location: "Bangalore",
    phoneNumber: "8440017777",
    emailId: "anmol@gmail.com",
    orderHistory: "Iris Siolim",
    picture:
      "https://wildpalms-hospitality-db.s3.ap-south-1.amazonaws.com/iris+3+bhk+siolim/3bhk+Siolim+locations-(first).png",
    price: "₹6000",

    profilePic:
      "https://wildpalms-hospitality-db.s3.ap-south-1.amazonaws.com/Customers/Anmol/anmol.jpeg",
  },
  {
    customerId: "#wp00005",
    name: "Ujjwal",
    joiningDate: "2024-01-10",
    location: "Goa",
    phoneNumber: "9820036640",
    emailId: "ujjwal@gmail.com",
    orderHistory: "3BHK Vagator",
    picture:
      "https://wildpalms-hospitality-db.s3.ap-south-1.amazonaws.com/3BHK-VAGATOR/3BHK-VAGATOR+(first).jpg",
    price: "₹18000",

    profilePic:
      "https://wildpalms-hospitality-db.s3.ap-south-1.amazonaws.com/Customers/Ujjwal/ujjwall.png",
  },
  {
    customerId: "#wp00006",
    name: "Sparsh",
    joiningDate: "2024-01-29",
    location: "Jabalpur",
    phoneNumber: "6265205646",
    emailId: "sparsh@gmail.com",
    orderHistory: "WP-GR-Arpora",
    picture:
      "https://wildpalms-hospitality-db.s3.ap-south-1.amazonaws.com/Goa+raj+villa/goa-raj-villa+(first).jpeg",
    price: "₹2500",

    profilePic:
      "https://wildpalms-hospitality-db.s3.ap-south-1.amazonaws.com/Customers/sparsh/sparsh.jpeg",
  },
  {
    customerId: "#wp00007",
    name: "Yashish",
    joiningDate: "2024-05-10",
    location: "Delhi",
    phoneNumber: "9643340282",
    emailId: "yashish@gmail.com",
    orderHistory: "Vaddo Villa",
    picture:
      "https://wildpalms-hospitality-db.s3.ap-south-1.amazonaws.com/Vaddo+1BHK/vaddo+(first).jpeg",
    price: "₹50000",

    profilePic:
      "https://wildpalms-hospitality-db.s3.ap-south-1.amazonaws.com/Customers/yashish/yashish.jpeg",
  },
];

function ProfileDropdown({ data }) {
  return (
    <Dropdown className="dropdown media-dropdown mt-auto mb-auto me-auto">
      <Dropdown.Toggle variant="" className="btn-link i-false p-0">
        <Link to="#" className="btn btn-outline-primary rounded">
          Show Order History
          <svg
            className="ms-2"
            width={12}
            height={6}
            viewBox="0 0 12 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 -5.24537e-07L6 6L12 0" fill="#3B4CB8" />
          </svg>
        </Link>
      </Dropdown.Toggle>
      <Dropdown.Menu className="dropdown-menu dropdown-menu-right rounded">
        <div className="media mb-4">
          <img
            className="me-sm-4 me-3 img-fluid rounded"
            width={90}
            src={data?.picture}
            alt="DexignZone"
          />
          <div className="media-body">
            <h4 className="fs-16 text-black font-w600 mb-0">
              {data?.orderHistory}
            </h4>
            <span className="fs-14 d-block mb-3">{data?.price}</span>
            {/* <div className="star-icons">
              <i className="las la-star fs-18 me-1" />
              <i className="las la-star fs-18 me-1" />
              <i className="las la-star fs-18 me-1" />
              <i className="las la-star fs-18 me-1" />
              <i className="las la-star fs-18" />
            </div> */}
          </div>
        </div>
      </Dropdown.Menu>
    </Dropdown>
  );
}

function CustomerList() {
  return (
    <>
      <div className="form-head page-titles d-flex  align-items-center">
        <div className="me-auto  d-lg-block">
          <h4 className="mb-1">Customer</h4>
          <ol className="breadcrumb">
            <li className="breadcrumb-item active">
              <Link to="/customer-list">Customer</Link>
            </li>
            <li className="breadcrumb-item">
              <Link to="/customer-list">Customer List</Link>
            </li>
          </ol>
        </div>
        <Link to="/customer-list" className="btn btn-primary rounded light">
          Refresh
        </Link>
      </div>
      <div className="row">
        <div className="col-xl-12">
          <div className="card">
            <div className="card-body p-0">
              {customerData.map((item, i) => (
                <div className="row border-bottom mx-0 pt-4 px-2 align-items-center ">
                  <div className="col-xl-3 col-xxl-3 col-lg-4 col-sm-12 mb-sm-4 mb-3 align-items-center  media">
                    <img
                      className="me-sm-4 me-3 img-fluid rounded"
                      width={80}
                      src={item.profilePic}
                      alt="DexignZone"
                    />
                    <div className="media-body">
                      <span className="text-primary d-block">
                        {item?.customerId}
                      </span>
                      <h4 className="mb-1">{item?.name}</h4>
                      <span className="d-block mb-lg-0 mb-0">
                        Join on {item?.joiningDate}
                      </span>
                    </div>
                  </div>
                  <div className="col-xl-2 col-xxl-2 col-lg-2 col-sm-4 mb-sm-4 col-6 mb-3">
                    <small className="mb-2 d-block">Location</small>
                    <span className="text-black font-w600">
                      {item?.location}
                    </span>
                  </div>
                  <div className="col-xl-2 col-xxl-3 col-lg-3 col-sm-4 mb-sm-4 col-6 mb-3 text-lg-center">
                    <small className="mb-2 d-block">Phone Number</small>
                    <span className="text-black font-w600">
                      {item?.phoneNumber}
                    </span>
                  </div>
                  <div className="col-xl-2 col-xxl-3 col-lg-4 col-sm-4 mb-sm-4 mb-3">
                    <small className="mb-2 d-block">Email Address</small>
                    <span className="text-black font-w600">
                      {item?.emailId}
                    </span>
                  </div>
                  <div className="col-xl-3 col-xxl-3 col-lg-4 col-sm-6 mb-sm-4 mb-4 d-flex ">
                    <ProfileDropdown data={item} />
                    {/* <Dropdown className="dropdown ms-4  mt-auto mb-auto">
                      <Dropdown.Toggle
                        className="btn-link i-false p-0"
                        data-toggle="dropdown"
                        variant=""
                      >
                        <svg
                          width="24px"
                          height="24px"
                          viewBox="0 0 24 24"
                          version="1.1"
                        >
                          <g
                            stroke="none"
                            strokeWidth={1}
                            fill="none"
                            fillRule="evenodd"
                          >
                            <rect x={0} y={0} width={24} height={24} />
                            <circle fill="#000000" cx={5} cy={12} r={2} />
                            <circle fill="#000000" cx={12} cy={12} r={2} />
                            <circle fill="#000000" cx={19} cy={12} r={2} />
                          </g>
                        </svg>
                      </Dropdown.Toggle>
                      <Dropdown.Menu className="dropdown-menu dropdown-menu-right">
                        <Dropdown.Item className="dropdown-item" to="#">
                          Edit
                        </Dropdown.Item>
                        <Dropdown.Item className="text-danger" to="#">
                          Delete
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown> */}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CustomerList;
