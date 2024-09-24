import { Link} from 'react-router-dom'
import {Menu, X} from 'lucide-react'
import { useState } from 'react'
 
const Navlink = () => {
  return (
    <>
      <link to='/'>Home</link>
      <link to='/faclities'>Faclities</link>
      <link to='/contact'>Contact</link>
    </>
  )
}

const Nav = () => {
const [isOpen,setIsOpen] = useState(false);

const toggleNavbar = () =>{
  setIsOpen(!isOpen);
}

    return(
        <div className='w-1/3'>
        <div className='flex justify-between'>
            <Navlink/>
            </div>
            <div>
              <button onClick={toggleNavbar}>{isOpen ? <X/>:<Menu/>  }</button>
            </div>
        </div>
    )
}


export default Nav
