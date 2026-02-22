// for of loop

["", "", ""]
[{}, {}, {}]



const arr = [1, 2, 3, 4, 5]

for (const val of arr) {
    console.log(val);
}


const greetings = "hello wolrd!"

for (const greet of greetings) {
    console.log(`each char is ${greet} with index of ${greetings.indexOf(greet)}`);
}

//Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('FR', "United States of France")
map.set('USA', "United States of America")

console.log(map);

for (const [key, value] of map) {
    console.log(key, ":-", value);
    
}

const obj = {
    'game1': "NFC",
    'game2': "bgmi",
    
}

// for (const [key, value] of obj) {
//     console.log(key, ":-", value);
    
// }