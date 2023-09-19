import { useState } from "react"
import { header_menu } from "../constants"
import { logo } from "../assets"

const Navbar = () => {
  const [active, setActive] = useState("Home")

  return (
    <nav className="w-full box-width flex py-6 justify-center items-center navbar">
      <img
        src={logo}
        alt="Biteezy"
        className=" w-[30%] ss:w-[20%] sm:w-[15%] md:w-[10%]"
      />
      {/* Navbar for desktop screen */}
      <ul className="list-none md:flex hidden justify-end items-center flex-1">
        {header_menu.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text[16px] hover:text-secondary ${
              active === nav.title ? "text-white" : "text-dimWhite"
            } ${index === header_menu.length - 1 ? "mr-0" : "mr-10"}`}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar
