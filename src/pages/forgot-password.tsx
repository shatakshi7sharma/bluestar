import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import ForgotPassword from "../components/auth/ForgotPassword";

const ForgotPasswordPage = () => {
  const router = useRouter();

  return (
    <ForgotPassword/>
  );
};

export default ForgotPasswordPage;



