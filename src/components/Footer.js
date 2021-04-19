import React from "react";

const Footer = (props) => {
  return (
    <div>
      <div className="footer">
        <div className="footer-logo">
          <h2>
            <i className="fa fa-superpowers fa-lg"></i>{props.logo}
          </h2>
          <div className="social-links">
            <h4>
              <a href="#">
                <i className="fa fa-facebook-square fa-lg" aria-hidden="true"></i>
              </a>
            </h4>
            <h4>
              <a href="#">
                <i className="fa fa-github-square fa-lg" aria-hidden="true"></i>
              </a>
            </h4>
            <h4>
              <a href="#">
                <i className="fa fa-linkedin-square fa-lg" aria-hidden="true"></i>
              </a>
            </h4>
          </div>
        </div>
        <div className="footer-navbar">
          <h6 className="mb-3 mb-lg-4 bold-text">
            <b>MENU</b>
          </h6>
          <ul className="list-unstyled">
            <li>Home</li>
            <li className="text-muted">About</li>
            <li className="text-muted">Blog</li>
            <li className="text-muted">Portfolio</li>
          </ul>
        </div>
        <div className="footer-address">
          <h6 className="mb-3 mb-lg-4 text-muted bold-text mt-sm-0 mt-5">
            <b>ADDRESS</b>
          </h6>
          <p className="mb-1">BANGANGA</p>
          <p>INDORE (M.P.)</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
