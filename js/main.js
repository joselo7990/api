//  prueba hack //

//dado el array [7,3,2]., hacer una funcion sinBonus que retorne [49,4]
// y hacer otra conBonus que retorne [4,49]


array = [7, 3, 2];

function sinBonus(arr) {
    let nuevoArr = [];
    for (let i = 0; i < arr.length; i = i + 2) {
        nuevoArr.push(arr[i] * arr[i]);
    }

    return nuevoArr;
}


function ordenar(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let aux = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = aux
            }

        }

    }

    return arr
}

function conBonus(array) {
    console.log(ordenar(sinBonus(array)));
}