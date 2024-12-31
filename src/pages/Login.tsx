import { useForm } from "react-hook-form";
import Button from "../components/ui/Button"
import Input from "../components/ui/Input"
import { LoginFormData, loginSchema } from "../validation";
import { yupResolver } from "@hookform/resolvers/yup";
import axiosInstance from "../config/axios.config";
import toast from "react-hot-toast";
import { AxiosError } from "axios";
import { IErrorResponse } from "../interfaces";
import { loginForm } from "../data";
import ErrorMessage from "../components/ui/ErrorMessage";
import { useState } from "react";

const LoginPage = () => {
  const [isLoading, setIsLoading] = useState(false)
  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormData>({
    resolver: yupResolver(loginSchema)
  });
  const onSubmit = async (data: LoginFormData) => {
    setIsLoading(true)

    try {
      const response = await axiosInstance.post('/auth/local', data)
      console.log(response);
      if (response.status === 200) {
        toast.success('User has been logged in successfully', {
          duration: 4000,
          position: 'top-center',
          style: {
            backgroundColor: 'black',
            color: 'white',
            width: 'fit-content'
          }
        })
        localStorage.setItem('loggedInUser', JSON.stringify(response.data))
        setTimeout(() => {
          location.replace('/')
        }, 1000)
      }
    } catch (err) {
      const errObj = err as AxiosError<IErrorResponse>
      console.log(errObj.response?.data.error.message);
      toast.error(`${errObj.response?.data.error.message}`, {
        duration: 4000,
        position: 'top-center',
      })
    } finally {
      setIsLoading(false)
    }

  }


  console.log(errors);
  const renderLoginForm = loginForm.map(({ name, placeholder, type }, index) => {
    return (
      <div key={index}>
        <Input type={type} placeholder={placeholder} {...register(name)} />
        {errors[name] && <ErrorMessage message={errors[name].message} />}
      </div>
    )
  })

  return (
    <>
      <div className="max-w-md mx-auto">
        <h2 className="text-center mb-4 text-3xl font-semibold">Login to get access!</h2>

        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>

          {renderLoginForm}

          <Button className="w-full" isLoading={isLoading}>Login</Button>
        </form>

      </div>



    </>
  )
}

export default LoginPage