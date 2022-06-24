const usersDatabase = {
    "AdaOhafia1": {
        firstName: "Ugonma",
        lastName: "Chiori",
        email: "ugochiori@gmail.com",
        accountActivated: true,
        password: "adaohafia1"

    },

    "ekanma2000": {
        firstName: "Ekanma",
        lastName: "Ikutenyin",
        email: "eka4luvvv@gmail.com",
        accountActivated: true,
        password: "ekaekaowo"

    },
    "colepeter": {
        firstName: "Peter",
        lastName: "Cole",
        email: "colepeterjr@gmail.com",
        accountActivated: false,
        password: "mummymo"
    }
}


function displayUserDetails() {

    //enter username

    let username = prompt("Enter your username")

    while (validateUsername(username) == false) {
        username = prompt("Username not valid. Please, enter a valid username")
    }
    if (username == null) {
        return
    }


    //enter password

    let password = prompt("Enter your password")

    while (validatePassword(password) == false) {
        password = prompt("password is not valid. Please, enter a valid password")
    }

    if (password == null) {
        "return"
    }

    //confirm password

    let passwordConfirm = prompt("Confirm your password")

    while (passwordConfirm !== password) {
        passwordConfirm = prompt("Password incorrect. Please try again.")
    }
    if (passwordConfirm == null) { "return" }



    //check if user database contains the username

    const user = usersDatabase[username]
    if (user == undefined) {
        alert("user not found. Please register")
        return
    }


    alert(`User Found with the following details:
First Name: ${user.firstName}
Last Name: ${user.lastName}
email: ${user.email}
Account Activated: ${user.accountActivated}
`)
    console.log(username, password, passwordConfirm)

}

displayUserDetails() //CANCEL TAKES US BACK
alert("Successful!!!  You have come to the end of this program! ByeBye")




function validateUsername(username) {
    if (username == null) { return true }

    if (username.length > 10) {
        return false
    } else {
        return true
    }
}

function validatePassword(password) {
    if (password == null) { return true }

    if (password.length < 6) {
        return false
    } else {
        return true
    }
}