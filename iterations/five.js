const coding = ["js", "ruby", "python", "java", "cpp"]

// 1st methos
// coding.forEach( function (item) {
//     console.log(item);
    
// } )


// 2nd method
// coding.forEach((val)=>{
//     console.log(val);
    
// })


//3rd method
// function printMe(item){
//     console.log(item);
    
// }
// coding.forEach(printMe)




// coding.forEach((item, index, arr)=>{
// console.log(item, index, arr);

// })

const myCoding = [
    {
        languageName: "javascript",
        languagefileName: "js"
    },
    {
        languageName: "java",
        languagefileName: "java"
    },
    {
        languageName: "python",
        languagefileName: "py"
    }
]


myCoding.forEach((item)=>{
    console.log(item.languageName);
    
})