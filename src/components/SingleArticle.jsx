import { useNavigate, useParams } from "react-router-dom"
import { Article } from "./Article"
import { Card } from "./Categories/Card"
import { Socials } from "./Socials"
import data from "../locals.json"
import { useEffect } from "react"
export const SingleArticle = () => {
    let {id}=useParams()
    
    
   let articleData=data.filter((e)=>e.id===Number(id))
   useEffect(() => {
    
    window.scrollTo(0, 0); 
  }, [id]); 
   let {title,excerpt,readingTime,category,submissionDate}=articleData[0]
   const articleBackground=articleData[0].sections[0].image
   
  return (
    <div>
    <div style={{backgroundImage:`url(${articleBackground})`}} className="article-image w-full h-[500px] bg-no-repeat bg-cover bg-center">
        <div className="bg-white rounded-t-2xl absolute bottom-0 md:w-5/7   md:left-1/7 p-3 text-center space-y-4">
            <h1 className="md:text-6xl text-5xl font-bold">{title}</h1>
            <div className="flex justify-between mt-5">
                <div className="flex gap-4 text-sm">
                    <span className="font-semibold" >{category}</span>
                    <span className="text-gray-700">{readingTime}</span>
                    <span className="text-gray-700">{submissionDate}</span>
                </div>
                    
                <div><Socials/> </div>
            </div>
        </div>
    </div>
     <div className="md:w-4/6  m-auto p-2 ">
        <p  className=" headline mt-5 text-xl text-center text-gray-800 italic">{excerpt}</p>
        <div className="mt-4">
            {articleData[0].sections.map((details)=>(
                <Article data={details}/>
            ))}
        </div>
     </div>
     <div className="mt-10">
        <h1 className="font-bold ml-7 text-2xl">Interesting Articles To Read</h1>
        <div className="flex flex-col md:flex-row m-7 gap-7">
            {data.slice(3,6).map((blog)=>(
                <Card data={blog} image={blog.sections[0].image}/>
            ))}
            
        </div>
     </div>
    </div>
  )
}