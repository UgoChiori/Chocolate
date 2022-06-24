//Numbers
let size_in_meters = 20
let size_in_inches = 2.1024
let maxSize = Infinity
let minSize = -Infinity
let not_a_number = NaN

let sum = 20 + 23.1;
let difference = 20 - 10;
let multiplication_result = 20 * 10;
let division_result = 20 / 2;



//BigInt
let very_big_number = 872765678901234567890123567890134567890,
    n;

let another_big_number = BigInt(872765678901234567890123567890134567890)


//Strings
let name = "Ayodeji Falz" //double quotes
let name2 = 'Ayodeji Remi' //single quotes
let name3 = `Ayodeji Azeez` //backtick

let firstName = 'Ayodeji'
let lastName = 'Azeez'
let fullName = `Mr ${firstName} ${lastName}`


let message = "Hello my friends\n My name is Ugo\n I am a software engineer(Front End and CloudComputing)"

alert(message.toUpperCase())
    // 'HELLO MY FRIENDS\n MY NAME IS JOHNSON\n I AM A SOFTWARE ENGINEER'
    // console.log(message.startsWith("Hello"))

// console.log(message.indexOf("name"))

// console.log("\u{1F60D}")



//Boolean
let isBigSize = true //Yes, the size is big
let sizeIsSmall = false //No, the size is not small

//Null type
let size = null
let num = null

//undefined type
let weight; //The variable size is undefined by default
let age = undefined //This can be done explicitly as well (Not recommended)









//Objects
let user1 = {} // Recommended way
let user2 = new Object()


// user1["name"] = "Ugo"
// user1["age"] = 38
// user1["username"] = "adaohafia1"
// user1["email verified"] = true
// user1["profile_settings"] = { theme: "dark", font_size: 20, show_my_profile_picture: true }


// console.log(user1)

// let user3 = {
//     name: "John Doe",
//     age: 20,
//     weight: 20.3,
//     "verifiedUser": true
// }

// console.log(user3["profile settings"]) //square bracket notation
// console.log(user3.age) //Dot notation

// //update a value
// user3["name"] = "Ada Chiori"
// user3.weight = 80
// console.log(user3)