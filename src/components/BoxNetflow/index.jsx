const BoxNetflow = (props) => {
    return (
        <div className="flex flex-col border border-purple-500 ">
            <div className="flex justify-between bg-purple-500 px-6 py-2">
                <p>{props.alternative}</p>
                <p>Rank {props.rank}</p>
            </div>
            <div className="flex flex-row justify-between px-6 py-4">
                <div>
                    <p>Leaving: {props.leaving}</p>
                </div>
                <div>
                    <p>Entering: {props.entering}</p>
                </div>
                <div>
                    <p>Netflow: {props.net}</p>
                </div>
            </div>
        </div>
    );
}
 
export default BoxNetflow;