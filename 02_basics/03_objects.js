// object literals

const mySymb = Symbol("key1")

const jsUser = {
    name: "aquif",
    "full name": "mohd aquif",
    [mySymb]: "mykey1",
    age: 19,
    location: "deoband",
    email: "aquif@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["monday", "saturday"]



}

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
// console.log(typeof(jsUser[mySymb]));


jsUser.email = "aquif@gpt.com"
console.log(jsUser.email);
// Object.freeze(jsUser)
jsUser.email = "aquif@chatgpt.com"
console.log(jsUser);


jsUser.greetings = function () {
    console.log('hello world')
    // BY DEFAULT RETURN UNDEFINED
}

console.log(jsUser.greetings());
console.log(jsUser);



