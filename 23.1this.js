// Question 1:
// In your own words what will this point to and why?
// console.log(this)
// (Note this is the global scope)

// this will point to the window keyword and their functionality because its not inside an object


// Question 2:
// a. In your own words what will this point to and why?
// b. How can you fix this code?

const myObj = {
    name: "Timmy",
    greet: () => {
    console.log(`Hello ${this.name}`);
    },
    };
    myObj.greet();

    //a. it will point to this.name inside the window but window does'nt have name property 
    // so we will get hello undefined , because its an arrow function and not a regular function
    //b. to fix it just change the arrow func to regular.


//Question 3:
// In your own words what will this point to and why?

const myFuncDec = function () {
    console.log(this);
    };

    // this wont do anything because the function is not being called.


// Question 4:
// In your own words what will this point to and why?

const myFuncArrow = () => {
    console.log(this);
    };
    myFuncArrow();

     // it will point to the window because using this keyword in global scope refers to the window.

// Question 5:
// a. In your own words, what will this point to and why?
// b. How can you fix this code?

document.querySelector(".element").addEventListener(() => {
    console.log(this);
    });

    //a. first of all , addEventListener takes 2 parameters , so this code wont work.
    //b. to fix the code i have to add a second parameter [type parameter] and then  it will work.
    //this keyword  refers to window keyword