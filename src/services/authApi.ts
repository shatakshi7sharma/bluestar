import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
    reducerPath: "authApi",
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.NEXT_PUBLIC_SERVER_URL,
    }),
    endpoints: (builder) => ({
        loginUser: builder.mutation({
            query: (body) => {
                return {
                    url: "/login",
                    method: "post",
                    headers: {},
                    body,
                };
            },
        }),
        registerUser: builder.mutation({
            query: (body) => {
                return {
                    url: "/sign-up",
                    method: "post",
                    headers: {},
                    body,
                };
            },
        }),
        accountVerification: builder.mutation({
            query: (body) => {
                return {
                    url: "/verify-otp",
                    method: "post",
                    headers: {},
                    body,
                };
            },
        }),
        resendOtp: builder.mutation({
            query: (body) => {
                return {
                    url: "/send-otp",
                    method: "post",
                    headers: {},
                    body,
                };
            },
        }),
        forgotPassword: builder.mutation({
            query: (body) => {
                return {
                    url: "/forgot-password",
                    method: "post",
                    headers: {},
                    body,
                };
            },
        }),
        resetPassword: builder.mutation({
            query: (body) => {
                return {
                    url: "/reset-password",
                    method: "post",
                    headers: {},
                    body,
                };
            },
        })
    })

});
export const {
    useLoginUserMutation,
    useRegisterUserMutation,
    useResendOtpMutation,
    useAccountVerificationMutation,
    useForgotPasswordMutation,
    useResetPasswordMutation,
} = authApi;