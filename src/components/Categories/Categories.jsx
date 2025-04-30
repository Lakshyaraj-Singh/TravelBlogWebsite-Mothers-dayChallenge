import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { CategoryMainCarousel } from './CategoryMainCarousel';
import data from "../../locals.json"
export const Categories = () => {
  const travel = data.filter((e) => e.category === "travel");
  const guides = data.filter((e) => e.category === "guides");
  const cities = data.filter((e) => e.category === "cities");
  return (
    <div className="md:m-10 m-3">
        <h1 className="text-3xl font-bold">Categories</h1>
        
        <div className='flex  flex-col gap-7'>
     
            
            
            <div id='cities' className="flex mt-7  justify-between "><span className="text-xl font-semibold">Cities</span> <div ><ArrowBackIosNewIcon className="bg-black text-white"/> <ArrowForwardIosIcon className="bg-black text-white"/></div></div> 
        <CategoryMainCarousel data={cities}/>
        <div id='travel' className="flex mt-7 justify-between "><span className="text-xl font-semibold">Travels</span> <div ><ArrowBackIosNewIcon className="bg-black text-white"/> <ArrowForwardIosIcon className="bg-black text-white"/></div></div>
        <CategoryMainCarousel data={travel}/>
        <div id='guide' className="flex mt-7 justify-between "><span className="text-xl font-semibold">  Guides</span> <div ><ArrowBackIosNewIcon className="bg-black text-white"/> <ArrowForwardIosIcon className="bg-black text-white"/></div></div>
        <CategoryMainCarousel data={guides}/>
            </div>
    </div>
  )
}