import {Link} from "react-router-dom"

function GridProduct({product}) {  
    return (
        <Link className="bg-gray-200 h-56 grid grid-cols-2" to={`/product/${product.id}`}>            
            <div className="col-span-2 h-44">
                <img className='h-32 w-auto m-auto my-7' src={'/src/assets/images/'+product.picture} alt='Product' />
            </div>
            <div className="px-4 text-left">{product.name}</div>
            <div className="px-4 text-right">{product.price}</div>          
        </Link>
    )
  }
  export default GridProduct




