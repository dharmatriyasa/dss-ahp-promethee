export const preferensiType = (nilai, batas1, batas2, tipe, kaidah) => {
    // console.log(kaidah);
    if(kaidah === 'MIN') nilai *= -1;
    switch(tipe){
        case "Biasa": //1
            if(nilai <= 0) 
                return 0.0;
            else
                return 1.0;
        case "Quasi": //2
            if(nilai <= batas1)
                return 0.0;
            else
                return 1.0;
        case "Linear": //3
            if(nilai <= 0) 
                return 0.0;
            else if(nilai <= batas1)
                return nilai/batas1;
            else
                return 1.0;
        case "Level": //4
            if(nilai <= batas1)
                return 0.0;
            else if(nilai <= batas2 && nilai > batas1)
                return 0.5;
            else
                return 1.0;
        case "Area": //5
            if(nilai <= batas1)
                return 0.0;
            else if(nilai <= batas2 && nilai > batas1)
                return (nilai - batas1) / (batas2 - batas1);
            else
                return 1.0
        default:
            return 0.0;
    }
}

export const multicriteriaPrefIndex = (arrPrefValue, weightCriteria) => {

}

