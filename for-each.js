// Use the forEach method to solve these problems! All functions should return a NEW array, without mutating the old array.

/*
Input:
[
    { name: 'spot', type: 'dog' },
    { name: 'rover', type: 'dog' },
    { name: 'jumpy', type: 'frog' },
    { name: 'einstein', type: 'cat' },
]
*/

/*
Output:

['spot', 'rover', 'jumpy', 'einstein']
*/

export function makeArrayOfNames(arr) {
    let arrayNames = [];
    arr.forEach(animal => {
        arrayNames.push(animal.name);
    });
    return arrayNames;
}

/*
Output:

['cat', 'frog', 'dog', 'dog']
*/

export function makeReversedArrayOfTypes(arr) {
    let arrayType = [];
    arr.forEach(animal => {
        arrayType.push(animal.type);
    });
    return arrayType.reverse();
}

/*
Output:

[
    { nombre: 'spot', tipo: 'dog' },
    { nombre: 'rover', tipo: 'dog' },
    { nombre: 'jumpy', tipo: 'frog' },
    { nombre: 'einstein', tipo: 'cat' },
]
*/

export function makeSpanishLanguageArray(arr) {
    let spanishArray = [];
    arr.forEach(animal => {
        spanishArray.push({
            nombre: `${animal.name}`,
            tipo: `${animal.type}`
        });
    });
    return spanishArray;
}

