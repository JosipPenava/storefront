import ProductDetailDropdown from "./ProductDetailDropdown";
import { useParams } from "react-router-dom";
import products from '../products.json'

function ProductDetail() {  
    const { id } = useParams()
    const product = products.find(x => x.id === id)
    return (
        <div className="flex w-full">          
           <div className="bg-gray-200 basis-1/2">
            <img className='w-[40%] m-auto my-52' src={'/src/assets/images/'+product.picture} alt='Product' />
            </div>
            <div className="basis-1/2 p-10">
                <h1 className="m-2 text-4xl">{product.name}</h1>
                <p className="m-2 text-2xl">{product.price}</p>
                <p className="m-2">{product.description}</p>
                <ProductDetailDropdown name={"veličina"} elements={product.sizes}/>
                <ProductDetailDropdown name={"boja"} elements={product.colors}/>                
                <button className="m-2 bg-gray-300 px-20 py-5">Dodaj u košaricu</button>                
            </div>            
        </div>
    )
  }
  export default ProductDetail
