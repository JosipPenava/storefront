import Navbar from "../components/Navbar"
import Grid from "../components/Grid"
import products from '../products.json'


function HomePage({currentCategory, currentPage, setCurrentCategory, setCurrentPage}) {   
  const categoryProducts = currentCategory == "Svi proizvodi" ? products : products.filter((item)=>(item.category == currentCategory));
    return (
    <>
        <Navbar setCurrentCategory={setCurrentCategory} setCurrentPage={setCurrentPage}/>
        <Grid products={categoryProducts} setCurrentPage={setCurrentPage} currentPage={currentPage}/>
    </>
    )
  }
  export default HomePage