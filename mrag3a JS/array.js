let movies = [
    {
      id: 1,
      title: "The Shawshank Redemption",
      genre: "Drama",
      director: "Frank Darabont",
      releaseYear: 1994,
      rating: 9.3,
      votes: 2345890,
    },
    {
      id: 2,
      title: "The Godfather",
      genre: "Crime, Drama",
      director: "Francis Ford Coppola",
      releaseYear: 1972,
      rating: 9.2,
      votes: 1620360,
    },
    {
      id: 3,
      title: "The Godfather: Part II",
      genre: "Crime, Drama",
      director: "Francis Ford Coppola",
      releaseYear: 1974,
      rating: 9.0,
      votes: 1133175,
    },
    {
      id: 4,
      title: "The Dark Knight",
      genre: "Action, Crime, Drama",
      director: "Christopher Nolan",
      releaseYear: 2008,
      rating: 9.0,
      votes: 2303232,
    },
    {
      id: 5,
      title: "12 Angry Men",
      genre: "Crime, Drama",
      director: "Sidney Lumet",
      releaseYear: 1957,
      rating: 9.0,
      votes: 689845,
    },
  ];



//1
// Movie Initials: Create a function,  getMovieInitials(title) , that takes a movie title and returns its initials.
// Input: "The Dark Knight"
// Output: "TDK


 function getMovieInitials(title){
     const initials = title.split(' ').map(word => word.charAt(0)).join('').toUpperCase()
     return initials
     

 }
    
//  console.log(getMovieInitials(`The Dark Knight`))


 
//2. Genre List: Implement a function,  splitGenres(genres) , that takes a string of genres separated by commas and
// converts it into an array of individual genres.
// Input: "Action, Adventure, Sci-Fi"
// Output: ["Action", "Adventure", "Sci-Fi"]

function splitGenres(genres){
let array = genres.split(', ')
return array
}

// console.log(splitGenres(`Action, Adventure, Sci-Fi`))




// 3. Arrow Functions with Multiple Operations: Given a function  getTotalMovieLength  that calculates the total
// length of all movies and returns a string, convert it into an arrow function.

function getTotalMovieLength1(movies) {
  let totalLength = 0;
  for (let i = 0; i < movies.length; i++) {
    totalLength += movies[i].length;
  }
  return 'Total movie length is ' + totalLength + ' minutes';
}


const getTotalMovieLength = movies => {
    let totalLength = 0;
    for(let i = 0 ; i< movies.length ; i++){
        totalLength += movies[i].length
    }
    return 'Total movie length is ' + totalLength + ' minutes';
}



//Array Methods

//1- Display Movie Titles: Given an array of movie objects, return a new array that contains only the titles of each movie.
// Example: Given the input data from above, the function should return: ["The Shawshank Redemption", "The
// Godfather", "The Godfather: Part II", "The Dark Knight", "12 Angry Men"]

function movieTitles(){
let titles = movies.map(t => {
   return t.title
})
return titles
}

// console.log(movieTitles())



// 2. Highly Rated Movies: Given an array of movie objects and a minimum rating value, return a new array
// containing only movies with a rating equal to or greater than the provided value.
// Example: Given the input data and a rating of 9.1, the function should return an array containing only the
// objects for "The Shawshank Redemption" and "The Godfather."

function rating(rate){

let higherRating = movies.filter(t => {
    if(t.rating >= rate){
        return t.title
    }
})

return higherRating
    
}

// console.log(rating(9.1))




// Average Movie Rating: Calculate and return the average movie rating from an array of movie objects.
// Example: Given the input data, the function should return approximately 9.1.

function ratingAverage(){
let average = movies.map(r => {
    return r.rating
    }) 
    
    return average.reduce((total,curr) => {
        return total+curr / movies.length
    } ,0)
}

// console.log(ratingAverage())







// Sort Movies by Votes: Given an array of movie objects, return a new array sorted by the number of votes in
// descending order.
// Example: Given the input data, the first movie in the returned array should be "The Shawshank Redemption,"
// and the last should be "12 Angry Men".

function votes(){

    let sorted =  movies.sort((a,b) => {
        return b.votes-a.votes
    })

    return sorted
}

// console.log(votes())





// objects

