import { Link } from "react-router-dom";

const Navbar = () => {
    
    return (
        <nav className="flex justify-between items-center bg-white-primary h-14 px-16 roboto font-medium">
            <div>
                <h1>LOGO</h1>
            </div>
            <ul className="flex text-purple-dark text-sm">
                <li className="mx-4">Home</li>
                <li className="mx-4">About</li>
                <li className="mx-4">Contact</li>
            </ul>
            <div>
            <Link to='/login'>
                <div className="px-3 py-1.5 border border-slate-700 hover:bg-slate-700 hover:text-white transition duration-150 ease-in-out">
                    Login/Signup
                </div>
            </Link>

            </div>
        </nav>
    );
}
 
export default Navbar;