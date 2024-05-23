// for(let i =0;i<=10;i++) {
//     if(i==2) {
//        continue
//     }
//     console.log(i)
// }

// outerloop:for(let i = 0;i<=10;i++) {
//     for(let j=0;j<=10;j++) {
//        if(j==2) {
//         break outerloop
//        }
//        console.log(i,j)
//     }
// }

// const arrow = val => val

// console.log(arrow(2))

// function fact(num) {
//    if(num == 0 || num == 1) {
//     return 1
//    } else {
//     return num * fact(num-1)
//     //5 * 4 * 3 * 2 * 1
//    }
// }

// console.log(fact(5))

// console.dir(document.body)

// const arr = [1,2,3,4,5]

// arr.push("Hello")
// arr.pop()
// arr.unshift("Hello")
// arr.shift()
// // console.log(arr.slice(1,4))
// // console.log(arr.splice(0,1,"Vanakam"))
// let calc = 0
// arr.forEach((val,idx,arr)=> {
//      calc+=val
// })

// const finded = arr.find((val)=> {
//     return val < 4 && val > 2
// })

// const filter = arr.filter((val,idx)=> {
//     return val<=2
// })

// const calculation = arr.map((val,idx)=> {
//      return {
//          [idx]:val
//      }
// })

// const calculation = arr.reduce((pre,cur)=> {
//     console.log(pre,cur)
//     return pre + cur
// })
// console.log(calculation)

// console.log(arr.join(" "))

// console.log(arr.includes(2))

// console.log(arr.concat([1,2,3]))

// arr.reverse()
// console.log(arr.indexOf(2))
// console.log(arr)

// console.log("1234".split(""))

// console.dir(document.getElementById("h12"))
// console.dir(document.getElementsByTagName("h1"))
// console.dir(document.querySelector("h1"))
// //document element method
// const h1 = document.querySelector("h1")
// console.log(h1.textContent) 
// h1.innerHTML = "<h1>Vanakam</h1>"
// h1.insertAdjacentHTML("beforebegin","<h1>Hello</h1>")
// h1.after(document.createElement("a")) after before prepend append
// console.log(h1.previousSibling)
// const input = document.querySelector("input")
// input.setAttribute("value","20")

// h1.insertAdjacentElement("beforebegin",document.createElement("h1"))
// h1.insertAdjacentText("afterbegin","hello")
// const ele = document.createElement("h2")
// const p = document.querySelector("p")
// const pnode = p.parentNode
// pnode.insertBefore(ele,p)

// const temp = document.querySelector("template")

// const copiednode = document.importNode(temp.content,true)

// copiednode.children[0].textContent = "Hello"

// h1.append(copiednode)

// const ul = document.querySelector("ul")
// const list1 = ul.querySelectorAll("li")
// const list2 = ul.getElementsByTagName("li")
// console.log(list1)
// console.log(list2)
// const newLi = document.createElement("li")
// newLi.textContent = "Hello"
// ul.append(newLi)
// console.log(list1)
// console.log(list2)

