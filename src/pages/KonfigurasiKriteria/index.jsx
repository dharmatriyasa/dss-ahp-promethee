import MainLayout from "../../layouts/Main";
import React, { useEffect, useRef, useState } from "react";
import CardConfig from "../../components/CardConfig";
import Authorize from "../../components/Authorize";
import NextButton from "../../components/NextButton";

const KonfigurasiKriteria = () => {

    const [matrixValue12, setMatrixValue12] = useState();
    const [matrixValue13, setMatrixValue13] = useState();
    const [matrixValue14, setMatrixValue14] = useState();
    const [matrixValue23, setMatrixValue23] = useState();
    const [matrixValue24, setMatrixValue24] = useState();
    const [matrixValue34, setMatrixValue34] = useState();

    const arr = [0,1,2,3];
    const indexMatrix = [0, 5, 10, 15];
    
    const criteriaInputRow1 = useRef([]);
    const matrixCriteria = new Array();

    const inputValues1 = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
    const inputValues2 = ['1/2', '1/3', '1/4', '1/5', '1/6', '1/7', '1/8', '1/9'];

    useEffect(() => {
        // criteriaInputRow1.current.map((data, index) => {
        //     console.log(data.value, index);
        // })
    }, [
        matrixValue12, 
        matrixValue13, 
        matrixValue14,
        matrixValue23,
        matrixValue24,
        matrixValue34
    ]);

    const handleSubmitForm = (e) => {
        e.preventDefault();

        
        criteriaInputRow1.current.map((data, index) => {
            // console.log(data.value, index);
            matrixCriteria.push(data.value);
        });

        console.log(matrixCriteria);
    }

    // console.log(criteriaInputRow1);
    

    return (
        <Authorize>
        <MainLayout>
            <div className="flex flex-row px-10 py-8 h-full">
                <div className="flex flex-col mx-4 w-6/12">
                    <div>
                        <h1 className="text-purple-300 text-lg">Matriks Perbandingan Berpasangan</h1>
                        <div className="border-t-2 border-t-purple-300 w-80"></div>
                    </div>
                    <div>
                        <form className="" onSubmit={handleSubmitForm}>
                            <div className="flex flex-row">
                                {indexMatrix.map((data) => {
                                    return(
                                        <input 
                                            ref={el =>criteriaInputRow1.current[data] = el}
                                            value={1}
                                            type="hidden"
                                        />
                                    )
                                })}
                                <div className="flex flex-col">
                                    <div className="flex flex-row my-6">
                                        <div className="mx-2 text-center">
                                            <div>K1 x K2</div>
                                            <select
                                                className="text-xl w-20 p-2 text-center"  
                                                ref={el =>criteriaInputRow1.current[1] = el}
                                                onChange={e => setMatrixValue12(e.target.value)}
                                                
                                            >
                                                {inputValues1.map((data, index) => {
                                                    return(
                                                        <option key={index} value={index+1}>{data}</option>
                                                    )
                                                })}
                                                {inputValues2.map((data, index) => {
                                                    return(
                                                        <option key={index} value={1/(index+2)}>{data}</option>
                                                    )
                                                })}
                                            </select>
                                        </div>
                                        <div className="mx-2 text-center">
                                            <div>K2 x K1</div>
                                            <input
                                                className="text-xl w-20 p-2 text-center"
                                                ref={el =>criteriaInputRow1.current[4] = el} 
                                                type="number" 
                                                value={(1/matrixValue12).toFixed(2)}
                                            />
                                        </div>
                                    </div>
                                    <div className="flex flex-row my-6">
                                        <div className="mx-2 text-center">
                                            <div>K1 x K3</div>
                                            <select
                                                className="text-xl w-20 p-2 text-center"  
                                                ref={el =>criteriaInputRow1.current[2] = el}
                                                onChange={e => setMatrixValue13(e.target.value)}
                                                
                                            >
                                                {inputValues1.map((data, index) => {
                                                    return(
                                                        <option key={index} value={index+1}>{data}</option>
                                                    )
                                                })}
                                                {inputValues2.map((data, index) => {
                                                    return(
                                                        <option key={index} value={1/(index+2)}>{data}</option>
                                                    )
                                                })}
                                            </select>
                                        </div>
                                        <div className="mx-2 text-center">
                                            <div>K3 x K1</div>
                                            <input
                                                className="text-xl w-20 p-2 text-center"
                                                ref={el =>criteriaInputRow1.current[8] = el} 
                                                type="number" 
                                                value={(1/matrixValue13).toFixed(2)}
                                            />
                                        </div>
                                    </div>
                                    <div className="flex flex-row my-6">
                                        <div className="mx-2 text-center">
                                            <div>K1 x K4</div>
                                            <select
                                                className="text-xl w-20 p-2 text-center"  
                                                ref={el =>criteriaInputRow1.current[3] = el}
                                                onChange={e => setMatrixValue14(e.target.value)}
                                                
                                            >
                                                {inputValues1.map((data, index) => {
                                                    return(
                                                        <option key={index} value={index+1}>{data}</option>
                                                    )
                                                })}
                                                {inputValues2.map((data, index) => {
                                                    return(
                                                        <option key={index} value={1/(index+2)}>{data}</option>
                                                    )
                                                })}
                                            </select>
                                        </div>
                                        <div className="mx-2 text-center">
                                            <div>K4 x K1</div>
                                            <input
                                                className="text-xl w-20 p-2 text-center"
                                                ref={el =>criteriaInputRow1.current[12] = el} 
                                                type="number" 
                                                value={(1/matrixValue14).toFixed(2)}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col">
                                    <div className="flex flex-row my-6">
                                        <div className="mx-2 text-center">
                                            <div>K2 x K3</div>
                                            <select
                                                className="text-xl w-20 p-2 text-center"  
                                                ref={el =>criteriaInputRow1.current[6] = el}
                                                onChange={e => setMatrixValue23(e.target.value)}
                                                
                                            >
                                                {inputValues1.map((data, index) => {
                                                    return(
                                                        <option key={index} value={index+1}>{data}</option>
                                                    )
                                                })}
                                                {inputValues2.map((data, index) => {
                                                    return(
                                                        <option key={index} value={1/(index+2)}>{data}</option>
                                                    )
                                                })}
                                            </select>
                                        </div>
                                        <div className="mx-2 text-center">
                                            <div>K3 x K2</div>
                                            <input
                                                className="text-xl w-20 p-2 text-center"
                                                ref={el =>criteriaInputRow1.current[9] = el} 
                                                type="number" 
                                                value={(1/matrixValue23).toFixed(2)}
                                            />
                                        </div>
                                    </div>
                                    <div className="flex flex-row my-6">
                                        <div className="mx-2 text-center">
                                            <div>K2 x K4</div>
                                            <select
                                                className="text-xl w-20 p-2 text-center"  
                                                ref={el =>criteriaInputRow1.current[7] = el}
                                                onChange={e => setMatrixValue24(e.target.value)}
                                                
                                            >
                                                {inputValues1.map((data, index) => {
                                                    return(
                                                        <option key={index} value={index+1}>{data}</option>
                                                    )
                                                })}
                                                {inputValues2.map((data, index) => {
                                                    return(
                                                        <option key={index} value={1/(index+2)}>{data}</option>
                                                    )
                                                })}
                                            </select>
                                        </div>
                                        <div className="mx-2 text-center">
                                            <div>K4 x K2</div>
                                            <input
                                                className="text-xl w-20 p-2 text-center"
                                                ref={el =>criteriaInputRow1.current[13] = el} 
                                                type="number" 
                                                value={(1/matrixValue24).toFixed(2)}
                                            />
                                        </div>
                                    </div>
                                    <div className="flex flex-row my-6">
                                        <div className="mx-2 text-center">
                                            <div>K3 x K4</div>
                                            <select
                                                className="text-xl w-20 p-2 text-center"  
                                                ref={el =>criteriaInputRow1.current[11] = el}
                                                onChange={e => setMatrixValue34(e.target.value)}
                                                
                                            >
                                                {inputValues1.map((data, index) => {
                                                    return(
                                                        <option key={index} value={index+1}>{data}</option>
                                                    )
                                                })}
                                                {inputValues2.map((data, index) => {
                                                    return(
                                                        <option key={index} value={1/(index+2)}>{data}</option>
                                                    )
                                                })}
                                            </select>
                                        </div>
                                        <div className="mx-2 text-center">
                                            <div>K4 x K3</div>
                                            <input
                                                className="text-xl w-20 p-2 text-center"
                                                ref={el =>criteriaInputRow1.current[14] = el} 
                                                type="number" 
                                                value={(1/matrixValue34).toFixed(2)}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div> 
                                <button type="submit" className="bg-purple-500 px-4 py-2">Kalkulasi</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="flex flex-col mx-4 w-6/12">
                    <div>
                        <h1 className="text-purple-300 text-lg">Konfigurasi Kriteria Promethee</h1>
                        <div className="border-t-2 border-t-purple-300 w-80"></div>
                    </div>
                    <div className="flex flex-row">
                        <div>
                            <CardConfig 
                                title='Kriteria 1 (K1)'
                            />
                            <CardConfig 
                                title='Kriteria 1 (K1)'
                            />
                        </div>
                        <div>
                            <CardConfig 
                                title='Kriteria 1 (K1)'
                            />
                            <CardConfig 
                                title='Kriteria 1 (K1)'
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-end mr-44 mb-8">
                <NextButton 
                    title={`Next`}
                    url={`/perhitungan-kriteria-ahp`}
                />
            </div>
        </MainLayout>
        </Authorize>
    );
}
 
export default KonfigurasiKriteria;