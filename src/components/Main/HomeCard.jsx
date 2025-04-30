import { Link } from "react-router-dom"

export const HomeCard = ({imageUrl,read,category,title,excerpt,id}) => {
  return (
    <>
     <div className="flex md:justify-center md:gap-4 items-center h-93  md:h-90 bg-sky-100">
        <div className=" w-2/4 h-full  bg-amber-400"> <img className="object-cover h-full w-full" src={imageUrl} alt="" /></div>
      
       <div className="p-5 space-y-3 w-3/4 h-full">
         <div className="flex justify-between"><span>#{category}</span> <span>{read}</span></div>
       <h1 className="font-bold md:text-2xl">{title}</h1>
       <p>{excerpt}</p>
        <Link  to={`/${id}`}className="btn bg-black text-white py-2 px-20">Read more</Link>
       </div>
     </div>
    </>
  )
}