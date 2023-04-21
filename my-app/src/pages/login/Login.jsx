import React from "react";
import "./login.css"

function Login() {
  return (
    <div>
      <div class="container px-4 py-5">
        <div class="row align-items-center g-lg-5 py-5">
          <img
            src="https://credcv.com/wp-content/uploads/2021/06/benefits-of-having-an-own-job-portal_033e017b0_3810.jpeg"
            alt=""
            class="sign-up-image"
          />
          <div class="col-md-10 mx-auto col-lg-5">
            <form
              class="p-4 p-md-5 border rounded-3 bg-body-tertiary bg-light"
              autocomplete="off"
              data-gtm-form-interact-id="0"
            >
              <h1 class="mb-4 login-heading">SignIn / SignUp </h1>
              <div class="form-floating mb-3">
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  placeholder="name@example.com"
                  // value="destinantionwedding2023@gmail.com"
                  data-gtm-form-interact-field-id="0"
                />
                <label for="floatingInput" style={{color: "black"}}>Email address</label>
              </div>
              <div class="form-floating mb-3">
                <input
                  type="password"
                  class="form-control"
                  id="password"
                  placeholder="Password"
                  // value="admin123"
                  data-gtm-form-interact-field-id="1"
                />
                <label for="floatingPassword" style={{color: "black"}}>Password</label>
              </div>
              <button class="w-100 btn btn-lg btn-danger login-btn" type="submit">
                Login
              </button>
              <hr class="my-4" />
              <small class="text-body-secondary d-flex flex-row">
                <div className="text-dark">

                If you're not a user.{" "}
                </div>
                <span class="hover-pointer text-primary ms-1">Signup</span>
              </small>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
