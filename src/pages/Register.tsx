import { yupResolver } from "@hookform/resolvers/yup";
import Button from "../components/ui/Button"
import ErrorMessage from "../components/ui/ErrorMessage";
import Input from "../components/ui/Input"
import { useForm } from "react-hook-form";
import { RegisterFormData, registerSchema } from "../validation";
import { registerForm } from "../data";
import axiosInstance from "../config/axios.config";
import toast from "react-hot-toast";
import { AxiosError } from "axios";
import { IErrorResponse } from "../interfaces";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const RegisterPage = () => {
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  const { register, handleSubmit, formState: { errors } } = useForm<RegisterFormData>({
    resolver: yupResolver(registerSchema)
  });
  const onSubmit = async (data: RegisterFormData) => {
    setIsLoading(true)

    try {
      const response = await axiosInstance.post('/auth/local/register', data)
      console.log(response);
      console.log(data);
      if (response.status === 200) {
        toast.success('User has been registered successfully', {
          duration: 4000,
          position: 'top-center',
          style: {
            backgroundColor: 'black',
            color: 'white',
            width: 'fit-content'
          }
        })
      }

      navigate('/login')
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
  const renderRegisterForm = registerForm.map(({ name, placeholder, type }, index) => {
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
        <h2 className="text-center mb-4 text-3xl font-semibold">Register to get access!</h2>

        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>

          {renderRegisterForm}

          <Button className="w-full" isLoading={isLoading}>{isLoading ? "Loading..." : "Register"}</Button>
        </form>

      </div>



    </>
  )
}

export default RegisterPage