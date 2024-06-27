import Pagination from './Pagination';
import GridProduct from "./GridProduct";

function Grid({products, currentPage, setCurrentPage}) {   
    const productsPerPage=8;
    const lastProductIndex = currentPage * productsPerPage;
    const firstProductIndex = lastProductIndex -productsPerPage;
    const currentProducts = products.slice(firstProductIndex,lastProductIndex);    

    return (
        <>
        <div className="grid grid-cols-4 gap-3 mx-2 p-10 h-[550px]">
            { currentProducts.map((product) => (
                <GridProduct key={product.id} product={product} />                
            )) }           
        </div>
        <Pagination totalProducts={products.length} productsPerPage={productsPerPage}
         setCurrentPage={setCurrentPage} currentPage={currentPage}/>
        </>      
    )
  }
  export default Grid