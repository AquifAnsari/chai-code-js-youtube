


// function sayMyName(a) {
//     console.log(a);
//     console.log("q");
//     console.log("u");
//     console.log("i");
//     console.log("f");
// }

// sayMyName(3)


// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);

// }

// const result = addTwoNumbers(1,4)
// console.log("result: ",result);




function addTwoNumbers(number1, number2) {

    // let result = number1 + number2
    // return result
    return number1 + number2
}

// addTwoNumbers(1,2)


function loginUserMessage(userName = "sam") {
    if (userName === undefined) {
        console.log('please enter a username');
        return
    }
    return `${userName} just logged in`
}

// console.log(loginUserMessage("Aquif"))
// console.log(loginUserMessage())



function calculateCartPrice(num2, num3, ...num1) {
    return num1
}

console.log(calculateCartPrice(200, 300, 400, 500, 600))


const user = {
    username: "aquif",
    price: 500,

}

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);

}

// handleObject(user)
handleObject({
    username: "aquif",
    price: 300,
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray) {
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));

