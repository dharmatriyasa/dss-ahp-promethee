import { IoIosArrowRoundForward } from 'react-icons/io';

const SidebarItem = (props) => {
    return (
        <div className='flex my-4 items-center justify-between'>
            <h1 className='roboto text-white mr-4 text-md'>{props.title}</h1>
            <IoIosArrowRoundForward color='white' />
        </div>
    );
}
 
export default SidebarItem;