// const tinderUser = new Object() // Singelton object
const tinderUser = {} // non singelton

tinderUser.id = `bhavi_123`
tinderUser.name = `bhavi`
tinderUser.isLoggedIn = false

console.log(tinderUser);

// We can also put an object inside an object
const regularUser = {
    name : `Bhavya`,
    username : {
        fullname :{
            firstname : `Ansh`,
            lastname : `Sharma`
        }
    }
}
console.log(regularUser.username.fullname); //access using chaining method

// How to add two objects 

const obj1 = {1:`a` , 2:`b`}
const obj2 = {3:`c` , 4:`d`}

obj3 = {...obj1, ...obj2} // Access using spread operator
console.log(obj3);

 result = Object.assign({} , obj1, obj2);   //{target , value}
console.log(result);

// Array of objects

const users = [
    {
        id : 1,
        email : `anshbhavi@gmail.com`
    },
     {
        id : 2,
        email : `ansh@gmail.com`
    },
     {
        id : 3,
        email : `bhavi@gmail.com`
    }
]

console.log(users[1].email);

// If you want all values then 
console.log(tinderUser);
console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

//To check if anything is present or not then we use hasOwnProperty
console.log(tinderUser.hasOwnProperty(`name`)); 










