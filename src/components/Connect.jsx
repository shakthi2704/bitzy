import Button from "./Button"
import { AiFillPhone } from "react-icons/ai"
import { ContactModal } from "../components"

const Connect = () => {
  return (
    <section id="contact">
      <div className="block ss:hidden min-h-[100px]"></div>
      <div className="flexCenter margin-y sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] transparent_box_shadow p-10">
        <div className="flex-1 flex flex-col">
          <h2 className="heading2 md:text-[50px] sm-text-[40px] text-[35px] text-white sm:leading-[76.8px] leading-[66.8px]">
            Get in touch with us!
          </h2>
          <p className="paragraph max-w-[470px] mt-2 sm:mt-5">
            Have any query ? No worries, connect with us today by clicking on
            contact us button and send you message directly with us
          </p>
        </div>
        <div
          className={`md:flexCenter inline-block w-full sm:w-auto sm:ml-10 ml-0 sm:mt-0 mt-10`}
        >
          <Button title="Contact Us" icon={<AiFillPhone></AiFillPhone>} />
        </div>
      </div>
    </section>
  )
}

export default Connect
