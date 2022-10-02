
const arr=[1,2,3,3,4,4,5,5,6,6,7,8,9]

const res=arr.filter((item,ele)=>arr.indexOf(item)===ele)

// console.log([...new Set (arr)])

// const a = [...new Set(arr)]
console.log(res)