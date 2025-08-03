//array

const myarr=[1,2,3,4,5,6,"Qasim",true]

const myHeros=["Dad","Mom","MyFamily"]

const myArr2=new Array(1,2,3,4)

//console.log(myarr[0]);
//Methods

// myarr.push(6)//adds elements at the last index
// myarr.pop()//remove element from the last index
// myarr.unshift(10)//adds elements at the first index
// myarr.shift()// remove elements at the first index

// myarr.includes(3)// Gives the result in true false
// // myarr.indexOf(3//gives index number if the element was 
// //     ///present otherwise it will give -1)

// // console.log(myarr.indexOf(3));

// const newArr=[1,2,3,4]
// console.log(newArr)

// const newArr2=newArr.join()//binds and convert it into string
// console.log(newArr2)


const ar1=[0,1,2,3,4,5]
console.log("Original array",ar1)

const ar2=ar1.slice(1,3)
console.log("Slice array",ar2)
console.log("Original array",ar1)

const ar3=ar1.splice(1,3)// 3 is numbers of value to del
console.log("Splice array",ar3)
console.log("Original array",ar1)
/////------Result
// Original array [ 0, 1, 2, 3, 4, 5 ]
// Slice array [ 1, 2 ]
// Original array [ 0, 1, 2, 3, 4, 5 ]
// Splice array [ 1, 2, 3 ]
// Original array [ 0, 4, 5 ]

// Slice(value to remove from,value remove upto 
// but don't include)= returns new array and
//  original value remains unchanged. 
// Use when you need to extract a portion of 
// an array without modifying it.


// Splice(value to delete from, number of value
//  to delete) = returns new array with deleted
//  one and original value changed.Use when you
//  need to add, remove, or replace elements 
// within an array.
