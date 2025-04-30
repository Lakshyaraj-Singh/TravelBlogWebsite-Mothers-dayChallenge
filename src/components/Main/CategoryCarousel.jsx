import React from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import "../../styles1.css"
import { Link } from "react-router-dom"

export const CategoryCarousel = () => {
  const [sliderRef] = useKeenSlider({
    breakpoints: {
      "(min-width: 400px)": {
        slides: { perView: 2, spacing: 5 },
      },
      "(min-width: 1000px)": {
        slides: { perView: 5, spacing: 10 },
      },
    },
    slides: { perView: 1 },
  })

  return (
    <div ref={sliderRef} className="keen-slider h-60  ">

      <Link to="/categories"><div className="keen-slider__slide number-slide2"><div className="bg-gray-900  hover:bg-blue-500 cursor-pointer place-content-center place-items-center text-white h-full w-full">
        <div className=" h-1 w-37 rounded-3xl bg-white"></div>
        <h1 className="font-medium mt-2 text-2xl">    Travels</h1>
      </div></div></Link>
      <Link to="/categories"><div className="keen-slider__slide number-slide2"><div className="bg-gray-900 hover:bg-blue-500  cursor-pointer place-content-center place-items-center text-white h-full w-full">
        <div className=" h-1 w-37 rounded-3xl bg-white"></div>
        <h1 className="font-medium mt-2 text-2xl">    Foods</h1>
      </div></div></Link>
      <Link to="/categories">
      <div className="keen-slider__slide number-slide2"><div className="bg-gray-900 hover:bg-blue-500 cursor-pointer place-content-center place-items-center text-white h-full w-full">
        <div className=" h-1 w-37 rounded-3xl bg-white"></div>
        <h1 className="font-medium mt-2 text-2xl">    Guides</h1>
      </div></div></Link>
      <Link to="/categories">
         <div className="keen-slider__slide number-slide2"><div className="bg-gray-900 hover:bg-blue-500  cursor-pointer place-content-center place-items-center text-white h-full w-full">
        <div className=" h-1 w-37 rounded-3xl bg-white"></div>
        <h1 className="font-medium mt-2 text-2xl">    Stories</h1>
      </div></div> </Link>
      <Link to="/categories">
      <div className="keen-slider__slide number-slide2"><div className="bg-gray-900 hover:bg-blue-500 cursor-pointer place-content-center place-items-center text-white h-full w-full">
        <div className=" h-1 w-37 rounded-3xl bg-white"></div>
        <h1 className="font-medium mt-2 text-2xl">    Cities</h1>
      </div></div></Link>
      <Link to="/categories">
     <div className="keen-slider__slide number-slide2 "><div className="bg-gray-900 hover:bg-blue-500 cursor-pointer place-content-center place-items-center text-white h-full w-full">
        <div className=" h-1 w-37 rounded-3xl bg-white"></div>
        <h1 className="font-medium mt-2 text-2xl">    Countries</h1>
      </div></div>      </Link>
 

    </div>
  )
}
