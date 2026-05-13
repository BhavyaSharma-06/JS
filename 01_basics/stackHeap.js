/*  Stack VS Heap memory in JS*/

// STACK

let a = 10;
let b = a;

b = 20;

console.log(a);
console.log(b);

/* Why? Because b got its own separate copy. 
Visual understanding
b → 10
a → 10

Then:

b = 20

Now:

a → 10
b → 20

They are independent. This is generally pass by value */

// HEAP

let user1 = {
    name : "Bhavi"
}

let user2 = user1;
user2.name = "Ansh"

console.log(user1)
console.log(user2)

/* 
Why did both change?

Because both point to SAME object in heap.

Visual:

Stack:
user2 → 101
user1 → 101

Heap:
101 → { name: "Alex" }

Both variables are connected to same memory location.

So changing one changes the original object too.
*/


