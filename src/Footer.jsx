import { Link } from "react-router-dom"

export const Footer = () => {
  return (
    <div className="footer">
        <div><img className="bg-repeat-x" src="" alt="" /></div>
        <div className="flex flex-col md:flex-row bg-black text-white  w-full p-4 justify-between items-center">
            <div className="space-y-1.5"> <h1 className="font-bold text-center md:text-left text-2xl">Personal Travel</h1>
            <p>Contatins 2024 All Rights Reserved</p></div>
            <div className="flex  gap-2 m-auto md:mr-10">
                <Link to="/"> Home</Link>
                <Link to="/about"> About me</Link>
                <Link to="/categories"> Categories</Link>
                <Link to="/contact"> Contact</Link>
            </div>
        </div>
    </div>
  )
}