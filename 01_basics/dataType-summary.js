//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n


// reference (Non-primitive)

// arrays, objects, function

const heros = ["shaktiman", "nagraj", "doga"]

let obj = {
    name: "aquif",
    age: 19
}


const myFunction = function () {
    console.log('hello world');

}

console.log(typeof (anotherId));

// stack(primitive), heap(non-primitive)


// let myYoutubename = "mohdAquifAnsari"

// let anothername = myYoutubename
// anothername = "mohdaquif"

// console.log(anothername);
// console.log(myYoutubename);

let userOne = {
    email: "user@gmail.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "mohdaquif@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);



