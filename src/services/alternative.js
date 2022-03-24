import { alternative } from "../data/alternative"
import { netflow } from "../data/netflow";
import { preferensi } from "../data/preferensi";
import { result } from "../data/result";

export const getAllAlternativeUncheck = () => {
    const alternatives = alternative.filter((data) => data.statusAlternative === false);
    return alternatives;
}

export const getAllAlternativeCheck = () =>{
    const alternatives = alternative.filter((data) => data.statusAlternative === true);
    return alternatives;
}

export const getAlternativeById = (id) => {
    const alternative = alternative.find((data) => data.id === id);
    return alternative;
}


export const updateActionAlternative = ({id, statusAlternative}) => {
    alternative.find((data) => {
        // console.log(data.id === id);
        if(data.id === id){
            data.statusAlternative = statusAlternative;
            alternative.statusAlternative = statusAlternative;
            // console.log(id, data.statusAlternative);
            // console.log(alternative);
        }
    })
}

export const getAllPreferensiValue = () => {
    return preferensi;
}

export const getAllNetFlow = () => {
    return netflow;
}

export const getResult = () => {
    return result;
}