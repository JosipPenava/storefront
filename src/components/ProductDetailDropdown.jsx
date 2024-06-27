import { Select } from '@headlessui/react'

function ProductDetailDropdown({name, elements}) { 
      return (
        <div className="m-2">
        {name}: 
        <Select name={name}>
        { elements.map((element, i) => (
                <option key={i} value="active">{element}</option>              
            )) }                
        </Select>
        </div>        
      )
    }
export default ProductDetailDropdown