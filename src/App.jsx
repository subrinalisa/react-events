import React, { useState } from "react";

const App = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-4">
          <h1 className="text-center text-white text-capitalize">
            {username ? `Welcome ${username}` : "Login"}
          </h1>
          <form
            action="#"
            method="post"
            onSubmit={(event) => {
              event.preventDefault();
              setUsername(name);
            }}
          >
            <div className="mb-2">
              <input
                type="text"
                placeholder="Username"
                className="form-control"
                required="required"
                onChange={(event) => setName(event.target.value)}
              />
            </div>
            <div className="mb-2">
              <input
                type="password"
                placeholder="Password"
                className="form-control"
                required="required"
              />
            </div>
            <div className="mb-2">
              <button type="submit" className="btn btn-light btn-block w-100">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default App;
