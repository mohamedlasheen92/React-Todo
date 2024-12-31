import { TextareaHTMLAttributes } from "react"

interface IProps extends TextareaHTMLAttributes<HTMLTextAreaElement> { }

const Textarea = ({ ...rest }: IProps) => {

  return (
    <>
      <textarea rows={6} className="border-[1px] border-gray-300 shadow-md focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 rounded-lg px-3 py-3 text-md w-full bg-transparent"
        {...rest}></textarea>


    </>
  )
}

export default Textarea