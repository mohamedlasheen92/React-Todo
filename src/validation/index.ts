import * as yup from "yup";

export const registerSchema = yup.object({
  username: yup.string().required("Username is required").min(5, "Username must be at least 5 characters"),
  email: yup.string().required("Email is required").matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Invalid email address"),
  password: yup.string().required("Password is required").min(6, "Password must be at least 6 characters")
}).required();
export type RegisterFormData = yup.InferType<typeof registerSchema>;


export const loginSchema = yup.object({
  identifier: yup.string().required("Email is required").matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Invalid email address"),
  password: yup.string().required("Password is required").min(6, "Password must be at least 6 characters")
}).required();
export type LoginFormData = yup.InferType<typeof loginSchema>;
