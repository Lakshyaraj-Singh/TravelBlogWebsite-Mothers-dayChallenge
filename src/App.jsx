import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Applayout } from "./components/Applayout"
import { Main } from "./components/Main/Main"
import { Categories } from "./components/Categories/Categories"
import { Contact } from "./components/Contact/Contact"
import { SingleArticle } from "./components/SingleArticle"
import { Aboutme } from "./components/About/Aboutme"


function App() {
 const Router= createBrowserRouter([
  {
    element:<Applayout/>,
    path:"/",
    children:[
      {
        element:<Main/>,
        path:"/"
      },
      {
        element:<SingleArticle/>,
        path:"/:id"
      },
      {
        element:<Aboutme/>,
        path:"/about"
      },
      {
        element:<Contact/>,
        path:"/contact"
      },
      {
        element:<Categories/>,
        path:"/categories"
      },

    ]
  }
 ])
 return <RouterProvider router={Router}/>
}

export default App
