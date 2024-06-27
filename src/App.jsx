import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from "react-router-dom"
import { useState } from "react"
import HomePage from "./pages/HomePage"
import ProductPage from "./pages/ProductPage"


function App() {      
  const [currentCategory, setCurrentCategory] = useState("Svi proizvodi");
  const [currentPage, setCurrentPage] = useState(1);

  const router = createBrowserRouter(  
    createRoutesFromElements(    
      <>
        <Route index element={<HomePage currentCategory={currentCategory} currentPage={currentPage}
          setCurrentCategory={setCurrentCategory} setCurrentPage={setCurrentPage}/>}/>    
        <Route path="/product/:id" element={<ProductPage setCurrentCategory={setCurrentCategory} setCurrentPage={setCurrentPage}/>}/> 
      </>     
        )
  )

  return <RouterProvider router={router}/>
}
export default App
