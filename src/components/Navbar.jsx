import logo from '../assets/images/logo.png';
import Dropdown from './Dropdown';
import products from '../products.json'
import {Link} from "react-router-dom"

function Navbar({setCurrentCategory, setCurrentPage}) {  

  const categoryList = products.map((product) => (product.category))
    .filter((value, index, categoryList) => categoryList.indexOf(value) === index);
  categoryList.unshift("Svi proizvodi")
  
    return (
      <nav className="bg-gray-100">
        <div className="flex items-center h-10">
            <Dropdown categoryList={categoryList} setCurrentCategory={setCurrentCategory} setCurrentPage={setCurrentPage}/>
            <div className="grow">
                <Link className="flex w-24 m-auto" to="/">
                  <img className='h-5 w-auto mx-1' src={logo} alt='Logo' />
                  medusa
                </Link>
                
            </div>
            
        </div>
      </nav>
    )
  }
  export default Navbar