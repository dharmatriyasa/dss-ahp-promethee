const RI_MAP = {
    1: 0,
    2: 0,
    3: 0.58,
    4: 0.9,
    5: 1.12,
    6: 1.24,
    7: 1.32,
    8: 1.41,
    9: 1.45,
    10: 1.49,
    11: 1.51,
    12: 1.48,
    13: 1.56,
    14: 1.57,
    15: 1.59
};

export const toFixed2 = (num) => {
    return Math.round(num * 1e2) / 1e2;
}

export const convertToArray = (arr) => {
    const rowCount = arr.length;
    const columnCount = rowCount;

    const tempArr = [];

    for(let i = 0 ; i < rowCount; i++){
        for (let j = 0; j < columnCount; j++){
            tempArr.push(arr[i][j]);
        }
    }
    console.log(arr);
    console.log(tempArr);
    return tempArr;
}

export const createMatrix2D = (arr) => {
    const rowCount = Math.sqrt(arr.length);

    const newArr = [];

    let tempArr = [];
    
    for(let i = 0; i < arr.length; i++){
        tempArr.push(parseFloat(toFixed2(arr[i])));
        if((i+1)%rowCount === 0){
            newArr.push(tempArr);
            tempArr = [];
        }

    }

    return newArr;
}

export const columnSum = (arr) => {
    const columnCount = arr.length;
    const rowCount = columnCount;

    const newArr = [];

    let sum = 0;

    for(let i = 0 ; i < columnCount; i++){
        for(let j = 0; j < rowCount; j++){
            sum += arr[j][i];
        }
        newArr.push(toFixed2(sum));
        sum = 0;
    }

    return newArr;

}

export const normMatrix = (arr, sumArr) => {
    const [columnCount, rowCount] = Array(2).fill(arr.length);

    const newArr = [];

    let tempArr = [];

    for(let i = 0 ; i < columnCount; i++){
        for(let j = 0; j < rowCount; j++){
           tempArr.push(toFixed2(arr[i][j]/sumArr[j]))
        }
        newArr.push(tempArr);
        tempArr = [];
    }

    return newArr;
}

export const criteriaWeight = (arr) => {
    const [columnCount, rowCount] = Array(2).fill(arr.length);
    
    const newArr = [];

    let sum = 0;

    for(let i = 0; i < rowCount; i++){
        for(let j = 0; j < columnCount; j++){
            sum += arr[i][j];
        }
        newArr.push(toFixed2(sum/columnCount));
        sum = 0;
    }

    return newArr;
}

export const matrixXWeight = (arr, weight) => {
    const [columnCount, rowCount] = Array(2).fill(arr.length);

    const newArr = [];

    let sum = 0;

    for(let i = 0; i < rowCount; i++){
        for(let j = 0; j < columnCount; j++){
            // console.log(arr[i][j]*weight[j]);
            sum += arr[i][j]*weight[j];
        }
        // console.log(sum);
        newArr.push(toFixed2(sum));
        sum = 0;
    }

    return newArr;    
}

export const lambdaMax = (matrixWeight, weight) => {
    const columnCount= (matrixWeight.length);

    let sum = 0;

    for(let i = 0; i <columnCount; i++){
        sum += toFixed2(matrixWeight[i]/weight[i]);
        console.log(matrixWeight[i], weight[i]);
    }

    return toFixed2(sum/columnCount);
}

export const consistencyIndex = (lambdaValue, lengthWeight) => {
    return ((lambdaValue - lengthWeight) / (lengthWeight - 1));
}

export const ratioIndex = (lengthWeight) => {
    return RI_MAP[lengthWeight];
}

export const crValue = (ci, ri) => {
    return (ci/ri);
}

export const consistencyRatio = (ci, lengthWeight) => {
    const ri = RI_MAP[lengthWeight];

    // console.log(ri);

    const cr = ci/ri;

    if(cr < 0.1) return true;

    return false;
}