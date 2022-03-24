import { useState } from "react";
import CellInput from "../../components/CellInput";
import CellList from "../../components/CellList";
import MainLayout from "../../layouts/Main";
import { 
    getAllAlternativeUncheck,
    getAllAlternativeCheck 
} from "../../services/alternative";

const KonfigurasiAlternatif = () => {
    // console.log(getAllAlternativeUncheck());
    // console.log(getAllAlternativeCheck());
    const alternativesUncheck = getAllAlternativeUncheck();
    const alternativesCheck = getAllAlternativeCheck();

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

    return (
        <MainLayout>
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
                                            index={index+1}
                                            id={data.id}
                                            name={data.name}
                                            K1={data.K1}
                                            K2={data.K2}
                                            K3={data.K3}
                                            K4={data.K4}
                                            statusAlternative={data.statusAlternative}
                                            action={data.action}
                                        />
                                    )
                                })}
                            </tbody>
                        )}
                        {showCheckAlternative && (
                            <tbody className="">
                                {alternativesCheck.map((data, index) => {
                                    return(
                                        <CellList
                                            key={index}
                                            index={index+1}
                                            id={data.id}
                                            name={data.name}
                                            K1={data.K1}
                                            K2={data.K2}
                                            K3={data.K3}
                                            K4={data.K4}
                                            statusAlternative={data.statusAlternative}
                                            action={data.action}
                                        />
                                    )
                                })}
                            </tbody>
                        )}
                    </table>
                </div>
            </div>
        </MainLayout>
    );
}
 
export default KonfigurasiAlternatif;