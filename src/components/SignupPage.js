import React, { Fragment, useState } from "react";
import { Helmet } from "react-helmet";

function SignupPage() {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    contact: "",
  });

  const submitHandler = () => {
    // var axios = require("axios");
    var data = JSON.stringify({
      username: user.username,
      email: user.email,
      password: user.password,
      contact: user.contact,
    });


    alert('Thanks for Singup!')

    // var config = {
    //   method: "post",
    //   url: "/register",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   data: data,
    // };

    // axios(config)
    //   .then(function (response) {
    //     console.log(JSON.stringify(response.data));
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
  };

  return (
    <Fragment>
      <Helmet>
        <title>EXAMR - SIGNUP</title>
      </Helmet>
      <div>
        <form className="form" onSubmit={submitHandler} > {/*  action="/register" method="POST" */}
          <div className="form-group">
            <input
              type="type"
              name="username"
              value={user.username}
              onChange={(e) => setUser({ ...user, username: e.target.value })}
              placeholder="Your Name"
              className="form-control"
              autoComplete="off"
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              placeholder="Email"
              className="form-control"
              autoComplete="off"
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              name="password"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              placeholder="Password"
              className="form-control"
              autoComplete="off"
            />
          </div>
          <div className="form-group">
            <input
              type="number"
              name="contact"
              value={user.contact}
              onChange={(e) => setUser({ ...user, contact: e.target.value })}
              placeholder="Contact"
              className="form-control"
              autoComplete="off"
            />
          </div>
          <div className="form-group mb-0 mt-4">
            <input
              type="submit"
              className="btn text-white"
              value="Signup"
            />
          </div>
        </form>
      </div>
    </Fragment>
  );
}

export default SignupPage;
