import MainLayout from "../../layouts/Main";
import CellResult from "../../components/CellResult";
import { getResult } from "../../services/alternative";
import Authorize from "../../components/Authorize";
import NextButton from "../../components/NextButton";
import { getRanking } from "../../services/firestore";
import { useEffect, useState } from "react";
import Loader from "../../components/Loader";


const HasilRekomendasi = () => {

    const [rankings, setRankings] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(()  => {
        async function fetchData(){
            const response = await getRanking();

            const ranks = response.docs.map((doc) => doc.data());

            setRankings(ranks[0].ranking);

            setIsLoading(false);
        }

        fetchData();
    }, []);

    return (
        <Authorize>
        {!isLoading ? (
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
                                {rankings.map((data, index) => {
                                    return(
                                        <CellResult
                                            key={index}
                                            index={index+1}
                                            name={data.name}
                                            address={data.alamat}
                                            skor={data.netflow.toFixed(5)}
                                            priorityCount={Math.floor(rankings.length/2)}
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
        ) : (
            <Loader />
        )}
        </Authorize>
    );
}
 
export default HasilRekomendasi;