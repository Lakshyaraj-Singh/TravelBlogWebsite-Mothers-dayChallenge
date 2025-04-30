import { Socials } from "../Socials"
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useNavigate } from "react-router-dom";

export const HeroRecentRight = () => {
    const navigate=useNavigate()
    return (
        <>
            <div onClick={()=>{navigate("/about")}} className="box cursor-pointer border-2 w-63 h-84 md:m-0 mt-5  flex-col space-y-2 items-center p-3 ">
                <img className="rounded-full -mt-10 w-20 m-auto" src="https://static.vecteezy.com/system/resources/previews/046/409/821/non_2x/avatar-profile-icon-in-flat-style-male-user-profile-illustration-on-isolated-background-man-profile-sign-business-concept-vector.jpg" alt="" />
                <h1 className="font-bold text-center">Lakshyaraj Singh </h1>

                <p className="text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi nulla sunt sint a. Minima sunt rerum deserunt eos pariatur, dolorem iusto aliquam. Aliquam dolorem eum numquam veritatis accusantium, libero earum quia cupiditate a deleniti eos quod consequuntur quis perferendis at!</p>
           <div className="text-center mt-3  ">
            <h1 className="font-semibold">Follow Me</h1><span ><Socials/></span></div>
            </div>
            <div className="mt-3 space-y-2 ">
                <h1 className="font-semibold mb-2 text-xl">Destinations</h1>
                <div className="bg-black hover:bg-amber-500  cursor-pointer place-content-center place-items-center text-white h-30 w-63">
                    <div className=" h-1 w-30 rounded-3xl bg-white"></div>
                    <h1 className="font-medium mt-2 text-xl">    San Franscisco</h1>
                </div>
                <div className="bg-black cursor-pointer hover:bg-amber-500 place-content-center place-items-center text-white h-30 w-63">
                    <div className=" h-1 w-30 rounded-3xl bg-white"></div>
                    <h1 className="font-medium mt-2 text-xl">    San Franscisco</h1>
                </div>
                <div className="bg-black  cursor-pointer hover:bg-amber-500  place-content-center place-items-center text-white h-30 w-63">
                    <div className=" h-1 w-30 rounded-3xl bg-white"></div>
                    <h1 className="font-medium mt-2 text-xl">    Rome</h1>
                </div>
                <button className=" hover:bg-sky-500 hover:text-black duration-100 cursor-pointer bg-black py-2 w-63 text-white"> Read More</button>
            </div >
                 <div className="mt-4 border-2 w-63  place-content-center place-items-center p-3">
                  <h1 className="text-xl font-semibold text-center">News Letter</h1>
                  <p className=" mb-2 text-center text-sm text-gray-700">Subscrive to receive exclusive content updates,travel, &photo tips!</p>
                  <Box
      component="form"
      sx={{ '& .MuiTextField-root': { m: 1, width: '23ch' } }}
      noValidate
      autoComplete="off">
    
      <div>
        <TextField
          label="Email"
          id="outlined-size-small"
          defaultValue="example@gmail.com"
          size="small"
        />

      
      </div>
      </Box>
      <button className=" mt-4  hover:bg-sky-500 hover:text-black duration-100 cursor-pointer bg-sky-600 py-2 w-58 text-white"> Subscribe</button>
                 </div>
        </>
    )
}