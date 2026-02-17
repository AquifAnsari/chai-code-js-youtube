// const tinder = new Object()
const tinder = {}

tinder.id = "123abc"
tinder.name = "aquif"
tinder.isLoggedIn = false

// console.log(tinder);

const reguUser = {
    email: "some@gmail.com",
    fullName: {
        userName: {
            FirstName: "aquif",
            lastName: "ansari"

        }
    }
}

console.log(reguUser.fullName.userName.FirstName)

const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "a", 4: "b" }
const obj5 = { 5: "a", 6: "b" }

// const obj3 = {obj1, obj2}

// const obj3 = Object.assign({}, obj1, obj2, obj5)

const obj3 = { ...obj1, ...obj2, ...obj5 }

// console.log(obj3);



const course = {
    coursename: "js hindi",
    prince: 9999,
    courseInstructor: "hitesh"

}

course.courseInstructor

const { courseInstructor: ins } = course

// console.log(courseInstructor);
console.log(ins);


const navbar = () => {

}



