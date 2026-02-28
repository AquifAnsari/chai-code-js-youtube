const promiseOne = new Promise(function (resolve, reject) {
    // DO an async task
    // DB calls, cryptography, network call
    setTimeout(function () {
        console.log('Async task is complete');
        resolve()
    }, 1000)
})

promiseOne.then(function () {
    console.log("Promise consumed");

})

new Promise(function (resolve, reject) {
    setTimeout(() => {
        console.log("Async task 2");
        resolve()
    }, 1000);
}).then(() => {
    console.log("Async 2 resolved");

})

const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve({ username: "chai", email: "chai@gmail.com" })
    }, 1000);
})

promiseThree.then(function (user) {
    console.log(user);

})


const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function (

    ) {
        let erorr = true
        if (!erorr) {
            resolve({ username: "aquif" })
        } else {
            reject(`ERORR : Something went wrong`)
        }
    }, 1000)
})

promiseFour.then((user) => {
    console.log(user);
    return user.username

}).then((username) => {
    console.log(username);

}).catch(function (erorr) {
    console.log(erorr);

}).finally(() => console.log('finally the promise is either resolve or rejected'))



const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let erorr = true
        if (!erorr) {
            resolve({ username: "javascript" })
        } else {
            reject(`ERORR JS : Something went wrong`)
        }
    }, 1000)
})

async function consumePromiseFive() {
    try {
        const response = await promiseFive
        console.log(response)
    } catch (error) {
        console.log(error);

    }
}

consumePromiseFive()

async function getAllUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        console.log(data);

    } catch (error) {
        console.log(error);

    }

}
getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log(error);
    })



