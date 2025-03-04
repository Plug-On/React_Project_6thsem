import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
function Navbar(){
    return(
        <div>
            <nav className="flex justify-between items-center px-15 py-2 bg-gray-100">
            
                <img src={logo} alt="" className="h-20" />
                <ul className="flex justify-center space-x-4">
                    <li>
                        <Link to='/' className="text-blue-500">Home</Link>
                    </li>
                    <li>                        
                        <Link to='/about' className="text-blue-500">About</Link>
                    </li>
                    <li><a href="#" className="text-blue-500">Services</a></li>
                    <li><a href="#" className="text-blue-500">Contacts</a></li>

                </ul>
            </nav>
        </div>
    )
}

export default Navbar;