import { IoIosArrowRoundForward } from 'react-icons/io';
import { Link } from 'react-router-dom';

const SidebarItem = (props) => {
    return (
        <li className=''>
            <Link 
                className='flex my-4 items-center justify-between' 
                to={props.url}
                onClick={props.onClickFunction}
            >
                <h1 className='roboto text-white mr-4 text-md'>{props.title}</h1>
                <IoIosArrowRoundForward color='white' />
            </Link>
        </li>
    );
}
 
export default SidebarItem;