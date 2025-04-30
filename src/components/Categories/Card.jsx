import { Link, useNavigate } from "react-router-dom"

export const Card = ({data,image}) => {
  let {title,excerpt,category,readingTime,id }=data
  const navigate=useNavigate()
  // https://images.pexels.com/photos/307008/pexels-photo-307008.jpeg?cs=srgb&dl=pexels-riciardus-307008.jpg&fm=jpg
  return (
    <div className="bg-gray-700 text-white pb-2 md:h-110 h-110  md:w-96   ">
        <div className=" h-1/3"><img className="object-cover object-center h-full w-full" src={image} alt="" /></div>

        <div className="space-y-3 p-3 ">
           
            <div className="flex  justify-between text-sm"><span>#{category}</span> <span>{readingTime}</span></div>
            <h1 className="font-semibold text-xl text-yellow-200">{title}</h1>
            <p className="text-sm text-gray-200"> {excerpt}</p>
            <Link  className="btn self-end hover:bg-white hover:text-black py-2  px-10 bg-black text-white" onClick={()=>{navigate(`/${id}`)}}>Read more</Link>
        </div>
    </div>
  )
}