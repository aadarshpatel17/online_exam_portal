import React, { Fragment, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

function LoginPage(props) {
  const [user, setUser] = useState({ username: "", password: "" });

  const loginSubmitHandler = () => {
    var data = JSON.stringify({
      username: user.username,
      password: user.password,
    });

    console.log(data);

    // var axios = require("axios");
    // var data = JSON.stringify({
    //   username: user.username,
    //   password: user.password,
    // });

    // axios('/login')
    // .then(response => console.log('time'))
    // .catch(err => console.log(err))
  };

  return (
    <Fragment>
      <Helmet>
        <title>EXAMR - LOGIN</title>
      </Helmet>
      <div>
        <form className="form" onSubmit={loginSubmitHandler}>
          {" "}
          {/* method="POST" action="/login" */}
          <div className="form-group">
            <input
              type="text"
              name="username"
              value={user.email}
              onChange={(e) => setUser({ ...user, username: e.target.value })}
              placeholder="Your Name"
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
          <div className="form-group mb-0 mt-4">
            <Link
              to={{
                pathname: "/exam",
                state: { user },
              }}
            >
              <input
                type="submit"
                className="btn text-white"
                value="Take Test"
              />
            </Link>
          </div>
        </form>
      </div>
    </Fragment>
  );
}

export default LoginPage;
