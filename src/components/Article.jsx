export const Article = ({data}) => {
   let {subtitle,paragraph,image}=data
  return (
    <div className="mt-7">
        <div className="bg-red-400 h-96 w-full"><img  className="object-cover h-full w-full" src={image} alt="" /></div>
        <div  className="space-y-3">
            <h1 className="font-bold text-xl mt-5">{subtitle}</h1>
            <p className="text-justify">{paragraph}</p>
            <p className="text-justify">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos tempora omnis fuga quibusdam rem incidunt reprehenderit tempore modi culpa, amet in ratione, similique quod esse veritatis assumenda molestiae ea consequuntur inventore sequi. Delectus, ipsam. Laudantium ducimus et unde doloremque modi.</p>
           
            </div>
    </div>
  )
}