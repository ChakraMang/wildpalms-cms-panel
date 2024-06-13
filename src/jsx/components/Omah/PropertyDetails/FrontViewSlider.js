import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const FrontViewSlider = ({ picture, id }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  const currentDomain = window.location.origin;

  const handleShare = (id) => {
    const nextTabUrl = `${currentDomain}/property-details/${id}`;

    console.log("url", nextTabUrl);

    // Copy the URL to clipboard
    navigator.clipboard
      .writeText(nextTabUrl)
      .then(() => alert("Link copied to clipboard"))
      .catch((error) => console.error("Failed to copy:", error));
  };
  return (
    <div className="font-view-slider-container">
      <Slider {...settings}>
        <div className="items">
          <div className="front-view">
            <img src={picture} alt="" />
            <div className="info">
              <h3 className="mb-2 text-white">Front View</h3>
              <p className="mb-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi
              </p>
            </div>
            <div className="buttons">
              <Link to="#" onClick={() => handleShare(id)} className="me-4">
                <svg
                  width={25}
                  height={27}
                  viewBox="0 0 25 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.7501 17.125C18.9899 17.1268 18.2409 17.3083 17.5643 17.6548C16.8877 18.0013 16.3026 18.503 15.8569 19.1188L9.79706 15.0793C10.1789 14.0611 10.1789 12.939 9.79706 11.9207L15.8569 7.88126C16.537 8.80338 17.5237 9.45273 18.6397 9.71264C19.7556 9.97256 20.9277 9.826 21.9453 9.29931C22.9629 8.77261 23.7594 7.9003 24.1915 6.8391C24.6237 5.77789 24.6633 4.59736 24.3032 3.50959C23.943 2.42182 23.2068 1.49812 22.2268 0.904453C21.2467 0.310781 20.0871 0.0860493 18.9562 0.270634C17.8254 0.455218 16.7974 1.03702 16.057 1.91151C15.3166 2.786 14.9123 3.89586 14.9168 5.04168C14.9246 5.21774 14.9424 5.39323 14.9699 5.5673L8.45581 9.91005C7.76161 9.28424 6.90085 8.87314 5.97778 8.72652C5.0547 8.5799 4.10892 8.70406 3.25497 9.08396C2.40102 9.46386 1.67554 10.0832 1.16638 10.867C0.657219 11.6508 0.38623 12.5654 0.38623 13.5C0.38623 14.4347 0.657219 15.3492 1.16638 16.133C1.67554 16.9168 2.40102 17.5362 3.25497 17.9161C4.10892 18.296 5.0547 18.4201 5.97778 18.2735C6.90085 18.1269 7.76161 17.7158 8.45581 17.09L14.9699 21.4327C14.9424 21.6068 14.9246 21.7823 14.9168 21.9583C14.9168 22.9143 15.2002 23.8488 15.7313 24.6436C16.2624 25.4384 17.0173 26.0579 17.9005 26.4238C18.7836 26.7896 19.7555 26.8853 20.693 26.6988C21.6306 26.5123 22.4918 26.052 23.1678 25.376C23.8437 24.7001 24.3041 23.8389 24.4906 22.9013C24.6771 21.9637 24.5813 20.9919 24.2155 20.1087C23.8497 19.2255 23.2302 18.4707 22.4354 17.9396C21.6405 17.4085 20.706 17.125 19.7501 17.125Z"
                    fill="white"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default FrontViewSlider;
