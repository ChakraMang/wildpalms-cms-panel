import React, { useState } from "react";
import Select from "react-select";
import PageTitle from "../../layouts/PageTitle";
import { Uploader } from "rsuite";

const AddAgent = () => {
  const [goSteps, setGoSteps] = useState(0);
  const [agent, setAgent] = useState({});
  const [gender, setGender] = useState('')
  const Genders = [
    { value: "1", label: "Gender" },
    { value: "2", label: "Male" },
    { value: "3", label: "Female" },
    { value: "4", label: "Other" },
  ];
  const handleChange = (event) => {

    const {name, value} = event.target;
    console.log('event', event.target)
    setAgent({ ...agent, [name]: value });
    console.log("agent", agent);
  };

  const handleGenderChange = (val) => {
    setGender(val);
    console.log(gender)
  }

  return (
    <>
      <PageTitle activeMenu="Add Agent Wizard" motherMenu="Agents" />
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">Add Agent</h4>
            </div>
            <div className="card-body wizard-box">
              <div className="wizard-step-container">
                <ul className="wizard-steps">
                  <li
                    className={`step-container step-1 ${
                      goSteps === 0 ? "active" : ""
                    }`}
                    onClick={() => setGoSteps(0)}
                  >
                    <div className="media">
                      <div className="step-icon">
                        <i data-feather="check"></i>
                        <span>1</span>
                      </div>
                      <div className="media-body">
                        <h5>Get started</h5>
                        <h6>Account information</h6>
                      </div>
                    </div>
                  </li>
                  <li
                    className={`step-container step-2 ${
                      goSteps === 1 ? "active" : ""
                    }`}
                    onClick={() => setGoSteps(1)}
                  >
                    <div className="media">
                      <div className="step-icon">
                        <i data-feather="check"></i>
                        <span>2</span>
                      </div>
                      <div className="media-body">
                        <h5>Login details</h5>
                        <h6>Set your email</h6>
                      </div>
                    </div>
                  </li>
                  <li
                    className={`step-container step-3 ${
                      goSteps === 2 ? "active" : ""
                    }`}
                    onClick={() => setGoSteps(2)}
                  >
                    <div className="media">
                      <div className="step-icon">
                        <i data-feather="check"></i>
                        <span>3</span>
                      </div>
                      <div className="media-body">
                        <h5>Upload files</h5>
                        <h6>Successfully submitted</h6>
                      </div>
                    </div>
                  </li>
                </ul>
                <div className="wizard-form-details log-in">
                  {goSteps === 0 && (
                    <div className="wizard-step-1 d-block">
                      <form className="row" id="needs-validation">
                        <>
                          <div className="mb-3 col-md-4 col-sm-6">
                            <label className="form-label required">
                              First Name{" "}
                            </label>
                            <input
                              type="text"
                              name="firstName"
                              className="form-control"
                              placeholder="Parsley"
                              onChange={handleChange}
                              required
                            />
                          </div>
                          <div className="form-group col-md-4 col-sm-6">
                            <label className=" form-label required">
                              Last Name
                            </label>
                            <input
                              type="text"
                              name="lastName"
                              className="form-control"
                              placeholder="Montana"
                              onChange={handleChange}
                              required
                            />
                          </div>
                          <div className="form-group col-md-4 col-sm-6">
                            <label className="form-label">Gender</label>
                            <Select
                              options={Genders}
                              defaultValue={Genders[0]}
                              name="gender"
                              className="custom-react-select"
                              isSearchable={false}
                              onChange={handleGenderChange}
                            />
                          </div>
                          <div className="form-group col-sm-6">
                            <label className=" form-label required">
                              Company Phone Number{" "}
                            </label>
                            <input
                              type="string"
                              name="phoneNumber"
                              className="form-control"
                              placeholder="(+91) 99999-12345"
                              onChange={handleChange}
                              required
                            />
                          </div>
                          <div className="form-group col-md-6">
                            <label className="form-label required">
                              Date of birth{" "}
                            </label>
                            <input
                              type="date"
                              name="datepicker"
                              className="form-control bt-datepicker"
                              onChange={handleChange}
                            />
                          </div>
                        </>{" "}
                        <div
                          className="next-btn text-end col-sm-12"
                          onClick={() => setGoSteps(1)}
                        >
                          <button
                            type="submit"
                            className="btn btn-primary next1 btn-sm"
                          >
                            Next
                            <i className="fas fa-arrow-right ms-2" />
                          </button>
                        </div>
                      </form>
                    </div>
                  )}
                  {goSteps === 1 && (
                    <div className="wizard-step-2">
                      <form className="row" id="needs-validation1">
                        <>
                          <div className="form-group col-md-4 col-sm-6">
                            <label className="form-label required">
                              Email Address{" "}
                            </label>
                            <input
                              type="text"
                              name="email"
                              className="form-control"
                              id="validationCustom02"
                              placeholder="Your valid email.."
                              onChange={handleChange}
                              required
                            />
                          </div>
                          <div className="form-group col-md-4 col-sm-6">
                            <label className="form-label required">
                              Password{" "}
                            </label>
                            <input
                              type="password"
                              name="password"
                              className="form-control"
                              id="validationCustom03"
                              placeholder="Choose a safe one.."
                              onChange={handleChange}
                              required
                            />
                          </div>
                          <div className="form-group col-md-4">
                            <label className="form-label required">
                              Confirm Password{" "}
                            </label>
                            <input
                              type="password"
                              className="form-control"
                              id="validationCustom04"
                              placeholder="Choose a safe one.."
                              required
                            />
                          </div>
                          <div className="form-group col-sm-12">
                            <label className="form-label required">
                              Description
                            </label>
                            <textarea
                              className="form-control"
                              name="description"
                              id="validationCustom010"
                              rows="5"
                              placeholder="What would you like to see?"
                              onChange={handleChange}
                              required
                            ></textarea>
                          </div>
                          <div className="form-group col-sm-6">
                            <label className="form-label required">
                              Address
                            </label>
                            <input
                              type="text"
                              name="address"
                              className="form-control"
                              id="validationCustom011"
                              placeholder="Enter your Address"
                              onChange={handleChange}
                              required
                            />
                          </div>
                          <div className="form-group col-sm-6">
                            <label className="form-label required">
                              Pincode
                            </label>
                            <input
                              type="number"
                              name="pincode"
                              id="zip_code"
                              className="form-control"
                              placeholder="Enter pin code"
                              onChange={handleChange}
                              required=""
                            />
                          </div>
                        </>{" "}
                        <div className="next-btn d-flex col-sm-12">
                          <button
                            type="button"
                            className="btn btn-primary prev1 btn-sm"
                            onClick={() => setGoSteps(0)}
                          >
                            <i className="fas fa-arrow-left me-2" />
                            Previous
                          </button>
                          <button
                            type="submit"
                            className="btn btn-primary next2 btn-sm"
                            onClick={() => setGoSteps(2)}
                          >
                            Next
                            <i className="fas fa-arrow-right ms-2" />
                          </button>
                        </div>
                      </form>
                    </div>
                  )}
                  {goSteps === 2 && (
                    <div className="wizard-step-3">
                      <>
                        <div className="dropzone-main dropzone-admin">
                          <label className="form-label required">Media</label>
                          <Uploader
                            className="dropzone"
                            action="//jsonplaceholder.typicode.com/posts/"
                            draggable
                          >
                            <div className="dz-message needsclick">
                              <i className="fas fa-cloud-upload-alt"></i>
                              <h6>Drop files here or click to upload.</h6>
                            </div>
                          </Uploader>
                        </div>
                      </>{" "}
                      <div className="next-btn d-flex">
                        <button
                          type="button"
                          className="btn btn-primary prev2 btn-sm"
                          onClick={() => setGoSteps(1)}
                        >
                          <i className="fas fa-arrow-left me-2" /> Previous
                        </button>
                        <button
                          type="button"
                          className="btn btn-primary next3 btn-sm"
                          onClick={() => setGoSteps(2)}
                        >
                          submit
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddAgent;
