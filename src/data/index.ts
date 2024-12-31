import { ILoginInput, IRegisterInput } from "../interfaces";

export const registerForm: IRegisterInput[] = [
  {
    name: "username",
    type: "text",
    placeholder: "Username",
  },
  {
    name: "email",
    type: "email",
    placeholder: "Email Address",
  },
  {
    name: "password",
    type: "password",
    placeholder: "Password",
  }
]
export const loginForm: ILoginInput[] = [
  {
    name: "identifier",
    type: "text",
    placeholder: "Email Address",
  },
  {
    name: "password",
    type: "password",
    placeholder: "Password",
  }
]