import { TLoginInputNames, TRegisterInputNames } from "../types";

export interface IRegisterInput {
  name: TRegisterInputNames;
  type: string;
  placeholder: string;
}

export interface ILoginInput {
  name: TLoginInputNames;
  type: string;
  placeholder: string;
}

export interface IErrorResponse {
  error: {
    message?: string;
  }
}