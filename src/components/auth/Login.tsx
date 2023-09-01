import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useLoginUserMutation } from "../../services/authApi";
import { loginSchema } from '@/src/schema/schema';
import { ILoginProps } from '@/src/interfaces/authInterfaces';
import Link from 'next/link';
import '../../app/globals.css';
import { setCookie, getCookie } from '@/utils/Cookie';
import { IMAGE_PATHS } from '@/utils/constants';

export default function Login() {
  const [loginUser, loginRes] = useLoginUserMutation();
  const router = useRouter();

  // Define initial form values
  const initialValues: ILoginProps = {
    email: '',
    password: '',
    captchaStatus: false,

  };

  // Define the submit function
  const handleSubmit = async (values: ILoginProps) => {
    const loginData = {
      captchaStatus: false,
      email: values.email,
      password: values.password,
    }

    await loginUser(loginData);
  }

  useEffect(() => {
    
    if(loginRes?.isSuccess === true){
      setCookie("token" ,loginRes?.data?.token, "/")
      router.push('/home')
    }

  },[loginRes])

  return (
    <div className="bg-gray-100 flex items-center justify-center h-screen rounded">
      <div className="bg-white p-8 rounded shadow-md w-full sm:w-96">
        <div className="text-center">
          <img
            src={IMAGE_PATHS.BLUESTAR_LOGO}
            className="mx-auto"
            alt="logo"
            style={{ maxWidth: '50px' }}
          />
          <h1 className="justify-center font-sans text-xl font-bold">Log in to your Account</h1>
        </div>

        {/* Formik Form */}
        <Formik initialValues={initialValues} 
                onSubmit={(values:any,action:any)=>{
                  handleSubmit(values)
                }} 
                validationSchema ={loginSchema}
                >
          <Form className="space-y-4">
            <div>
              <label htmlFor="email" className="block mb-1">Email</label>
              <Field
                type="email"
                id="email"
                name="email"
                className="w-full border px-3 py-2 rounded"
              />
              <ErrorMessage name="email" component="div" className="text-red-500"/>
            </div>
            <div>
              <label htmlFor="password" className="block mb-1">Password</label>
              <Field
                type="password"
                id="password"
                name="password"
                className="w-full border px-3 py-2 rounded"
              />

              <ErrorMessage name="password" component="div" className="text-red-500" />

            </div>



            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
            >
              Login
            </button>
            <Link href="/forgot-password" className="flex text-blue-800 items-center justify-center">Forgot password</Link>
          </Form>
        </Formik>
        
        
        <p className="mt-4 text-center">
          Don&apos;t have an account?
          <Link href="/sign-up">Sign Up</Link>
        </p>

      </div>

    </div>

  );
}