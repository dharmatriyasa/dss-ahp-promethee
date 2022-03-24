const BoxPreferensi = (props) => {
    return (
        <div className="flex flex-col border border-purple-500 ">
            <div className="flex justify-between bg-purple-500 px-6 py-2">
                <p>({props.alternative1}, {props.alternative2})</p>
                <p>Pref Muiltikriteria: {props.preferensiValue}</p>
            </div>
            <div className="flex flex-row justify-between px-6 py-4">
                <div className="flex flex-row justify-between items">
                    <div className="flex flex-col mx-6">
                        <div className="my-1">K1: {props.K1}</div>
                        <div className="my-1">K2: {props.K2}</div>
                    </div>
                    <div className="flex flex-col mx-6">
                        <div className="my-1">K3: {props.K3}</div>
                        <div className="my-1">K4: {props.K4}</div>
                    </div>
                </div>
                <div className="flex flex-row justify-between items">
                <div className="flex flex-col mx-6">
                    <div className="my-1">K1 Hd: {props.K1Hd}</div>
                    <div className="my-1">K2 Hd: {props.K2Hd}</div>
                </div>
                <div className="flex flex-col mx-6">
                    <div className="my-1">K3 Hd: {props.K3Hd}</div>
                    <div className="my-1">K4 Hd: {props.K4Hd}</div>
                </div>
                </div>
            </div>
        </div>
    );
}
 
export default BoxPreferensi;