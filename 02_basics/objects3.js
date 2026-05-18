// Object destructuring

const course = {
    coursename : "JS one shot",
    courseinstructor : "hitesh",
    coursefee : "999"
}

// How to destructure
const {courseinstructor : instruct} = course;
console.log(instruct);
