// a class without constructor
class MathHelper {
    //Define methods that this class will have
    add(n1, n2) {
        return n1 + n2
    }
    sub(n1, n2) {
        return n1 - n2
    }
    div(n1, n2) {
        return n1 / n2
    }
}
// const arr = new Array()
// arr.push(20, 30)
// console.log(arr)


const mathHelper = new MathHelper()

let resAdd = mathHelper.add(20, 30)
let resSub = mathHelper.sub(20, 30)
let resDiv = mathHelper.div(20, 30)

console.log(resAdd)
console.log(resSub)
console.log(resDiv)

// function add(n1, n2) {
//     return n1 + n2
// }

// function sub(n1, n2) {
//     return n1 - n2
// }

// function div(n1, n2) {
//     return n1 / n2
// }

// console.log(add(2, 40))
// console.log(sub(50, 40))
// console.log(div(100, 40))




// //A class withou constructor
// class MathHelper {

//     add(num1, num2) {
//         return num1 + num2;
//     }

//     subtract(num1, num2) {
//         return num1 - num2;
//     }

//     multiply(num1, num2) {
//         return num1 * num2;
//     }

//     divide(num1, num2) {
//         return num1 / num2;
//     }

//     modulo(num1, num2) {
//         return num1 % num2;
//     }

//     power(num1, num2) {
//         return num1 ** num2;
//     }
// }

// // Create an instance from the class
// const mathHelper = new MathHelper();

// //use the instance
// console.log(mathHelper.add(2, 3));
// console.log(mathHelper.subtract(2, 3));
// console.log(mathHelper.multiply(2, 3));
// console.log(mathHelper.divide(2, 3));
// console.log(mathHelper.modulo(2, 3));
// console.log(mathHelper.power(2, 3));