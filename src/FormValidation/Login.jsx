import React, { useState } from "react";
import TeamLogo from "./dhanwis.jpg";
import "./SignUp.css";
import { Link, useNavigate } from "react-router-dom";
import CustomModal from "./Modal";
import { useFormContext } from "react-hook-form";
import { validatePassword, validateEmail } from "./datas";

export default function Login({ setUser }) {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useFormContext();

  const [isOpen, setIsOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const loginBtn = async (loginData) => {
    try {
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(loginData),
        credentials: "include",
      });

      const data = await response.json();

      if (data.success) {
        setIsOpen(true);
        setUser(data.user);
        console.log(data);
      } else {
        console.error(data.message);
        setErrorMessage("Invalid email or password");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const closeModal = () => {
    setIsOpen(false);
    navigate("/");
  };

  return (
    <div>
      <section className="h-100 bg-dark">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col">
              <div className="card card-registration my-4">
                <div className="row g-0">
                  <div className="col-xl-6 d-none d-xl-block">
                    <img
                      src={TeamLogo}
                      alt="our Team logo"
                      width={"560px"}
                      height={"900px"}
                      style={{
                        borderTopLeftRadius: ".25rem",
                        borderBottomLeftRadius: ".25rem",
                        width: "",
                      }}
                    />
                  </div>
                  <div className="col-xl-6">
                    <div className="card-body p-md-5 text-black">
                      <h4>Welcome to Dhanwis Tech Info KNR </h4>
                      <img
                        src={TeamLogo}
                        alt="doctorsymbol"
                        width={"50px"}
                        height={"auto"}
                      />
                      <h3 className="text-center mb-5 text-uppercase text-disabled text-muted">
                        Sign Up
                        <span className="text-dark">/Login</span>
                      </h3>
                      <form onSubmit={(event) => event.preventDefault()}>
                        <div class="form-outline mb-4">
                          <input
                            type="email"
                            name="emailID"
                            class="form-control form-control-lg"
                            {...register("emailID", validateEmail)}
                            style={
                              errors.emailID
                                ? {
                                    borderBottom: "2px solid red",
                                  }
                                : { borderColor: "", boxShadow: "" }
                            }
                          />
                          <label class="form-label" for="form3Example3cg">
                            Your Email
                          </label>

                          {errors.emailID && (
                            <span className="text-danger">
                              {errors.emailID.message}
                            </span>
                          )}
                        </div>

                        <div class="form-outline mb-4">
                          <input
                            type="password"
                            name="password"
                            class="form-control form-control-lg"
                            style={
                              errors.password
                                ? {
                                    borderBottom: "2px solid red",
                                  }
                                : { borderColor: "", boxShadow: "" }
                            }
                            {...register("password", validatePassword)}
                          />
                          <label class="form-label" for="form3Example4cg">
                            Password
                          </label>

                          {errors.password && (
                            <span className="text-danger">
                              {errors.password.message}
                            </span>
                          )}
                        </div>

                        {errorMessage && (
                          <div className="mt-2 mb-3">
                            <small className="text-danger">
                              {/* The password that you've entered is incorrect. */}
                              {errorMessage}
                              <Link to="/forgotPassword">
                                <span className="ms-3">
                                  Forgotten password?
                                </span>
                              </Link>
                            </small>
                          </div>
                        )}

                        {/* <div class="form-check d-flex justify-content-center mb-5">
                          <input
                            class="form-check-input me-2"
                            type="checkbox"
                            value=""
                            name="checkbox"
                            {...register("checkbox", validateSelect)}
                          />
                          <label class="form-check-label" for="form2Example3g">
                            I agree all statements in{" "}
                            <a href="#!" class="text-body">
                              <u>Terms of service</u>
                            </a>
                          </label>
                        </div> */}

                        <p class="text-center text-muted mt-5 mb-0">
                          Don't have an account ?{" "}
                          <Link to="/signIn">
                            <u>SignIn here</u>
                          </Link>
                        </p>
                      </form>

                      <div className="d-flex align-items-center justify-content-center pt-3">
                        <button
                          className="btn btn-primary btn-lg mt-3"
                          type="button"
                          onClick={handleSubmit(loginBtn)}
                        >
                          Login
                        </button>
                      </div>

                      <div className="text-center mt-3">
                        {" "}
                        <small className="text-muted">
                          * Terms and Condition privacy policy
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <CustomModal isOpen={isOpen} onClose={closeModal} />
    </div>
  );
}
