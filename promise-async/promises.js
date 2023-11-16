
// function blockingOperation() {
//     console.log("Start blocking operation");
//     // Simulating a time-consuming task
//     for (let i = 0; i < 500000000; i++) {
//         // Some time-consuming operation
//     }
//     console.log("End blocking operation");
//   }
  
//   console.log("Before blocking operation");
  
//   // Calling the blocking function
//   blockingOperation();
  
//   console.log("manipulate the data");
  

  // =================================================================


//   const myFunc = ()=> {
//     setTimeout(() => {
//         console.log("Timeout function 2 seconds")
//         setTimeout(() => {
//             console.log("second Timeout function 3 seconds")
//             setTimeout(() => {
//                 console.log("third Timeout function 1 seconds")
//             },1000)
//         },3000)
//     }, 2000);
//   }



//   setTimeout(()=>{
//     console.log("Timeout function 2 seconds")

//   }, 2000)

//   setTimeout(()=>{
//     console.log("second Timeout function 1 seconds")

//   },1000)

//   console.log("before timeout function");
//   myFunc()
//   console.log("after timeout function");


//================================================================
// const myFunc1 = (callback)=>{
//       setTimeout(()=>{
//         console.log("Timeout function 2 seconds")
//         callback()
//       }, 2000)
// }


// const myFunc2 = ()=>{
//     setTimeout(()=>{
//       console.log(" second Timeout function 1 seconds")
//       callback()
//     }, 1000)
// }

// myFunc1(()=>{
//     myFunc2();
// })


//================================================================

// const randomPromise = new Promise((resolve, reject)=>{
//     const randomNumber = Math.random()

//     if(randomNumber < 0.5){
//         resolve(randomNumber)
//     } else {
//         reject(randomNumber)
//     }
// })


// randomPromise
// .then((randomNumber)=>{
//     return randomNumber + 1
//     // console.log(`success ${randomNumber} is less than 0.5` ) ;
// }).then((result)=>{
//     console.log(result * 100)
// })
// .catch((randomNumber)=>{
//     console.log(`Error ${randomNumber} is more than 0.5` ) ;
// })


// =================================================================

// const myFunc1 = ()=>{
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             console.log(`First function called`)
//             resolve('first')
//         },1000)
//     })
// }
// const myFunc2 = ()=>{
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             console.log(`Second function called`)
//             reject('second')
//         },1000)
//     })
// }
// const myFunc3 = ()=>{
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             console.log(`third function called`)
//             resolve('third')
//         },1000)
//     })
// }

// myFunc1()
// .then(result =>{
//     return myFunc2(result)
// }).then(result =>{
//     return myFunc3(result)
// }).catch(err=>{
//     console.log(err);
// })


// =================================================================

// promise all

// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('Promise 1 resolved');
//     }, 1000);
//   });
  
//   const promise2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('Promise 2 resolved');
//     }, 1500);
//   });
  
//   const promise3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject('Promise 3 rejected');
//     }, 500);
//   });

//   Promise.all([promise1, promise2, promise3])
//   .then(results =>{
//     console.log(`all promises resolved`, results);
//   }). catch((error)=>{
//     console.log(`at least one promise failed`, error);
//   })



//================================================================



// async await 

// function fetchData() {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
        
//         reject('fetching');
//         console.log("Data fetched!");
//       }, 2000);
//     });
//   }
  
// function processData() {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         console.log("Data processed!");
//         resolve();
//       }, 1000);
//     });
//   }
  
//   function displayData() {
//     console.log("Data displayed!");
//   }


//   async function fetchDataAndDisplay() {
//     try {
//        await fetchData();
//        await processData();
//         displayData();
//     } catch (error) {
//         console.log(error)
//     }
//   }

//   fetchDataAndDisplay()

//   console.log("Fetching data...");