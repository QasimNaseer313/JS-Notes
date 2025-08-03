// let myDat=new Date()
// console.log(myDat)
// console.log(myDat.toString())
// console.log(myDat.toDateString())
// console.log(myDat.toISOString())
// console.log(myDat.toJSON())
// console.log(myDat.toLocaleDateString())
// console.log(myDat.toLocaleString())

// console.log(typeof myDat)

let anotherDate=new Date(2005 ,0,1)
// console.log(anotherDate.toDateString())

// let anotherDate2=new Date(2005 ,0,1,5,3)
// console.log(anotherDate2.toLocaleString())

// let anotherDate3=new Date("2005-01-01")
// console.log(anotherDate3.toLocaleString())


//===============----------=============================time


let myTimeStamp=Date.now
// used to compare two times which comes first 
// console.log(myTimeStamp)
// console.log(anotherDate.getTime())

// console.log(Math.floor(Date.now()/1000))

let day=new Date()
console.log(day.getDay())
console.log(day.getMonth()+1)
console.log(day.getFullYear())


//

day.toLocaleString("default",{
    weekday:"long"
})