import { Link } from "react-router-dom"


export const CardH = ({data}) => {
  let {title ,excerpt,category,id}=data
  return (
    <div>
         <div className="bg-gray-700 text-white pb-2 px-3 w-full pt-13 h-110 md:h-100 ">
        

        <div className="space-y-2 p-5 ">
           <p className="text-xl">{category}</p>

            <h1 className="font-semibold text-2xl ">{title}</h1>
            <p className="text-sm text-gray-200"> {excerpt}</p>
            <Link className="btn py-2 -mt-18 px-10 bg-black text-white" to={`/${id}`}>Read more</Link>
        </div>
    </div>
    </div>
  )
}