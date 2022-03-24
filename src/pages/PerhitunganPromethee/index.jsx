import { useState } from "react";
import BoxNetflow from "../../components/BoxNetflow";
import BoxPreferensi from "../../components/BoxPreferensi";
import MainLayout from "../../layouts/Main";
import { 
    getAllPreferensiValue,
    getAllNetFlow 
} from "../../services/alternative";

const PerhitunganPromethee = () => {
    
    const alternativePreferensi = getAllPreferensiValue();
    const alternativeNetFlow = getAllNetFlow();

    const [showPreferensiValue, setShowPreferensiValue] = useState(true);
    const [showNetFlowValue, setShowNetFlowValue] = useState(false);

    const showListClick = () => {
        setShowPreferensiValue(true);
        setShowNetFlowValue(false);
    }

    const showCheckClick = () => {
        setShowPreferensiValue(false);
        setShowNetFlowValue(true);
    }

    return (
        <MainLayout>
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
                        {alternativePreferensi.map((data, index) => {
                            return(
                                <BoxPreferensi
                                    key={index}
                                    alternative1={data.alternative1}
                                    alternative2={data.alternative2}
                                    preferensiValue={data.preferensi}
                                    K1={data.K1}
                                    K2={data.K2}
                                    K3={data.K3}
                                    K4={data.K4}
                                    K1Hd={data.K1Hd}
                                    K2Hd={data.K2Hd}
                                    K3Hd={data.K3Hd}
                                    K4Hd={data.K4Hd}
                                />
                            )
                        })}
                </div>
                )}
                {showNetFlowValue && (
                <div className="mt-12 grid grid-cols-2 gap-4">
                        {alternativeNetFlow.map((data, index) => {
                            return(
                                <BoxNetflow
                                    key={index}
                                    alternative={data.name}
                                    rank={data.rank}
                                    leaving={data.leaving}
                                    entering={data.entering}
                                    net={data.net}
                                />
                            )
                        })}
                </div>
                )}
            </div>
        </MainLayout>
    );
}
 
export default PerhitunganPromethee;