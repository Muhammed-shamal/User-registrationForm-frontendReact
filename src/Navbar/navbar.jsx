import React from "react";
import { useNavigate, } from "react-router-dom";
import icon from "../FormValidation/dhanwis.jpg";
import './navbar.css'
import { useCookies } from "react-cookie";

export default function Navbar({ user, setUser }) {
  const [cookies, removeCookie] = useCookies([]);
  const navigate = useNavigate();

  const logout = () => {
    setUser(null);
    removeCookie("token");
    console.log("User logout");
    navigate("/login");
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light shadow-sm">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img
              src={icon}
              alt="Logo"
              width="30"
              height="24"
              className="d-inline-block align-text-top"
            />
            DOCTOR
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="navbar-collapse collapse" id="navbarNavDropdown">
            <div className="ms-auto">
              <span
                style={{ cursor: "pointer", color: "seagreen" }}
                onClick={() => {
                  !user ? navigate("/login") : navigate("/userPanel");
                }}
              >
                <i className="fa-solid fa-user mb-1"></i>{" "}
                {user ? `${user.fname} ${user.lname}` : "Account"}
              </span>{" "}
              {user ? (
                <span
                  className="ms-3"
                  style={{ cursor: "pointer", color: "crimson" }}
                  onClick={logout}
                >
                  <i className="fa-solid fa-right-from-bracket"></i> Logout
                </span>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
