import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { Styles } from "../styles/styles";
import Home from "../pages/Home";

const Router = () => {
  // const loggedIn = localStorage.getItem("isLoggedIn");

  return (
    <Suspense fallback={null}>
      <Styles />
      <Routes>
        <Route path="/*" element={<Home />}/>
      </Routes>
    </Suspense>
  );
};

export default Router;
