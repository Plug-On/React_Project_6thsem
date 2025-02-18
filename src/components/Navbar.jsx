import logo from '../assets/logo.gif';
function Navbar(){
    return(
        <div>
            <nav className="flex justify-between items-center px-15 py-2 bg-gray-100">
            
                <img src={logo} alt="" className="h-20" />
                <ul className="flex justify-center space-x-4">
                    <li><a href="#" className="text-blue-500">Home</a></li>
                    <li><a href="#" className="text-blue-500">About</a></li>
                    <li><a href="#" className="text-blue-500">Services</a></li>
                    <li><a href="#" className="text-blue-500">Contacts</a></li>

                </ul>
            </nav>
        </div>
    )
}

export default Navbar;