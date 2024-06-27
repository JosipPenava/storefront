import Navbar from "../components/Navbar"
import ProductDetail from "../components/ProductDetail";

function ProductPage({setCurrentCategory, setCurrentPage}) {   
  
    return (
    <>
        <Navbar setCurrentCategory={setCurrentCategory} setCurrentPage={setCurrentPage}/>
        <ProductDetail />
    </>
    )
  }
  export default ProductPage