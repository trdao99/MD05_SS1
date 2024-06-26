const arr1 = [1,2,3,4,5,6];
const arr2 = [7,8,9,10,11];
const arr3 = [...arr1]; //copy mang arr 1
console.log(arr3);
const arr4 = [...arr1,...arr3,...arr2];
console.log(arr4);
const myIn4 = {
    name : "dao"
}
const myAge = {
    age : 19
}
const allIn4 = {...myAge,...myIn4};
console.log(allIn4);