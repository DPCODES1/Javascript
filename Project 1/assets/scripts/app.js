let currentResult = 0;
let defaultResult = 0;
let logEntry = []
function userInputValue() {
  return +userInput.value
}


function calculate(calcData) {
     const initialRes = currentResult;
     let calcDescription;
     if(calcData == "ADD") {
      calcDescription = `${currentResult} + ${userInputValue()}`;
      currentResult += userInputValue()
     } else if(calcData == "SUB") {
      calcDescription = `${currentResult} - ${userInputValue()}`;
      currentResult -= userInputValue()
     } else if(calcData == "MUL") {
      calcDescription = `${currentResult} x ${userInputValue()}`;
      currentResult *= userInputValue()
     } else if(calcData == "DIV") {
      calcDescription = `${currentResult} / ${userInputValue()}`;
      currentResult /= userInputValue()
     }
     outputResult(currentResult,calcDescription)
     const log = {
      operation:calcData,
      prevResult:initialRes,
      result:currentResult,
      number:userInputValue()
      }

      logEntry.push(log)
}

// function add() {
//    const calcDescription = `${currentResult} + ${userInputValue()}`;
//    const initialRes = currentResult;
//    currentResult += userInputValue()
//    outputResult(currentResult,calcDescription)

//    const log = {
//     operation:"ADD",
//     prevResult:initialRes,
//     result:currentResult,
//     number:userInputValue()
//    }

//    logEntry.push(log)
// }

// function sub() {
//   const calcDescription = `${currentResult} - ${userInputValue()}`;
//   const initialRes = currentResult;
//   currentResult -= userInputValue()
//   outputResult(currentResult,calcDescription)

//   const log = {
//    operation:"SUB",
//    prevResult:initialRes,
//    result:currentResult,
//    number:userInputValue()
//   }

//   logEntry.push(log)
// }

// function multiply() {
//   const calcDescription = `${currentResult} x ${userInputValue()}`;
//   const initialRes = currentResult;
//   currentResult *= userInputValue()
//   outputResult(currentResult,calcDescription)

//   const log = {
//    operation:"SUB",
//    prevResult:initialRes,
//    result:currentResult,
//    number:userInputValue()
//   }

//   logEntry.push(log)
// }

// function divide() {
//   const calcDescription = `${currentResult} / ${userInputValue()}`;
//   const initialRes = currentResult;
//   currentResult /= userInputValue()
//   outputResult(currentResult,calcDescription)

//   const log = {
//    operation:"SUB",
//    prevResult:initialRes,
//    result:currentResult,
//    number:userInputValue()
//   }

//   logEntry.push(log)
// }

const obj = {
  name:"Deepak",
  age:23,
  getname() {
    console.log(this.age)
  }
}

function demo() {
  console.log(this.name)
}

demo.call(obj)



addBtn.addEventListener("click",function() {
  calculate("ADD")
})
subtractBtn.addEventListener("click",function() {
  calculate("SUB")
})
multiplyBtn.addEventListener("click",function() {
  calculate("MUL")
})
divideBtn.addEventListener("click",function() {
  calculate("DIV")
})