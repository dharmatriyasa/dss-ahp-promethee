import { useEffect, useState } from "react";
import Authorize from "../../components/Authorize";
import BoxNetflow from "../../components/BoxNetflow";
import BoxPreferensi from "../../components/BoxPreferensi";
import NextButton from "../../components/NextButton";
import MainLayout from "../../layouts/Main";
import { 
    getPreferensiValues, 
    getRanking, 
} from "../../services/firestore";

const PerhitunganPromethee = () => {

    const [showPreferensiValue, setShowPreferensiValue] = useState(true);
    const [showNetFlowValue, setShowNetFlowValue] = useState(false);
    const [isLodaing, setIsLodaing] = useState(true);
    const [preferenceValues, setPreferenceValues] = useState([]);
    const [rangking, setRangking] = useState([]);

    const showListClick = () => {
        setShowPreferensiValue(true);
        setShowNetFlowValue(false);
    }

    const showCheckClick = () => {
        setShowPreferensiValue(false);
        setShowNetFlowValue(true);
    }

    useEffect(() => {

        async function fetchData(){
            const responsePref = await getPreferensiValues();
            const preferensiValues = responsePref.docs.map((doc) => doc.data());

            const responseRanks = await getRanking();
            const rankings = responseRanks.docs.map((doc) => doc.data());

            setPreferenceValues(preferensiValues[0].preferensiValues);
            setRangking(rankings[0].ranking);

            console.log(preferensiValues[0].preferensiValues);
            console.log(rankings[0].ranking);

            setIsLodaing(false);
        }

        fetchData();
        
    }, [])

    return (
        <Authorize>
        <MainLayout>
            {!isLodaing ? (
                <>
                <div className="flex flex-col px-10 py-8 h-full">
                <div className="flex flex-row">
                    <div 
                        className="w-5/12 cursor-pointer"
                        onClick={showListClick}
                    >
                        <h1 className={showPreferensiValue? "text-purple-500 text-lg font-bold": "text-purple-300 text-lg"}>Nilai Preferensi</h1>
                        <div className={`  w-80 ${showPreferensiValue ? "border-t-4 border-t-purple-500": "border-t-2 border-t-purple-300"}`}></div>
                    </div>
                    <div 
                        className="w-5/12 cursor-pointer"
                        onClick={showCheckClick}
                    >
                        <h1 className={showNetFlowValue? "text-purple-500 text-lg font-bold": "text-purple-300 text-lg"}>Net Flow</h1>
                        <div className={`  w-80 ${showNetFlowValue ? "border-t-4 border-t-purple-500": "border-t-2 border-t-purple-300"}`}></div>
                    </div>
                </div>
                {showPreferensiValue && (
                <div className="mt-12 grid grid-cols-2 gap-4">
                    {preferenceValues.map((preferenceValue) => {
                    return(
                    preferenceValue.preferensiValues.map((data, index) => {
                        console.log(data);
                        if(data !== null){
                            console.log('hehe');
                            return(
                                <BoxPreferensi
                                    key={index}
                                    alternative1={preferenceValue.mainAlternative}
                                    alternative2={data.alternative}
                                    preferensiValue={data.preferensiValueIndex}
                                    K1={data.criteriaValue[0]}
                                    K2={data.criteriaValue[1]}
                                    K3={data.criteriaValue[2]}
                                    K4={data.criteriaValue[3]}
                                    K1Hd={data.preferensiValue[0]}
                                    K2Hd={data.preferensiValue[1]}
                                    K3Hd={data.preferensiValue[2]}
                                    K4Hd={data.preferensiValue[3]}
                                />
                            )
                        }
                    })
                    )
                    })}
                </div>
                )}
                {showNetFlowValue && (
                <div className="mt-12 grid grid-cols-2 gap-4">
                    {rangking.map((data, index) => {
                        return(
                            <BoxNetflow
                                key={index}
                                alternative={data.name}
                                rank={data.ranking}
                                leaving={data.leavingflow.toFixed(5)}
                                entering={data.enteringflow.toFixed(5)}
                                net={data.netflow.toFixed(5)}
                            />
                        )
                    })}
                </div>
                )}
            </div>
            <div className="flex justify-end mr-44 mb-8">
                <NextButton 
                    title={`Next`}
                    url={`/hasil-rekomendasi`}
                />
            </div>
            </>
            ) : (
                <h1>Loading...</h1>
            )}
            
        </MainLayout>
        </Authorize>
    );
}
 
export default PerhitunganPromethee;