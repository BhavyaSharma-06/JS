// object declaration

const mySym = Symbol("key1");

const jsUser = {
    name: "Bhavi",
    age: 20,
    location: "Mohali",

    // Adding symbol as key
    [mySym]: "mykey1"
};

// Accessing normal properties
console.log(jsUser.name);
console.log(jsUser["name"]);

// Accessing symbol property
console.log(jsUser[mySym]);
console.log(typeof mySym);

//if you want to change a value then you can do it like
jsUser.name = `Gunu`;
console.log(jsUser);
// Object.freeze(jsUser);
jsUser.age = `yeesss`;
console.log(jsUser);

jsUser.greetings = function(){
    console.log(`Hello js user`);
}
jsUser.greetingstwo = function(){
    console.log(`hello js user, my name is  ${this.name}`);
    
}

console.log(jsUser.greetings());
console.log(jsUser.greetingstwo());






