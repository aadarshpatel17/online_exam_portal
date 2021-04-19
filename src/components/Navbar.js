import React from "react";

const Navbar = (props) => {
  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="#">
            <i className="fa fa-superpowers fa-lg"></i>
            {props.logo}
          </a>
          <ul className="navbar-nav mr-0 ml-auto">
            <button className="btn" onClick={props.set} >
              <a className="text-white" href="#">
                {props.status ? 'Login': 'Signup'}
              </a>
            </button>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
