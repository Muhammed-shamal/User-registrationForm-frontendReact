import { useState } from "react";
import TeamLogo from "./dhanwis.jpg";
import "./SignUp.css";
import { Link, useNavigate } from "react-router-dom";
import { useFormContext } from "react-hook-form";

import {
  validateConfirmPassword,
  validateEmail,
  validatePassword,
  validatePhoneNumber,
  validatePincode,
  validateUname,
} from "./datas";

export default function SignUp() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useFormContext();

  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const signBtn = (data) => {
    fetch("http://localhost:5000/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
      credentials: "include",
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          console.log(data);
          navigate("/login");
        } else {
          console.log(data.message);
          setError(data.message);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div>
      <section class="h-100 bg-dark">
        <div class="container py-5 h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col">
              <div class="card card-registration my-4">
                <div class="row g-0">
                  <div class="col-xl-6 d-none d-xl-block">
                    <img
                      src={TeamLogo}
                      alt="our Team logo"
                      width={"560px"}
                      height={"900px"}
                      style={{
                        borderTopLeftRadius: ".25rem",
                        borderBottomLeftRadius: ".25rem",
                      }}
                    />
                  </div>
                  <div class="col-xl-6">
                    <div class="card-body p-md-5 text-black">
                      <h4>DHANWIS TECH INFO KNR</h4>
                      <img
                        src={TeamLogo}
                        alt="doctorsymbol"
                        width={"50px"}
                        height={"auto"}
                      />
                      <h3 className="text-center mb-5 text-uppercase text-disabled text-muted">
                        Login
                        <span className="text-dark">/Sign UP</span>
                      </h3>

                      <form onSubmit={(event) => event.preventDefault()}>
                        <div class="row">
                          <div class="col-md-6 mb-4">
                            <div class="form-outline">
                              <input
                                type="text"
                                name="fname"
                                class="form-control form-control-lg"
                                {...register("fname", validateUname)}
                                style={
                                  errors.fname
                                    ? {
                                        borderBottom: "2px solid red",
                                      }
                                    : { borderColor: "", boxShadow: "" }
                                }
                              />
                              <label class="form-label" for="form3Example1n">
                                first name
                              </label>

                              {errors.fname && (
                                <span className="text-danger">
                                  {errors.fname.message}
                                </span>
                              )}
                            </div>
                          </div>
                          <div class="col-md-6 mb-4">
                            <div class="form-outline">
                              <input
                                type="text"
                                name="lname"
                                class="form-control form-control-lg"
                                {...register("lname", validateUname)}
                                style={
                                  errors.lname
                                    ? {
                                        borderBottom: "2px solid red",
                                      }
                                    : { borderColor: "", boxShadow: "" }
                                }
                              />
                              <label class="form-label" for="form3Example1n">
                                last name
                              </label>

                              {errors.lname && (
                                <span className="text-danger">
                                  {errors.lname.message}
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                        <div class="form-outline mb-4">
                          <input
                            type="text"
                            name="address"
                            class="form-control form-control-lg"
                            {...register("address", validateUname)}
                            style={
                              errors.address
                                ? {
                                    borderBottom: "2px solid red",
                                  }
                                : { borderColor: "", boxShadow: "" }
                            }
                          />
                          <label class="form-label" for="form3Example8">
                            Address
                          </label>
                          {errors.address && (
                            <span className="text-danger">
                              {errors.address.message}
                            </span>
                          )}
                        </div>
                        <div class="form-outline mb-4">
                          <input
                            type="text"
                            name="pincode"
                            class="form-control form-control-lg"
                            {...register("pincode", validatePincode)}
                            style={
                              errors.pincode
                                ? {
                                    borderBottom: "2px solid red",
                                  }
                                : { borderColor: "", boxShadow: "" }
                            }
                          />
                          <label class="form-label" for="form3Example90">
                            Pincode
                          </label>
                          {errors.pincode && (
                            <span className="text-danger">
                              {errors.pincode.message}
                            </span>
                          )}
                        </div>
                        <div class="form-outline mb-4">
                          <input
                            type="text"
                            name="phoneNumber"
                            class="form-control form-control-lg"
                            {...register("phoneNumber", validatePhoneNumber)}
                            style={
                              errors.phoneNumber
                                ? {
                                    borderBottom: "2px solid red",
                                  }
                                : { borderColor: "", boxShadow: "" }
                            }
                          />
                          <label class="form-label" for="form3Example90">
                            Phone number
                          </label>
                          {errors.phoneNumber && (
                            <span className="text-danger">
                              {errors.phoneNumber.message}
                            </span>
                          )}
                        </div>
                        <div class="form-outline mb-4">
                          <input
                            type="text"
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
                          <label class="form-label" for="form3Example97">
                            Email ID
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
                            {...register("password", validatePassword)}
                            style={
                              errors.password
                                ? {
                                    borderBottom: "2px solid red",
                                  }
                                : { borderColor: "", boxShadow: "" }
                            }
                          />
                          <label class="form-label" for="form3Example4cg">
                            Password
                          </label>

                          {errors.password && (
                            <span className="text-danger">
                              {errors.password.message}
                            </span>
                          )}

                          {errors.password &&
                            errors.password.type === "customValidation" && (
                              <span className="text-danger">
                                {errors.password.message}
                              </span>
                            )}
                        </div>
                        <div class="form-outline mb-4">
                          <input
                            type="password"
                            name="confirmPassword"
                            class="form-control form-control-lg"
                            {...register(
                              "confirmPassword",
                              validateConfirmPassword
                            )}
                            style={
                              errors.confirmPassword
                                ? {
                                    borderBottom: "2px solid red",
                                  }
                                : { borderColor: "", boxShadow: "" }
                            }
                          />
                          <label class="form-label" for="form3Example4cg">
                            Confirm Password
                          </label>
                          {errors.confirmPassword && (
                            <span className="text-danger">
                              {errors.confirmPassword.message}
                            </span>
                          )}
                        </div>
                      </form>

                      <p class="text-center text-muted mt-5 mb-0">
                        Have already an account?{" "}
                        <Link to="/login">
                          <u>Login here</u>
                        </Link>
                      </p>

                      <div>
                        <small className="text-danger">{error && error}</small>
                      </div>

                      <div class="d-flex justify-content-end pt-3">
                        <button
                          onClick={handleSubmit(signBtn)}
                          type="button"
                          class="btn btn-warning btn-lg ms-2"
                        >
                          SignUp
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
