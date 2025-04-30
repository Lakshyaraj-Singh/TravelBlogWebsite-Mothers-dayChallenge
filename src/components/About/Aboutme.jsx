import { Article } from "../Article"
import { Card } from "../Categories/Card"
import { Socials } from "../Socials"
import { AboutCard } from "./AboutCard"


export const    Aboutme = () => {
  return (
    <div className="bg-cover h-full" style={{backgroundImage:'url(https://cbx-prod.b-cdn.net/COLOURBOX28142406.jpg?width=800&height=800&quality=70)'}}>
    <div className="article-image relative md:h-96 bg-[url('https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?cs=srgb&dl=pexels-andreimike-1271619.jpg&fm=jpg')] w-full h-[500px] bg-no-repeat bg-cover bg-center">
        <div className="bg-white rounded-t-2xl absolute bottom-0 md:w-5/7 md:left-1/7 p-3 text-center space-y-4">
            <h1 className="text-5xl font-bold ">My  Name Is Lakshyaraj Singh</h1>
            <div className="flex justify-between mt-5">
                
                    
                <div className="m-auto"><Socials/> </div>
            </div>
        </div>
    </div>
     <div className="md:w-5/7 bg-white m-auto p-7 ">
        <p  className=" headline mt-5 text-xl text-center text-gray-800 italic">You Can Do It If You Are Willing To!!</p>
        <div className="md:mt-7">
            <p className="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, illo? ipsum dolor sit amet consectetur adipisicing elit. Itaque porro dolorum magni libero, asperiores perferendis quam saepe repudiandae quo sapiente reiciendis omnis animi dignissimos deserunt ad totam eveniet. Accusantium, beatae? ipsum  dolor sit amet consectetur adipisicing elit  Necessitatibus aliquid eum sint minus itaque labore illum beatae dolorem. Delectus, possimus?</p>
            <AboutCard/>
            
        </div>
     </div>
     
    </div>
  )
}