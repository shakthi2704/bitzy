import React from "react"
import { AiOutlineArrowRight } from "react-icons/ai"
import { Button } from "../components"
import { app } from "../assets"

const Explore = () => {
  return (
    <div id="explore" className="flex flex-col md:flex-row padding-x">
      <div className="sectionInfo">
        <h2 className="heading2 md:text-[50px] sm-text-[40px] text-[35px] text-white sm:leading-[76.8px] leading-[66.8px]">
          Move ahead with us to explore the world
        </h2>
        <p className="paragraph max-w-[470px] mt-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
          reprehenderit natus culpa error modi
        </p>
        <Button
          title="Let's Get Started"
          icon={<AiOutlineArrowRight></AiOutlineArrowRight>}
        />
      </div>
      <div className="sectionImg">
        <img src={app} alt="app" />
      </div>
    </div>
  )
}

export default Explore
