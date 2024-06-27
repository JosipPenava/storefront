import { useState } from "react"
import menu from '../assets/images/menu.png';
import {Link} from "react-router-dom"

function Dropdown({categoryList, setCurrentCategory, setCurrentPage}) {  
    const [isOpen,setIsOpen] = useState(false);
    function categoryClick(item){
        setCurrentPage(1);
        setCurrentCategory(item)
        setIsOpen((prev)=>!prev)
    }
    
    return (
        <div>
            <button onClick={()=>setIsOpen((prev)=>!prev)}>
                <div className="basis-3 items-center px-3">
                    <img className='h-5 w-auto mx-1' src={menu} alt='Menu' />
                </div>
            </button>
            {isOpen && (
                <div className="absolute top-[40px] px-3 bg-gray-100">                    
                    {categoryList.map((item,i) => (
                        <div key={i}>
                            <Link to="/">
                            <button className="h-[40px] w-[150px]" onClick={()=>categoryClick(item)}>
                            {item}
                            </button>
                            </Link>
                        </div>
                    ))}
                </div>
            )}
        </div>
        
    )
  }
  export default Dropdown