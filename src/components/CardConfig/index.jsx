import { useRef } from "react";

const CardConfig = (props) => {

    const kaidah = useRef(null);
    const tipePreferensi = useRef(null);
    const batas1 = useRef(null);
    const batas2 = useRef(null);

    const onUpdateCriteria = (e) => {
        e.preventDefault();

        console.log(kaidah.current.value);
        console.log(tipePreferensi.current.value);
        console.log(batas1.current.value);
        console.log(batas2.current.value);

    }

    return (
        <div className="flex flex-col bg-purple-500 mx-1 my-6">
            <div className="border-b-2 border-b-white py-1">
                <h1 className="mx-4">{props.title}</h1>
            </div>
            <form onSubmit={onUpdateCriteria}>
            <div className="flex flex-row py-2">
                <div className="flex flex-col">
                    <div className="mx-4 my-2">
                        <select 
                            className="w-20 text-center" 
                            name="kaidah" 
                            id="kaidah"
                            ref={kaidah}
                        >
                            <option value="MIN">Min</option>
                            <option value="MAX">Max</option>
                        </select>
                        {/* <input
                            className="bg-white w-20 text-center" 
                            type="" 
                        /> */}
                    </div>
                    <div className="mx-4 my-2">
                        <select 
                            className="w-20 text-center" 
                            name="tipe_preferensi" 
                            id="tipe_preferensi"
                            ref={tipePreferensi}
                        >
                            <option value="Biasa">Biasa</option>
                            <option value="Quasi">Quasi</option>
                            <option value="Lienar">Lienar</option>
                            <option value="Level">Level</option>
                            <option value="Area">Area</option>
                            <option value="Gaussian">Gaussian</option>
                        </select>
                        {/* <input
                            className="bg-white w-20 text-center" 
                            type="number" 
                            placeholder="Tipe Preferensi"
                        /> */}
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="mx-4 my-2">
                        <input
                            ref={batas1}
                            className="bg-white w-20 text-center" 
                            type="number"
                            placeholder="Batas 1" 
                        />
                    </div>
                    <div className="mx-4 my-2">
                        <input
                            ref={batas2}
                            className="bg-white w-20 text-center" 
                            type="number"
                            placeholder="Batas 2" 
                        />
                    </div>
                    <div className="mx-4 my-2">
                        <input
                            className="bg-white w-20 text-center" 
                            type="submit" 
                            value={`submit`}
                        />
                    </div>
                </div>
            </div>
            </form>
        </div>
    );
}
 
export default CardConfig;