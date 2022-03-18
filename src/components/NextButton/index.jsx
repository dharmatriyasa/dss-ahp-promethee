import { useNavigate } from "react-router-dom";
import { MdNavigateNext } from "react-icons/md";

const NextButton = (props) => {
    const navigate = useNavigate();

    return (
        <button 
            className="flex flex-row bg-purple-300 justify-center items-center px-4 py-2"
            onClick={() => navigate(`${props.url}`)}
        >
            <h1 className="text-white">{props.title}</h1>
            <MdNavigateNext 
                color="white"
                size={`1em`}
            />
        </button>
    );
}
 
export default NextButton;