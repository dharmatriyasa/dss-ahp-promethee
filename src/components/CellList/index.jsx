import { useEffect, useState } from "react";
import { updateActionAlternative } from "../../services/firestore";
import { RiDeleteBin6Line } from "react-icons/ri";

 
const CellList = (props) => {
    const [isTrue, setisTrue] = useState(true);

    // const initialDataCheckbox = {
    //     id: props.id,
    //     statusAlternative: props.statusAlternative,
    // }
    // const [dataCheckbox, setDataCheckbox] =  useState(initialDataCheckbox);

    const handleClick = (e) => {
        e.preventDefault();

        updateActionAlternative(props.uid, false)
            .then(() => console.log('Success'))
            .catch(err => console.log(err));
    }

    // const handleChange = async (e) => {
    //     e.preventDefault();

        
    //     updateActionAlternative(props.uid, false)
    //         .then(() => console.log('Success'))
    //         .catch(err => console.log(err));
    // }

    // useEffect(() => {
    //     // setTimeout(() => {
    //         console.log(dataCheckbox);
    //         updateActionAlternative(dataCheckbox);
    //     // }, 5000)
    // }, [dataCheckbox])


    return (
        <tr className="py-1">
            <td className="py-2 px-4">{props.index}</td>
            <td>{props.name}</td>
            <td>{props.K1}</td>
            <td>{props.K2}</td>
            <td>{props.K3}</td>
            <td>{props.K4}</td>
            <td>{props.statusAlternative? "Terpilih": "Belum Terpilih"}</td>
            <td className="">
                <form>
                    <button 
                        name="statusAlternative"
                        type="submit"
                        // onChange={handleChange}
                        onClick={handleClick}
                        className="text-red-700 bg-red-300 p-1 rounded-md"
                        
                    >
                        <RiDeleteBin6Line 

                        />
                    </button>
                    {/* <input 
                        name="statusAlternative" 
                        type="button" 
                        onChange={handleChange}
                        value={``}
                    /> */}
                </form>
            </td>
        </tr>
    );
}
 
export default CellList;