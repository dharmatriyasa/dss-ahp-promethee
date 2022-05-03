import MainLayout from "../../layouts/Main";
import MatrixCard from "../../components/MatrixCard";
import { ahpvalue } from "../../data/ahpvalue";
import NextButton from "../../components/NextButton";
import Authorize from "../../components/Authorize";
import { 
    getAhpMatrix, 
    getAhpNorm,
    getConsistencyAhp, 
    getWeightAhp,
    getPrometheeCriteria
} from "../../services/firestore";
import { useState, useEffect } from "react";


const PerhitunganAHP = () => {

    const [ahpMatrix, setAhpMatrix] = useState([]);
    const [ahpNorm, setAhpNorm] = useState([]);
    const [ahpWeight, setAhpWeight] = useState([]);
    const [ahpConsistency, setAhpConsistency] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getAhpMatrix()
            .then((res) => {
                res.forEach((data) => {
                    setAhpMatrix(data.data().matrix);
                })
            })
            .catch(err => console.log(err));
        
        getAhpNorm()
            .then((res) => {
                res.forEach((data) => {
                    setAhpNorm(data.data().matrix);
                });
            })
            .catch(err => console.log(err));

        getWeightAhp()
            .then((res) => {
                res.forEach((data) => {
                    setAhpWeight(data.data().weight);
                });
            })
            .catch(err => console.log(err));
        
        getConsistencyAhp()
            .then((res) => {
                res.forEach((data) => {
                    setAhpConsistency(data.data().consistency);
                });
                setIsLoading(false);
            })
            .catch(err => console.log(err));
        getPrometheeCriteria()
            .then((res) => {
                res.forEach((data) => {
                    console.log(data.data().prometheCriteria);
                });
            })
            .catch(err => console.log(err));
    }, []);



    const bobotKriteria = [1,2,3,4];
    const konsistensi = [
        {
            field: 'RI',
            value: 3
        },
        {
            field: 'CI',
            value: 4
        },
        {
            field: 'CR',
            value: 2
        },
        {
            field: 'Konsisten',
            value: 'Konsisten'
        },
    ];

    return (
        <Authorize>
        <MainLayout>
            {!isLoading ? (
            <>
            <div className="flex flex-col px-10 py-8 h-full">
                <div className="flex flex-row mx-4 w-6/12">
                    <div className="mx-20">
                        <div>
                        <h1 className="text-purple-300 text-lg">Matriks Perbandingan Berpasangan</h1>
                            <div className="border-t-2 border-t-purple-300 w-80"></div>
                        </div>
                        <div>
                            <MatrixCard
                                dataAhpValues={ahpMatrix}
                            />
                        </div>
                    </div>
                    <div className="mx-20">
                        <div>
                        <h1 className="text-purple-300 text-lg">Normalisasi</h1>
                            <div className="border-t-2 border-t-purple-300 w-80"></div>
                        </div>
                        <div>
                            <MatrixCard
                                dataAhpValues={ahpNorm}
                            />
                        </div>
                    </div>
                </div>
                <div className="flex flex-row mx-4 w-4/12 mt-6">
                    <div className="mx-20">
                        <div>
                        <h1 className="text-purple-300 text-lg">Bobot Kriteria</h1>
                            <div className="border-t-2 border-t-purple-300 w-80"></div>
                        </div>
                        <div className="flex flex-col">
                            {ahpWeight.map((data, index) => {
                                return(
                                <div key={index} className="flex flex-row items-center h-10">
                                    <h1 className="w-8 text-purple-500">K{index+1}</h1>
                                    <div className="ml-20 bg-purple-500 w-32">
                                        <h1 className="text-white text-center">{data}</h1>
                                    </div>
                                </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className="mx-20">
                        <div>
                        <h1 className="text-purple-300 text-lg">Konsistensi</h1>
                            <div className="border-t-2 border-t-purple-300 w-80"></div>
                        </div>
                        <div className="flex flex-col">
                            {/* {ahpConsistency.map((data, index) => {
                                return(
                                <div key={index} className="flex flex-row items-center h-10">
                                    <h1 className="w-8 text-purple-500">{data}</h1>
                                    <div className="ml-20 bg-purple-500 w-32">
                                        <h1 className="text-white text-center">{data}</h1>
                                    </div>
                                </div>
                                )
                            })} */}
                            <div className="flex flex-row items-center h-10">
                                <h1 className="w-8 text-purple-500">RI</h1>
                                <div className="ml-20 bg-purple-500 w-32">
                                    <h1 className="text-white text-center">{ahpConsistency['ri']}</h1>
                                </div>
                            </div>
                            <div className="flex flex-row items-center h-10">
                                <h1 className="w-8 text-purple-500">CI</h1>
                                <div className="ml-20 bg-purple-500 w-32">
                                    <h1 className="text-white text-center">{ahpConsistency['ci'].toFixed(4)}</h1>
                                </div>
                            </div>
                            <div className="flex flex-row items-center h-10">
                                <h1 className="w-8 text-purple-500">CR</h1>
                                <div className="ml-20 bg-purple-500 w-32">
                                    <h1 className="text-white text-center">{ahpConsistency['crVal'].toFixed(4)}</h1>
                                </div>
                            </div>
                            <div className="flex flex-row items-center h-10">
                                <h1 className="w-8 text-purple-500">CR</h1>
                                <div className="ml-20 bg-purple-500 w-32">
                                    <h1 className="text-white text-center">{ahpConsistency['cr'] ? "Konsisten" : "Tidak Konsisten"}</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-end mr-44 mb-8">
                <NextButton 
                    title={`Next`}
                    url={`/konfigurasi-alternatif`}
                />
            </div>
            </>
            ) : (
                <h1>Loading</h1>
            )}
        </MainLayout>
        </Authorize>
    );
}
 
export default PerhitunganAHP;