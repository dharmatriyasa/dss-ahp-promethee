const MatrixCard = (dataAhpValues) => {
    console.log(dataAhpValues);
    return (
        <div className="grid grid-cols-4 gap-4 mt-8">
            {dataAhpValues.dataAhpValues.map((data, index) => {
                return(
                    <div 
                        key={index}
                        className="flex justify-center items-center border border-purple-500 rounded-lg w-14 h-14"
                    >
                        <h1 className="text-purple-500 text-xl">
                            {data}
                        </h1>
                    </div>
                );
            })}
        </div>
    );
}
 
export default MatrixCard;