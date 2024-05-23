// console.log(greeting)
// var greeting = "Hello Students"
// greeting = "Hello" //== greeting = "Hello" 
// function greetfn() {
//     var greeting = "Vanakam"
//     console.log(greeting)
// }
// greetfn()
// console.log(greeting)

// // console.log(greeting)

// let greeting1;
// // greeting1 = "Hello" //block scoped
// // {
// //     greeting1 = "Hello students"
// //     console.log(greeting1)
// // }
// // console.log(greeting1)

// // const greet3 = "Hello";

//datatypes
// "string" 1 [a,"1",[]],{name:"deepak"}
//string,numbers,arrays,object,booleans,maps and sets,undefined,null,NaN,infinity,symbols,iterators
// const a = '1'
// const num = 2.5
//              //0 1 2 3
// const arr = [1,"1",["Hello"]]

// const obj = {
//     [num]:a,
//     age:23
// }

// console.log(typeof bool)

// // let b = a
// // b = "Vanakam"
// // console.log(a,b)

// const arr2 = arr
// arr[1] = 2
// console.log(arr2===arr)

// const arrCopy = [...arr] 
// arrCopy[1] = "Vanakam"
// console.log(arr==arrCopy)

// const arr1 = [1,2,3,4]
// const [one,two,three] = arr1
// console.log(one)

// const obj2 = {
//     name:"Deepak",
//     age:23
// }

// const {name:name1,age:age2} = obj2
// console.log(name1,age2)

//operators
//arithmetic assignment comparitive logical texnary bitwise ?? operator
// + - * / % **
// console.log(2**3)
// let val = 2
//assignment = += -= *= /= %=
//+= val+=3 //val = val + 3
// val+=3
// console.log(val)
// == === <= >= < > != !==
// console.log(1!=="1")
//&& || !
// console.log(!(2==1))

// //ternary ?: ??
// // condition ? trueval : falseval
// // console.log(0?1:0)
// // console.log(Boolean(0))
// console.log(undefined??1)
//conditional statements
//if if--elif--else if-else switch
// if(!1==1) {
//     console.log(1)
// } else if(1==1) {
//     console.log(2)
// } else {
//     console.log(2)
// }
// const data = +prompt("Enter a number")
// switch (data) {
//     case 1:
//         console.log(1)
//         break;
//     case 2:
//         console.log("vanakam")
//         break;
//     default:
//         console.log("Default")
//         break;
// }

//loops
//for for-of for-in foreach while do-while
//for(initialization;condition;increment/decrement) {}
// const arr = [1,2,3,4]
// for(let i = 0;i<arr.length;) {
//     console.log(arr[i])
//     i++
// }

//for-of array for-in object

// for(const data of [1,2,3,4]) {
//     console.log(data)
// }

// const obj = {
//     name:"Deepak",
//     car:"Mustang",
//     bike:"RE Electra 2005"
// }

// for(const key in obj) {
//    console.log(key + ":" + obj[key])
// }
// let i = 1
// while(i!=1) {
//    console.log(i)
//    i++
// }

// do {
//    console.log(i)
// } while(i!=1)
    console.log(calculate(1,10,10,10,55))
function calculate(...a) {
    let b = 0;
    for(const data of a) {
        b+=data
    }
    return b
}
[1,2,3,4].forEach((val,idx,arr)=> {
    console.log(arr)
})



