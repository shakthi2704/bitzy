import React from "react"
import {
  Community,
  Connect,
  Converter,
  Explore,
  Features,
  Footer,
  Hero,
  Market,
  Navbar,
  Testimonials,
} from "./components"

const App = () => {
  return (
    <div className="bg-primary text-white w-full overflow-hidden">
      <div
        className={`fixed z-50 top-0 w-full drop-shadow-2xl transparent_box_shadow bg-primary padding-x flexCenter`}
      >
        <div className="box-width">
          <Navbar />
        </div>
      </div>

      <div className="padding-x flexCenter">
        <div className="box-width">{/* <Hero /> */}</div>
      </div>

      <div className="padding-x flexCenter">
        <div className="box-width">
          <Community />
          <Converter />
          <Features />
          <Market />
          <Testimonials />
          <Explore />
          <Connect />
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default App
