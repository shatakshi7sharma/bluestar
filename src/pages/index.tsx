import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Login from "../components/auth/Login";

const LoginPage = () => {
  const router = useRouter();

  return (
    <Login/>
  );
};

export default LoginPage;



