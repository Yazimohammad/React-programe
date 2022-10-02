
// const str="hii kinge srak"
// const str2=str.split(" ")
// const res=str2.reduce((acc,cur)=> acc.length<cur.length? acc:cur)
// console.log(res);

// split method//

// let str="salman khan"
// const res=str.split(" ")
// console.log(res);
const a = " my name is Yazdan"
const b = a.split("")
const res = b.reduce((acc,cur)=>acc.length<cur.length?acc:cur)
console.log(res);