// Exercise 1: Creating the Movie Database
// 1. Define an object named  movieDatabase  that will store our movies and their ratings.
// 2. The  movieDatabase  object should have a  movies  property that is initialized as an empty array. Each movie will
// be an object stored in this array, with properties: title (a string), ratings (an array of numbers), and averageRating
// (a number).
// 3. Add a method named  addMovie  to the  movieDatabase  object. This method should take a movie title as a
// parameter and create a new movie object with the given title, an empty ratings array, and an averageRating of 0.
// The new movie should then be added to the  movies  array.
// 4. Add a method named  removeMovie  to  movieDatabase . This method should take a movie title as a parameter and
// remove the corresponding movie object from the  movies  array.

let movieDataBase = {
    movies: [
       
       
    ],
  
    
    addMovie(title){
        let obj = {};
        obj.title = title;
        obj.ratings = []
        obj.averageRating = 0
        this.movies.push(obj)

        //or

        // this.movies.push({
        //   title:title, // or only title because title = title
        //   ratings:[],
        //   averageRating:0
        // })

        
    },
    
    removeMovie(title){
      let movie = movieDataBase.movies.find(t => t.title === title)
      if(movie){
       let index = movieDataBase.movies.findIndex(t => t.title === title)
       movieDataBase.movies.splice(index , 1)
      }
      

      //or

      // this.movies = this.movies.filter(movie => movie.title !== title)
      
    },

  // Exercise 2: Adding and Removing Ratings
  // 1. Add a method named  addRating  to  movieDatabase . This method should take a movie title and a rating as
  // parameters. It should find the movie with the given title in the  movies  array and add the rating to its ratings
  // array.
  // 2. Add a method named  removeRating  to  movieDatabase . This method should take a movie title and a rating as
  // parameters. It should find the movie with the given title in the  movies  array and remove the given rating from
  // its ratings array.
    
    addRating(title , rating){
      let movie = movieDataBase.movies.find(t =>  t.title === title)
        if(movie){
        movie.ratings.push(rating)
      }
      
    },

    removeRating(title , rating){
      let movie = movieDataBase.movies.find(t => t.title === title)
      if(movie){
        movie.ratings = movie.ratings.filter(r => r !== rating)
      }
    },
    
    //this function is extra and is not completed [ not dynamic]
    avgRating(title){
      let movie = movieDataBase.movies.find(t => t.title === title)
      if(movie){
        let avgRate = movie.ratings.reduce((total , curr) => {
          return total + curr / movie.ratings.length
        } , 0)
        let newAvg = movie.averageRating + avgRate
        movie.averageRating = newAvg
        return avgRate
      
        
      }
      return movie

    },
 

  //Exercise 3: Searching Movies
  // 1. Add a method named  searchMovie  to  movieDatabase . This method should take a string as a parameter and
  // return an array of all movies whose title contains that string (ignoring case).
  searchMovie(str){
    let movie = movieDataBase.movies.filter(t => t.title.toLowerCase().includes(str.toLowerCase()))
    if(movie){
      return movie
    }
   return;

   // or

  //  let lowerCase = str.toLowerCase()
  //  return this.movies.filter(m => m.title.toLowerCase().includes(lowerCase))
  },

 

}

movieDataBase.addMovie('Batman')
movieDataBase.addMovie('Lord of The Rings')
movieDataBase.addMovie('Fast 5')

movieDataBase.removeMovie('Lord of The Rings')

movieDataBase.addRating(`Batman` , 11)
movieDataBase.addRating(`Batman` , 5)
movieDataBase.addRating(`Fast 5` , 8)
movieDataBase.addRating(`Fast 5` , 6)
movieDataBase.addRating(`Fast 5` , 2)

movieDataBase.removeRating(`Batman` , 11)
movieDataBase.removeRating(`Fast 5` , 6)

// avgRating function is extra
movieDataBase.avgRating(`Batman`)
movieDataBase.avgRating(`Fast 5`)

console.log(movieDataBase.searchMovie(`A`))
// console.log(movieDataBase.movies)























// Exercise 2: Adding and Removing Ratings
// 1. Add a method named  addRating  to  movieDatabase . This method should take a movie title and a rating as
// parameters. It should find the movie with the given title in the  movies  array and add the rating to its ratings
// array.
// 2. Add a method named  removeRating  to  movieDatabase . This method should take a movie title and a rating as
// parameters. It should find the movie with the given title in the  movies  array and remove the given rating from
// its ratings array.