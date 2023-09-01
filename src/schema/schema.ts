import * as Yup from "yup";

// Define schema
export const loginSchema = Yup.object().shape({
    email:Yup.string().email("Email is not valid").required('Email is required'),
    password: Yup.string().max(14, 'Must be 12 characters or less')
    .min(8, 'Must be 6 characters or more')
    .required('Please Enter your password')
});
