// function sum() {
//     let result = 20 + 30
//     console.log(`the result is ${result}`)
// }
// sum()


let count = 0

// //function without parameters
// function addToCount() {
//     // let localCount = 1

//     count = count + 1 //adding to the global variable count
//         // localCount = localCount + 1

//     console.log("Count is: ", count)
//         // console.log("Local Count is: ", localCount)

// }

// addToCount()
// addToCount()




//function with parameter
// function displayName(firstName, lastName, age, height) {
//     alert(firstName + ' ' + lastName + ' ' + age, ' ' + height)
// }


// displayName("Ugo", "Chiori", "38", "5ft1")
// displayName("Dawn", "Johnson", "25", "5ft2")




// //function with returns
// function getFullName(firstName = "", lastName = "") {
//     const fullName = firstName + " " + lastName
//     return fullName
// }

// let fullname1 = getFullName("Ugo", "Chiori")
// let fullname2 = getFullName("Dawn", "Johnson")
// alert(fullname1)
// alert(fullname2)
// function performMathOperation(number1, number2, operationType) {
//     if (operationType == "add") {
//         const result = number1 + number2
//         return result
//     } else if (operationType == "sub") {
//         const result = number1 - number2
//         return result
//     }

// }

// const diffResult = performMathOperation(50, 12, "sub")
// console.log(diffResult)



// //function expression
// const sayHello = function () {
//     console.log("Hello World")
// }

// sayHello()





// //callback functions
// function displayUser(displayType, showFullName, showUserName) {
//     if (displayType == "full") {
//         showFullName()
//     } else {
//         showUserName()
//     }
// }

// function showFullName() { alert("John Doe") }
// function showUserName() { alert("JohnDoe234") }

// displayUser("full", showFullName, showUserName)



// //Arrow functions
// let sum = (a, b) => a + b;
// let sayHelloWorld = () => alert("Hello World!");