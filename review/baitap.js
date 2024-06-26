// //bai1:
// const sum = (...numbers) => {
//     let total = 0;
//     numbers.forEach(number => {
//         total += number;
//     });
//     return total;
// };
// console.log(sum(1,2,3,4,5,6));

// //bai2:
// const calculateSum = (...numbers)=>{
// let newNum = numbers.reduce((number,newNum) => newNum+number,0)
// return newNum
// }
// console.log(calculateSum(1,2,3,4));
// //bai3:
// const stringLengths = (string)=> string.map(s => s.length);
// console.log(stringLengths(["qq","cmn"]));
// //bai4:
// const findFirstEven = (...numbers) => numbers.find(n => n % 2 === 0);
// console.log(findFirstEven(1,2,4,6,7,8));
// //bai5:
// const filterEvenNumbers = (...numbers) => numbers.filter(n => n%2===0);
// console.log(filterEvenNumbers(1,2,4,5,3,6,7,9,8));
// //bai6:
// const findLargestNumber = (...numbers)=>numbers.reduce((a,b) => a<b?b:a);
// console.log(findLargestNumber(1,2,3,4,5));
// //bai7:
// const checkIfElementExists = (array,number) => array.includes(number);
// console.log(checkIfElementExists([1,2,3,4,5,6,7,8,9], 6));
// //bai8:
// const calculateSumOfPrimes = (...numbers) => {
//     return numbers.filter(n => {
//       if (n <= 1) return false; // Số 1 không phải là số nguyên tố
//       for (let i = 2; i <= Math.sqrt(n); i++) {
//         if (n % i === 0) return false; // Nếu n chia hết cho bất kỳ số nào từ 2 đến căn bậc hai của n, n không phải là số nguyên tố
//       }
//       return true; // Nếu không tìm thấy số nào chia hết cho n, n là số nguyên tố
//     }).reduce((a, n) => a + n, 0);
//   };
// console.log(calculateSumOfPrimes(0,1,4,6,8,9));
// //bai9:
// const calculateTotalSalary = (object) => object.map((o) => {o.salary}).reduce((a,o) => a+o,0)
// //bai10:
// const squareNumbers = (...numbers) => numbers.map(n => Math.pow(n,2));
// //bai10 ES6:
let result = [];

let arr = ["eat", "tea", "tan", "ate", "nat", "bat"];

for (let i = 0; i < arr.length; i++) {
  let subResult = arr.filter(
    (item) =>
      item.split("").sort().join("") === arr[i].split("").sort().join("")
  );
  let isExist = false;
  for (let j = 0; j < result.length; j++) {
    console.log(subResult.join("") === result[j].join(""));
    if (subResult.join("") === result[j].join("")) {
      isExist = true;
      break;
    }
  }
  if (!isExist) {
    result.push(subResult);
  }
}
console.log(result);
