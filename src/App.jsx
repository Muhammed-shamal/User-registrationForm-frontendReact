import { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useAuth } from "./ContextApi/authContext";
import Navbar from "./Navbar/navbar";
import UserPanel from "./UserPanel/userPanel";
import SignUp from "./FormValidation/SignUp";
import Login from "./FormValidation/Login";
import UnknownUser from "./UserPanel/UnknownUser";

function App() {
  const methods = useForm({ mode: "onSubmit" });
  const { user, setUser } = useAuth();
  const [cookies, removeCookie] = useCookies([]);
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const verifyCookie = async () => {
  //     try {
  //       let response = await fetch("http://localhost:5000", {
  //         method: "POST",
  //         headers: { "Content-Type": "application/json" },
  //         credentials: "include",
  //       });
  //       const data = await response.json();

  //       const { user } = data;
  //       setUser(user);
  //       setLoading(false);
  //       console.log("ans bellow ");
  //       console.log(data);
  //     } catch (error) {
  //       console.error("error ", error);
  //     }
  //   };

  //   verifyCookie();
  // }, [cookies, removeCookie, setUser]);

  useEffect(() => {
    async function fetchData() {
      try {
        let response = await fetch("http://localhost:5000", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
        });

        const data = await response.json();

        const { user } = data;
        setUser(user);
        setLoading(false);
        console.log("ans bellow ");
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [cookies, removeCookie, setUser]);

  if (loading) {
    return null;
  }

  return (
    <div className="container-fluid">
      <FormProvider {...methods}>
        <BrowserRouter>
          <Navbar user={user} setUser={setUser} />
          <Routes>
            <Route
              path={"/"}
              element={
                user ? (
                  <UserPanel user={user} setUser={setUser} />
                ) : (
                  <UnknownUser />
                )
              }
            />
            <Route path="/userPanel" element={<UserPanel user={user} />} />
            <Route path="/signIn" element={<SignUp />} />
            <Route path="/login" element={<Login setUser={setUser} />} />
          </Routes>
        </BrowserRouter>
      </FormProvider>
    </div>
  );
}

export default App;
