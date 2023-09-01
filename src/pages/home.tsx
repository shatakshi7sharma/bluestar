import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Login from "../components/auth/Login";
import Home from "../components/Home";

const DashboardPage = () => {
  const router = useRouter();

  return (
    <Home/>
  );
};

export default DashboardPage;



