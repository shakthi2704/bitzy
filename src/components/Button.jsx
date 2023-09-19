import React from "react"

const Button = ({ title, icon }) => {
  return (
    <button
      type="button"
      className="flex flex-center py-4 px-8 my-8 font-poppins font-medium text-[16px] text-primary primary_gradient rounded-full outline-none"
    >
      {title} <span className="ml-3"> {icon} </span>
    </button>
  )
}

export default Button
