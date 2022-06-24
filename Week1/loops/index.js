//while loop
// let i = 0;
// while (i < 10) { // shows 0, then 1, then 2
//     console.log(i);
//     i++; //increment operator
// }
//you can run any code in this section

//do while
// let j = 0;
// do {
//     console.log(j);
//     j++;
// } while (j < 3)


//for loop
// for (let i = 0; i <= 8; i++) {
//     console.log("i is now: ", i)
// }


//for..of
// const iterable = [10, 20, 30];

// for (const value of iterable) {
//     console.log(value)
// }
// const firstName = "Ugonma"

// for (const char of firstName) {
//     console.log("Character is:", char);
// }


//for ... in

const user = {
    name: "Ugo",
    age: 38,
    city: "Lagos"
};

for (const key in user) {
    // console.log(key)

    console.log(`The key is ${key} and the value is ${user [key]}`)
}
//can also be like this