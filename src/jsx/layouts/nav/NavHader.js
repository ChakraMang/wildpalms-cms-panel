import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

/// React router dom
import { Link } from "react-router-dom";

//
import { navtoggle } from "../../../store/actions/AuthActions";

/// images
import logoText from "../../../images/logo-text.png";

const NavHader = () => {
  const [toggle, setToggle] = useState(false);
  const [logo, setLogo] = useState(
    "https://wildpalms-hospitality-db.s3.ap-south-1.amazonaws.com/Logos/wp-logo.png"
  );
  const dispatch = useDispatch();
  const sideMenu = useSelector((state) => state.sideMenu);
  const handleToogle = () => {
    dispatch(navtoggle());
  };

  const updateImageSrc = () => {
    if (window.innerWidth < 768) {
      setLogo(
        "https://wildpalms-hospitality-db.s3.ap-south-1.amazonaws.com/Logos/wp-logo-favicon.png"
      ); // Small screen image URL
    } else {
      setLogo(
        "https://wildpalms-hospitality-db.s3.ap-south-1.amazonaws.com/Logos/wp-logo.png"
      ); // Default image URL
    }
  };

  useEffect(() => {
    window.addEventListener("resize", updateImageSrc);
    updateImageSrc(); // Initial check

    return () => {
      window.removeEventListener("resize", updateImageSrc);
    };
  }, []);
  return (
    <div className="nav-header">
      <Link to="/" className="brand-logo">
        <img className="logo-abbr" src={logo} alt="" />
        <img className="logo-compact" src={logoText} alt="" />
        <img className="brand-title" src={logoText} alt="" />
      </Link>

      <div
        className="nav-control"
        onClick={() => {
          setToggle(!toggle);
          handleToogle();
        }}
      >
        <div className={`hamburger ${sideMenu ? "is-active" : ""}`}>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>
      </div>
    </div>
  );
};

export default NavHader;
