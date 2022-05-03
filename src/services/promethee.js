export const preferensiType = (nilai, prometheeCriteria) => {
    const {batas1, batas2, kaidah, tipePreferensi} = prometheeCriteria;
    
    if(kaidah === 'MIN') nilai *= -1;
    switch(tipePreferensi){
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

export const prefValues = (alternatives, prometheeCriteria, weightCriteria) => {

    let preffAllAltr = [];
    for(let i = 0; i < alternatives.length; i++){
        let prefAltr = [];
        let altrValue = [];
        for(let j = 0; j < alternatives.length; j++){ 
            let prefOneAltr = [];
            if(i !== j){
                for(let k = 0; k < 4; k++){
                    const d = alternatives[i][`K${k+1}`] - alternatives[j][`K${k+1}`];
                    altrValue.push(d);
                    prefOneAltr.push(preferensiType(d, prometheeCriteria[k]));
                }
                const prefValueIndex = multicriteriaPrefIndex(prefOneAltr, weightCriteria);
                prefAltr.push({
                    alternative: alternatives[j].nama,
                    criteriaValue: altrValue,
                    preferensiValue: prefOneAltr,
                    preferensiValueIndex: prefValueIndex
                });
                prefOneAltr = [];
                altrValue = [];
            }else{
                prefAltr.push(null);
            }
        } 
        preffAllAltr.push({
            mainAlternative: alternatives[i].nama,
            preferensiValues: prefAltr
        });
    }

    return preffAllAltr;
}

export const multicriteriaPrefIndex = (prefVal, weightCriteria) => {
    const result = (1/prefVal.length) * (prefVal[0]*weightCriteria[0] + prefVal[1]*weightCriteria[1] + prefVal[2]*weightCriteria[2] + prefVal[3]*weightCriteria[3]);

    return result;
}

export const leavingFlow = (prefAllAltr) => {
    let leavingFlows = [];
    for(let i = 0; i < prefAllAltr.length; i++){
        let prefAltr = prefAllAltr[i].preferensiValues;
        let sum = 0;
        // console.log(prefAltr[1].preferensiValueIndex);
        for(let j = 0; j < prefAltr.length; j++){
            if(!!prefAltr[j]){
                // console.log(`${prefAllAltr[i].mainAlternative} dan ${prefAltr[j].alternative}`);
                sum += prefAltr[j].preferensiValueIndex;
            }
        }
        sum = sum/(prefAllAltr.length-1);
        leavingFlows.push({
            name: prefAllAltr[i].mainAlternative,
            leavingflow: sum
        });
    }

    return leavingFlows;
}

export const enteringFlow = (prefAllAltr) => {
    let enteringFlows = [];
    for(let i = 0; i < prefAllAltr.length; i++){
        let altrName = prefAllAltr[i].mainAlternative;
        let sum = 0;
        for(let j = 0; j < prefAllAltr.length; j++){
            if(prefAllAltr[j].mainAlternative !== altrName){
                // console.log(`${prefAllAltr[j].mainAlternative} dan ${altrName}`)
                sum += prefAllAltr[j].preferensiValues[i].preferensiValueIndex
            }
        }
        sum = sum/(prefAllAltr.length-1);
        enteringFlows.push({
            name: prefAllAltr[i].mainAlternative,
            enteringflow: sum
        });
    }

    return enteringFlows;
}

export const netFlow = (alternative, leavingflows, enteringflows) => {
    let netFlows = [];
    for(let i = 0; i <alternative.length; i++){
        let netflow = leavingflows[i].leavingflow - enteringflows[i].enteringflow;
        netFlows.push({
            name: alternative[i].nama,
            alamat: alternative[i].alamat,
            leavingflow: leavingflows[i].leavingflow,
            enteringflow: enteringflows[i].enteringflow,
            netflow,
        });
    }

    return netFlows;
}

export const ranking = (netflows) => {
    let ranking = [];
    netflows.sort((a,b) => a.netflow - b.netflow);

    let rank = 1;

    for(let i = netflows.length-1; i >= 0; i--){
        ranking.push({
            name: netflows[i].name,
            alamat: netflows[i].alamat,
            leavingflow: netflows[i].leavingflow,
            enteringflow: netflows[i].enteringflow,
            netflow: netflows[i].netflow,
            ranking: rank
        });

        rank++;
    }

    return ranking;
}

