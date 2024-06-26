const sum = (...numbers)=>{
    let sum = 0;
    for (let index = 0; index < numbers.length; index++) {
        sum += numbers[index]; 
    }
    return sum;
}
console.log(sum(1,2,3));
