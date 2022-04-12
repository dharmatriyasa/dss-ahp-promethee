import { useEffect, useState } from "react";
import { updateActionAlternative } from "../../services/firestore";
// import { updateActionAlternative } from "../../services/alternative";
 
const CellInput = (props) => {
    const [isTrue, setIsTrue] = useState(false);

    // console.log(isTrue);

    // const initialDataCheckbox = {
    //     id: props.id,
    //     statusAlternative: props.statusAlternative,
    // }
    // const [dataCheckbox, setDataCheckbox] =  useState(initialDataCheckbox);

    const handleChange = async (e) => {
        // setDataCheckbox({
        //     ...dataCheckbox,
        //     [e.target.name]: !isTrue
        // });
        // console.log(isTrue);
        updateActionAlternative(props.uid, true)
            .then(() => console.log('Success'))
            .catch(err => console.log(err));

        // setisTrue(!isTrue);
        // console.log(dataCheckbox);
    }

    // useEffect(() => {
    //     // setTimeout(() => {
    //         // console.log(dataCheckbox);
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
            <td>
                <form>
                    <input 
                        name="statusAlternative" 
                        type="checkbox" 
                        onChange={handleChange}
                        // onClick={() => setIsTrue(!isTrue)}
                    />
                </form>
            </td>
        </tr>
    );
}
 
export default CellInput;