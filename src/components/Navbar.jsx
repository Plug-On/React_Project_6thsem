import { useEffect, useState } from 'react';
import logo from '../assets/logo.png';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

function Navbar(){

    const [categories , setCategories] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/categories/')
          .then((response) => {
            setCategories(response.data.data);
          })
      }, []);

    return(
        <div className='sticky top-0 z-50'>
            <nav className="flex justify-between items-center px-10 py-1 bg-gray-100 shadow-lg">
            
                <img src={logo} alt="" className="h-10" />
                <ul className="flex justify-center space-x-4">
                    <li>
                        <NavLink to='/' className={({isActive}) => isActive ? "text-blue-500 font-bold overline" : "text-blue-500"}>Home</NavLink>
                    </li>
                    
                   
                    {categories.map((category) => (
                         <li key={category.id} >
                            <NavLink to= {`/categoryproducts/${category.id}`} className={({isActive}) => isActive ? "text-blue-500 font-bold overline" : "text-blue-500"}> {category.name}</NavLink>
                         </li>
                     ))}

                    <li>
                        <NavLink to="/login" className={({isActive}) => isActive ? "text-blue-500 font-bold overline" : "text-blue-500"}>Login</NavLink>
                    </li>

                </ul>
            </nav>
        </div>
    )
}

export default Navbar;