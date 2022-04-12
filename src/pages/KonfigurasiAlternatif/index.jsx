import { useEffect, useState } from "react";
import Authorize from "../../components/Authorize";
import CellInput from "../../components/CellInput";
import CellList from "../../components/CellList";
import NextButton from "../../components/NextButton";
import MainLayout from "../../layouts/Main";
import { 
    getAllAlternativeUncheck,
    getAllAlternativeCheck 
} from "../../services/alternative";

import { 
    getAllAlternativesUncheck,
    getAllAlternativesCheck,
} from "../../services/firestore";

const KonfigurasiAlternatif = () => {

    const [alternativesUncheck, setAlternativesUncheck] = useState([]);
    const [alternativesCheck1, setAlternativesCheck] = useState([]);
    // console.log(getAllAlternativeUncheck());
    // console.log(getAllAlternativeCheck());
    const alternativesCheck = getAllAlternativeCheck();

    const [isLoading, setIsLoading] = useState(true);
    const [showListAlternative, setShowListAlternative] = useState(true);
    const [showCheckAlternative, setShowCheckAlternative] = useState(false);

    const showListClick = () => {
        setShowListAlternative(true);
        setShowCheckAlternative(false);
    }

    const showCheckClick = () => {
        setShowListAlternative(false);
        setShowCheckAlternative(true);
    }

    useEffect(() => {
        const temp = [];
        getAllAlternativesUncheck()
            .then((res) => {
                res.forEach((data) => {
                    temp.push(data.data());
                });
                setAlternativesUncheck(temp);
            })
            .catch(err => console.log(err));

        const temp2 = [];
        getAllAlternativesCheck()
            .then((res) => {
                res.forEach((data) => {
                    temp2.push(data.data())
                });
                setAlternativesCheck(temp2);
                setIsLoading(false);
            })
    }, [setAlternativesUncheck, setAlternativesCheck]);

    return (
        <Authorize>
        <MainLayout>
            {!isLoading ? (
                <>
                <div className="flex flex-col px-10 py-8 h-full">
                    <div className="flex flex-row">
                        <div 
                            className="w-5/12 cursor-pointer"
                            onClick={showListClick}
                        >
                            <h1 className={showListAlternative? "text-purple-500 text-lg font-bold": "text-purple-300 text-lg"}>List Alternatif</h1>
                            <div className={`  w-80 ${showListAlternative ? "border-t-4 border-t-purple-500": "border-t-2 border-t-purple-300"}`}></div>
                        </div>
                        <div 
                            className="w-5/12 cursor-pointer"
                            onClick={showCheckClick}
                        >
                            <h1 className={showCheckAlternative? "text-purple-500 text-lg font-bold": "text-purple-300 text-lg"}>Lihat Alternatif</h1>
                            <div className={`  w-80 ${showCheckAlternative ? "border-t-4 border-t-purple-500": "border-t-2 border-t-purple-300"}`}></div>
                        </div>
                    </div>
                    <div className="mt-12">
                        <table className="w-full bg-purple-200 text-purple-800">
                            <thead>
                                <tr className="border border-b-purple-800 text-left">
                                    <th className="px-4">No</th>
                                    <th className="">Nama</th>
                                    <th className="">K1</th>
                                    <th className="">K2</th>
                                    <th className="">K3</th>
                                    <th className="">K4</th>
                                    <th className="">Status</th>
                                    <th className="">Aksi</th>
                                </tr>
                            </thead>
                            {showListAlternative && (
                                <tbody className="">
                                    {alternativesUncheck.map((data, index) => {
                                        return(
                                            <CellInput
                                                key={index}
                                                uid={data.uid}
                                                index={index+1}
                                                id={data.id}
                                                name={data.nama}
                                                K1={data.K1}
                                                K2={data.K2}
                                                K3={data.K3}
                                                K4={data.K4}
                                                statusAlternative={data.checklist}
                                                action={data.action}
                                            />
                                        )
                                    })}
                                </tbody>
                            )}
                            {showCheckAlternative && (
                                <tbody className="">
                                    {alternativesCheck1.map((data, index) => {
                                        return(
                                            <CellList
                                                key={index}
                                                uid={data.uid}
                                                index={index+1}
                                                id={data.id}
                                                name={data.nama}
                                                K1={data.K1}
                                                K2={data.K2}
                                                K3={data.K3}
                                                K4={data.K4}
                                                statusAlternative={data.checklist}
                                                action={data.action}
                                            />
                                        )
                                    })}
                                </tbody>
                            )}
                        </table>
                    </div>
                </div>
                <div className="flex justify-end mr-44 mb-8">
                    <NextButton 
                        title={`Next`}
                        url={`/perhitungan-promethee`}
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
 
export default KonfigurasiAlternatif;