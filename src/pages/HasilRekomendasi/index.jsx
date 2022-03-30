import MainLayout from "../../layouts/Main";
import CellResult from "../../components/CellResult";
import { getResult } from "../../services/alternative";
import Authorize from "../../components/Authorize";
import NextButton from "../../components/NextButton";


const HasilRekomendasi = () => {

    const results = getResult();

    return (
        <Authorize>
        <MainLayout>
            <div className="flex flex-col px-10 py-8 h-full">
                <div className="mt-12">
                    <table className="w-full bg-purple-200 text-purple-800">
                        <thead>
                            <tr className="border border-b-purple-800 text-left">
                                <th className="px-4">No</th>
                                <th className="">Nama</th>
                                <th className="">Alamat</th>
                                <th className="">Skor</th>
                                <th className="text-center">Status</th>
                            </tr>
                        </thead>
                        <tbody className="">
                            {results.map((data, index) => {
                                return(
                                    <CellResult
                                        key={index}
                                        index={index+1}
                                        name={data.name}
                                        address={data.address}
                                        skor={data.skor}
                                        result={data.result}
                                    />
                                )
                            })}
                        </tbody>
                    </table>
                </div> 
            </div>
            <div className="flex justify-end mr-44 mb-8">
                <NextButton 
                    title={`Back`}
                    url={`/konfigurasi-kriteria`}
                />
            </div>
        </MainLayout>
        </Authorize>
    );
}
 
export default HasilRekomendasi;