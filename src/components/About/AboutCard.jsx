import { useEffect } from "react";

export const AboutCard = () => {
   useEffect(() => {
       
       window.scrollTo(0, 0); 
     }, []); 
   return (
     <div className="mt-7">
         <div className="bg-red-400 h-96 w-full"><img  className="object-cover h-full w-full" src="https://images.pexels.com/photos/307008/pexels-photo-307008.jpeg?cs=srgb&dl=pexels-riciardus-307008.jpg&fm=jpg" alt="" /></div>
         <div  className="space-y-3">
             <h1 className="font-bold text-xl mt-5">The Highway</h1>
             <p className="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid aut nisi, eum tenetur iste inventore.</p>
             <p className="text-justify">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos tempora omnis fuga quibusdam rem incidunt reprehenderit tempore modi culpa, amet in ratione, similique quod esse veritatis assumenda molestiae ea consequuntur inventore sequi. Delectus, ipsam. Laudantium ducimus et unde doloremque modi.</p>
            
             </div>
     </div>
   )
 }