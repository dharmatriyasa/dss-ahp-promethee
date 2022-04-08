import { 
    AHP_CONSISTENCY, 
    AHP_MATRIX, 
    AHP_NORMALIZATION, 
    AHP_WEIGHT, 
    PROMETHEE_CRITERIA 
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

export const getConsistencyAhp = async() => {
    const consistencyAhp = await db.collection(AHP_CONSISTENCY).orderBy('timestamp', 'decs').limit(1).get();

    return consistencyAhp;
}

export const addUsers = async(data) => {
    const newUser = await db.collection('user').set(data);
    return newUser;
}

export const addNewDSS = async(data) => {
    const newDSS = await db.collection('user').add(data);
    return newDSS;
}