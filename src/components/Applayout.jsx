import { Outlet } from "react-router-dom"
import { Navbar } from "./Navbar"
import { Footer } from "../Footer"


export const Applayout = () => {
  return (
    <div>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}