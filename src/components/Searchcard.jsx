import { useNavigate } from "react-router-dom"

export const Searchcard = ({data ,setQuery}) => {
    let {title,excerpt,id}=data
    const navigate=useNavigate()
  return (

    <div className="ml-5">

        <div onClick={()=>{navigate(`/${id}` );
    setQuery("")}} className="card cursor-pointer bg-base-100 w-full h-30shadow-sm">
  <div className=" items-center p-3 flex justify-between">
    <div>

    <h2 className="card-title">{title}</h2>
    <p className="text-xs">{excerpt}</p>
    </div>

      <button className="btn bg-sky-400 ">Read</button>
    
  </div>
</div>
    </div>
  )
}