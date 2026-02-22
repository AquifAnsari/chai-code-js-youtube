// immediately invoked function expressions (IIFE)
// to prevent globle variable pollution from var

// var a = 7


// named iffe
(function chai(){
    console.log("DB Connected");
    // console.log(a);
    
})();

// when two iife is written one after another first iffe must end with semicolon ;

// arrow function iife
((name)=>{
    console.log(`hello ${name}`);
    
})("aquif")








// function chaitwo(){
//     // console.log("DB Connected");
//     console.log(a);
    
// }

// chaitwo()