import {RiAccountCircleLine} from 'react-icons/ri';


const NavbarHome = (props) => {
    return (
        <nav className="flex flex-grow justify-between items-center px-10 h-16 bg-purple-400">
            <div>
                <h1 className='text-white'>{props.title}</h1>
            </div>
            <div>
                <RiAccountCircleLine 
                    size={`1.75em`}
                    color="white"
                />
            </div>
        </nav>
    );
}
 
export default NavbarHome;