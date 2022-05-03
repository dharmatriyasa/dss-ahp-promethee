import { 
    AHP_CONSISTENCY, 
    AHP_MATRIX, 
    AHP_NORMALIZATION, 
    AHP_WEIGHT, 
    PROMETHEE_CRITERIA,
    ALTERNATIVES, 
    PREFERENSI_VALUES,
    RANKING
} from "../config/collection";
import { db, fstore } from "../config/firebase";

// export const getUsers = async() => {
//     const users = db.collection('user');
//     const user = await users.get();
//     return user;
// }

export const addMatrixAhp = async(matrix) => {
    const newMatrix = await db.collection(AHP_MATRIX).add({
        matrix,
        timestamp: fstore.FieldValue.serverTimestamp()
    });

    return newMatrix;
}

export const addMatrixNorm = async(matrix) => {
    const normMatrix = await db.collection(AHP_NORMALIZATION).add({
        matrix,
        timestamp: fstore.FieldValue.serverTimestamp()
    });

    return normMatrix;
}

export const addWeightAhp = async(weight) => {
    const weightAhp = await db.collection(AHP_WEIGHT).add({
        weight,
        timestamp: fstore.FieldValue.serverTimestamp()
    })

    return weightAhp;
}

export const addConsistencyAhp = async(consistency) => {
    const consistencyAhp = await db.collection(AHP_CONSISTENCY).add({
        consistency,
        timestamp: fstore.FieldValue.serverTimestamp()
    });

    return consistencyAhp;
}

export const addPrometheeCriteria = async(prometheCriteria) => {
    const newPrometheeCriteria = await db.collection(PROMETHEE_CRITERIA).add({
        prometheCriteria,
        timestamp: fstore.FieldValue.serverTimestamp()
    });

    return newPrometheeCriteria;
}

export const addPreferensiValues = async(preferensiValues) =>{
    console.log(preferensiValues);
    const newPreferensiValues = await db.collection(PREFERENSI_VALUES).add({
        preferensiValues,
        timestamp: fstore.FieldValue.serverTimestamp()
    });

    console.log(newPreferensiValues);

    return newPreferensiValues;
}

export const addRanking = async(ranking) => {
    const newRanking = await db.collection(RANKING).add({
        ranking,
        timestamp: fstore.FieldValue.serverTimestamp()
    });

    return newRanking;
}

export const getAhpMatrix = async() =>{
    const ahpMatrix = await db.collection(AHP_MATRIX).orderBy('timestamp', 'desc').limit(1).get();

    return ahpMatrix;
}

export const getAhpNorm = async() =>{
    const ahpNorm = await db.collection(AHP_NORMALIZATION).orderBy('timestamp', 'desc').limit(1).get();

    return ahpNorm;
}

export const getWeightAhp = async() => {
    const weightAhp = await db.collection(AHP_WEIGHT).orderBy('timestamp', 'decs').limit(1).get();

    return weightAhp;
}

export const getWeightCriteria = async() => {
    const weightAhp = await db.collection(AHP_WEIGHT).orderBy('timestamp', 'decs').limit(1).get();

    return weightAhp;
}

export const getConsistencyAhp = async() => {
    const consistencyAhp = await db.collection(AHP_CONSISTENCY).orderBy('timestamp', 'decs').limit(1).get();

    return consistencyAhp;
}

export const getPrometheeCriteria = async() => {
    const prometheeCriteria = await db.collection(PROMETHEE_CRITERIA).orderBy('timestamp', 'desc').limit(1).get();

    return prometheeCriteria;
}

export const getAllAlternativesUncheck = async() => {
    const alternatives = await db.collection(ALTERNATIVES).where('checklist', '==', false).get();

    return alternatives;
}

export const getAllAlternativesCheck = async() => {
    const alternatives = await db.collection(ALTERNATIVES).where('checklist', '==', true).get();

    console.log(alternatives);

    return alternatives;
}

export const getPreferensiValues = async() => {
    const preferesiValues = await db.collection(PREFERENSI_VALUES).orderBy('timestamp', 'desc').limit(1).get();

    return preferesiValues;
}

export const getRanking = async() => {
    const rankings = await db.collection(RANKING).orderBy('timestamp', 'desc').limit(1).get();

    return rankings;
}

export const updateActionAlternative = async(uid, checklistStatus) => {
    console.log(uid, checklistStatus);
    const alternative =  db.collection(ALTERNATIVES).doc(uid);

    const res = await alternative.update({checklist: checklistStatus});

    console.log(( (await alternative.get()).data()));

    // return alternative;
}

export const addUsers = async(data) => {
    const newUser = await db.collection('user').set(data);
    return newUser;
}

export const addNewDSS = async(data) => {
    const newDSS = await db.collection('user').add(data);
    return newDSS;
}