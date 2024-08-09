import React from "react";
import Navbarr from "./Navbarr";

const Dashboard = () => {
  const userData = JSON.parse(localStorage.getItem("userData"));
  const username = userData.username;
  return (
    <div className="dashboard text-center mt-5">
      <Navbarr />
      <h1>Welcome, {username}</h1>
    </div>
  );
};
export default Dashboard;
