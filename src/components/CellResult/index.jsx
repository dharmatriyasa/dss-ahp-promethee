const CellResult = (props) => {
    return (
        <tr className="py-1">
            <td className="py-2 px-4">{props.index}</td>
            <td>{props.name}</td>
            <td>{props.address}</td>
            <td>{props.skor}</td>
            <td>
            <div className="mx-2">
                <div className={`text-center text-white py-1 ${props.index <= props.priorityCount ? "bg-green-500" : "bg-red-500"}`}>
                    {props.index <= props.priorityCount ? "Prioritas" : "Menunggu"}
                </div>
            </div>
            </td>
        </tr>
    );
}
 
export default CellResult;