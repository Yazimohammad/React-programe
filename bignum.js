const arr=[2,30,5,6,8,20]

// // const num= Math.max(...arr)
// const res=arr.reduce((acc,cur)=>acc<cur?acc:cur)
// console.log(res);
// const arr = [11,23,45,67,89,98,32,67,33]

// const res=arr.reduce((acc,cur)=>acc<cur?acc:cur)
// console.log(res);
const numbers = [21,56,78,90,34,45,99]

// const bignum=numbers.reduce((acc,cur)=>acc>cur?acc:cur)
// console.log(bignum)
const smalnum= numbers.reduce((acc,cur)=>acc<cur?acc:cur)
console.log(smalnum)