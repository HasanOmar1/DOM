// function Phone(serial, color, price){
//     this.serial = serial;
//     this.color = color;
//     this.price = price - 100;
//     this.kind = 'iPhone';
// }

// const phone1 = new Phone(123, 'red', 500)
// const phone2 = new Phone(234, 'black', 700)
// const phone3 = new Phone(345, 'silver', 900)

// console.log(phone1)
// console.log(phone2)
// console.log(phone3)

//## OOP - תכנות מונחה עצמים
// תכנות מונחה עצמים הוא סגנון תכנות מתקדם, שבו התוכנה מחולקת ליחידות הנקראות אובייקטים.


// class User {
//     static counter = 0;

//     constructor(name, email) {
//         this.name = name;
//         this.email = email;
//         User.counter++;
//     }
//     sayHello(){
//         return `Hello ${this.name}`
//     }
//     showEmail(){
//         return `your email is ${this.email}`
//     }
    
//     static countObjects(){
//         return `${this.counter} users`
//     }
// }

// const user1 = new User('Bassam', 'bassam@gmail.com')
// const user2 = new User('Liron', 'liron@gmail.com')
// const user3 = new User('Bassam', 'bassam@gmail.com')
// const user4 = new User('Liron', 'liron@gmail.com')
// const user5 = new User('Liron', 'liron@gmail.com')
// const user6 = new User('Liron', 'liron@gmail.com')
// const user7 = new User('Liron', 'liron@gmail.com')
// // console.log(typeof user1);
// // console.log(user1.sayHello());
// // console.log(user1.showEmail());
// console.log(User.countObjects());

// User.prototype.newGreet = function (){
//     console.log(`greet my new user ${this.name}`)
// }

// user1.newGreet()


// inheritance 

// class User {
//     static counter = 0;
//     constructor(name, email) {
//         this.name = name;
//         this.email = email;
//         User.counter ++;
//     }
//     sayHello(){
//         return `Hello ${this.name}`
//     }
//     showEmail(){
//         return `your email is ${this.email}`
//     }
    
//      writeMsg(){
//         return `message from parent`
//     }

//     static countObjects(){
//                 return `${this.counter} users`
//             }
// }

// class Admin extends User {
//     static countAdmins = 0
//     constructor(name, email, age) {
//         super(name, email)
//         this.age = age;
//         Admin.countAdmins++;
//     }
//     adminMessage(){
//         return `Hello ${this.age} you are admin`
//     }
//     writeMsg(){
//         return `message from child who is the admin`
//     }
//     static countObjects(){
//         return `${this.countAdmins} users`
//     }
// }


// const user1 = new User('Bassam', 'bassam@gmail.com')
// const user2 = new Admin('Liron', 'liron@gmail.com',21)

// console.log(User.countObjects())
// console.log(Admin.countObjects())
// // console.log(user1.adminMessage())


// getters and setters 

// class User {
//     constructor(name, email) {
//         this.name = name;
//         this.email = email;
//     }
//     get sayHello(){
//         return `Hello ${this.name}`
//     }
//     showEmail(){
//         return `your email is ${this.email}`
//     }
//     set changeEmail(newEmail){
//         this.email = newEmail
//     }

// }

// const user1 = new User('Bassam', 'bassam@gmail.com')
// const user2 = new User('Liron', 'liron@gmail.com')


// console.log(user1.changeEmail('BBB@gmail.com')) // a wrong way to manipulate the email

// the right way to change the email
// user1.changeEmail = 'BBB@gmail.com'
// console.log(user1.email);


// encapsulation

// class User {
//     constructor(name) {
//         this.name = name;
//     }

//     #password = 'sdfsj'

//     get sayHello(){
//         if(user.admin === 'admin'){
//             return `Hello ${this.#password}`
//         }
//     }
//     get getPassword(){
//         return `your password is ${this.#password}`
//     }
//     set setPassword(newPassword){
//         this.#password = newPassword
//     }

// }


// const user1 = new User('Bassam', 'bassam@gmail.com')
// const user2 = new User('Liron', 'liron@gmail.com')

// console.log(user1.getPassword);

// user1.setPassword ="newPassword1234"
// user1.setPassword('sdfsdfs')
// console.log(user1.getPassword);