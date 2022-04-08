import MainLayout from "../../layouts/Main";
import React, { useEffect, useRef, useState } from "react";
import CardConfig from "../../components/CardConfig";
import Authorize from "../../components/Authorize";
import NextButton from "../../components/NextButton";
import { createMatrix2D, columnSum, normMatrix, criteriaWeight, matrixXWeight, lambdaMax, consistencyIndex, consistencyRatio, convertToArray, ratioIndex, crValue } from "../../services/ahp";
import { addConsistencyAhp, addMatrixAhp, addMatrixNorm, addPrometheeCriteria, addWeightAhp } from "../../services/firestore";
import CriteriaContext from "../../context/CriteriaContext";

const KonfigurasiKriteria = () => {

    const [criteriaPromethee, setCriteriaPromethee] = useState([]);
    const value = {criteriaPromethee, setCriteriaPromethee};

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

    // useEffect(() => {
    //     // criteriaInputRow1.current.map((data, index) => {
    //     //     console.log(data.value, index);
    //     // })
    // }, [
    //     matrixValue12, 
    //     matrixValue13, 
    //     matrixValue14,
    //     matrixValue23,
    //     matrixValue24,
    //     matrixValue34
    // ]);

    async function addMatrixFbase(matrix){
        const temp = await addMatrixAhp(matrix)
        console.log(temp)
    }

    const handleSubmitForm = (e) => {
        e.preventDefault();

        
        criteriaInputRow1.current.map((data, index) => {
            // console.log(data.value, index);
            matrixCriteria.push(data.value);
        });

        //AHP method

        addMatrixAhp(matrixCriteria)
            .then(res => console.log(res.id))
            .catch(err => console.log(err));
        const temp = createMatrix2D(matrixCriteria);
        console.log(matrixCriteria);

        const temp2 = columnSum(temp);
        console.log(temp2);
        
        const temp3 = normMatrix(temp, temp2);
        console.log(temp3);
        const tempb = convertToArray(temp3);
        console.log(tempb);
        const b = addMatrixNorm(tempb);
        // console.log(b);

        const temp4 = criteriaWeight(temp3);
        console.log(temp4);
        addWeightAhp(temp4);

        const temp5 = matrixXWeight(temp, temp4);
        console.log(temp5);

        const temp6 = lambdaMax(temp5, temp4);
        console.log(temp6);

        const ri = ratioIndex(temp4.length);
        console.log(ri);
        const ci = consistencyIndex(temp6, temp4.length);
        console.log(ci);
        const crVal = crValue(ci, ri);
        console.log(crVal); 
        const cr = consistencyRatio(ci, temp4.length);
        console.log(cr);

        const consistency = {
            ri,
            ci,
            crVal,
            cr
        };

        addConsistencyAhp(consistency);

    }

    const onClickButton = () => {
        addPrometheeCriteria(criteriaPromethee);
        console.log(criteriaPromethee);
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
                        <CriteriaContext.Provider value={value}>
                        <div>
                            <CardConfig 
                                title='Kriteria 1 (K1)'
                                kriteriaNumber={1}
                            />
                            <CardConfig 
                                title='Kriteria 2 (K2)'
                                kriteriaNumber={2}
                            />
                        </div>
                        <div>
                            <CardConfig 
                                title='Kriteria 3 (K3)'
                                kriteriaNumber={3}
                            />
                            <CardConfig 
                                title='Kriteria 4 (K4)'
                                kriteriaNumber={4}
                            />
                        </div>
                        </CriteriaContext.Provider>
                    </div>
                        <div> 
                            <button 
                                type="submit" 
                                className="bg-purple-500 px-4 py-2"
                                onClick={onClickButton}
                            >
                                Submit All
                            </button>
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