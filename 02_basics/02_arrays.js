const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["flash", "batman", "shazam"]

// marvel_heros.push(dc_heros);

// console.log(marvel_heros);

// console.log(marvel_heros[3][1]);


// const all_heros = marvel_heros.concat(dc_heros)
// console.log(all_heros);

const all_heros = [...marvel_heros, ...dc_heros]

console.log(all_heros);

const another_array = [1, 3, 4, [2, 3, 4, [5, 6, 7, 6, [4, 5, 3, 4, 5]]]]
const real_another_array = another_array.flat(Infinity)

console.log(real_another_array);





const obj = {
    name: "aquif",
    age: 45
}


console.log(Array.isArray("hitesh"))
console.log(Array.from("hitesh"))
console.log(Array.from(obj.name))


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));







