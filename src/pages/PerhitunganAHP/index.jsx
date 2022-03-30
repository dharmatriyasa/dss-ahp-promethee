import MainLayout from "../../layouts/Main";
import MatrixCard from "../../components/MatrixCard";
import { ahpvalue } from "../../data/ahpvalue";
import NextButton from "../../components/NextButton";
import Authorize from "../../components/Authorize";


const PerhitunganAHP = () => {
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
            <div className="flex flex-col px-10 py-8 h-full">
                <div className="flex flex-row mx-4 w-6/12">
                    <div className="mx-20">
                        <div>
                        <h1 className="text-purple-300 text-lg">Matriks Perbandingan Berpasangan</h1>
                            <div className="border-t-2 border-t-purple-300 w-80"></div>
                        </div>
                        <div>
                            <MatrixCard
                                dataAhpValues={ahpvalue}
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
                                dataAhpValues={ahpvalue}
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
                            {bobotKriteria.map((data, index) => {
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
                            {konsistensi.map((data, index) => {
                                return(
                                <div key={index} className="flex flex-row items-center h-10">
                                    <h1 className="w-8 text-purple-500">{data.field}</h1>
                                    <div className="ml-20 bg-purple-500 w-32">
                                        <h1 className="text-white text-center">{data.value}</h1>
                                    </div>
                                </div>
                                )
                            })}
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
        </MainLayout>
        </Authorize>
    );
}
 
export default PerhitunganAHP;