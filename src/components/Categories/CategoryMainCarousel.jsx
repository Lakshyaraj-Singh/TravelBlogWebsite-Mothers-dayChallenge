import React from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import "../../styles1.css"
import { Card } from "./Card"

export const CategoryMainCarousel = ({data}) => {
    
  const [sliderRef] = useKeenSlider({
    breakpoints: {
      "(min-width: 600px)": {
        slides: { perView: 2, spacing: 5 },
      },
      "(min-width: 1000px)": {
        slides: { perView: 4, spacing: 3 },
      },
    },
    slides: { perView: 1 },
  })

  return (
    <div ref={sliderRef} className="keen-slider h-110   ">
       {data.map((blog)=>(

         <div className="keen-slider__slide number-slide1"><Card data={blog} image={blog.sections[0].image} /></div>
       ))}
      
         
    </div>
  )
}


