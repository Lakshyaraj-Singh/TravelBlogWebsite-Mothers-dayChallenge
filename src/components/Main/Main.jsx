import { useEffect, useState } from "react";
import { CategoryCarousel } from "./CategoryCarousel";
import { HeroCarousel } from "./HeroCarousel";
import { HeroRecentRight } from "./HeroRecentRight";
import { HomeCard } from "./HomeCard";
import data from "../../locals.json"

export const Main = () => {
    console.log(data)
    const randomImg=()=>{
        const image=['https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?cs=srgb&dl=pexels-andreimike-1271619.jpg&fm=jpg','https://images.pexels.com/photos/1070492/pexels-photo-1070492.jpeg?cs=srgb&dl=pexels-jan-krnc-268225-1070492.jpg&fm=jpg','https://images.pexels.com/photos/1198359/pexels-photo-1198359.jpeg?cs=srgb&dl=pexels-valentin-perret-479839-1198359.jpg&fm=jpg','https://images.pexels.com/photos/307008/pexels-photo-307008.jpeg?cs=srgb&dl=pexels-riciardus-307008.jpg&fm=jpg']
        return image[Math.floor(Math.random() * image.length)];
    }
    const [heroImg,setHeroImg]=useState(randomImg)
    

        
     
    return (
        <div className="">
            <div style={{ backgroundImage: `url(${heroImg})` }} className="relative w-full h-150 md:h-[500px] bg-no-repeat bg-cover bg-center ">

                <div className="absolute top-35 md:bottom-7 md:left-15">
                    <HeroCarousel />
                </div>



            </div>
            <h1 className="mt-5  mb-5">Explore by categories </h1>
            <div className="explore ">
              <CategoryCarousel/>
            </div>

            <div className="recents m-3 md:m-12 flex flex-col md:flex-row gap-5  ">
                <div className="md:w-[400em] space-y-4">
               {data.slice(0,4).map((blog)=>(

                <HomeCard  title={blog.title} excerpt={blog.excerpt} imageUrl={blog.sections[0].image} category={blog.category} read={blog.readingTime} id={blog.id} />
               ))}
                
                </div>
                <div className="m-auto md:m-0" >
                    <HeroRecentRight/>
                </div>
            </div>
        </div>
    );
};
