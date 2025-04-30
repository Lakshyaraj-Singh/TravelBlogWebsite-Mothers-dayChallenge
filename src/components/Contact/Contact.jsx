import TextField from '@mui/material/TextField';

export const Contact = () => {
  return (
    <div className=" m-3  md:m-10">
        <h1 className="text-3xl font-bold mb-4">Contact</h1>
        <div className="flex flex-col  md:flex-row p-4 ml-3    md:bg-gray-400 pb-2 ">
           <div className="md:w-1/2 flex flex-col"><div className='w-full   bg-amber-400  '><img className='h-full w-full  object-cover' src="https://images.pexels.com/photos/1070492/pexels-photo-1070492.jpeg?cs=srgb&dl=pexels-jan-krnc-268225-1070492.jpg&fm=jpg" alt="" /></div> <p className='text-sm mt-5 md:m-0 '>Lorem, ipsum dolor Lorem, ipsum dolor. sit amet consectetur adipisicing elit. Aliquam,Lorem ipsudolorem distinctio optio molestias. magnam.</p></div>
           <div className="md:w-1/2 place-content-center ">
            <form action="" className="flex flex-col  gap-4 p-3">
              <div className='flex gap-2'>

            <TextField id="standard-basic" className='w-1/2' label="Your Name" variant="standard" />
            <TextField id="standard-basic" className='w-1/2' label="Your Email" variant="standard" />
              </div>
              <TextField id="standard-basic" label="Subject" variant="standard" />
              <TextField
          id="standard-multiline-static"
          label="Your Message"
          multiline
          rows={4}
          
          variant="standard"
        />
        <button className='bg-black hover:bg-yellow-500 btn m-auto md:mx-0 mt-8 text-white py-2 px-10 w-50'>Send</button>
            </form>
           </div>
        </div>
    </div>
  )
}