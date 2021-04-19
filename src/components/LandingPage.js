import React, { Fragment, useState } from "react";
import { Helmet } from 'react-helmet'
import Navbar from "./Navbar";
import SignOrLogin from "./SignOrLogin";
import Footer from "./Footer";

const LandingPage = (props) => {
  const [status, setStatus] = useState(true);
  const [logo] = useState("EXAMR");

  const HandleClick=()=>{
     setStatus(!status)
  }

  return (
    <Fragment>
      <Helmet><title>EXAMR - HOME</title></Helmet>
      <div>
        <Navbar logo={logo} status={status} set={HandleClick} />
        <SignOrLogin status={status} />
        <Footer logo={logo} />
      </div>
    </Fragment>
  );
};

export default LandingPage;
