//filter method
let arr = [10, 20, -5, 100 , 200 , 93]
Array.prototype.myFilter = function(callback){
    let newArray = [];
  
    for(let i=0;i<this.length;i++){
        if(callback(this[i])===true){
            newArray.push(this[i]);
        }
    }
    return newArray;
}

let filteredArr = arr.myFilter(function(num){
    return num < 100
})

console.log(filteredArr)


//find method

let arr2 = ["Bill", "Russel", "John", "Tom", "Eduard", "Alien", "Till"];
Array.prototype.myFind = function (callback) {
  for (let i = 0; i < this.length; i++) {
    if ( true == callback(this[i])) {
      return this[i]
    }
  }
};
let containsT = arr2.myFind((element) => element[0] === "T");
console.log(containsT)


// reduce method


Array.prototype.myReduce = function(callback){
    let a = 0;                            
    for(let i = 0; i < this.length; i++){
        callback(a = a+this[i])
    }
    return a;                          
}

let arr3 = [3,5,5]
let result = arr3.myReduce((acc,item) => acc + item)
console.log(result)