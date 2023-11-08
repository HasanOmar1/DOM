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

    const movieTitle = movies.map(t => t.title)
    const movieGenre = movies.map(t => t.genre)
    const movieDirector = movies.map(t => t.director)
    const movieReleaseYears = movies.map(t => t.releaseYear)
    const movieRatings = movies.map(t => t.rating)
    const movieVotes = movies.map(t => t.votes)

 
    let title = document.querySelector('h2')
    let genre = document.querySelector('#genre')
    let director = document.querySelector('#director')
    let releaseYear = document.querySelector('#release-year')
    let rating = document.querySelector('#rating')
    let votes = document.querySelector('#votes')


    title.innerText = movieTitle[0]
    genre.innerText = movieGenre[0]
    director.innerText = movieDirector[0]
    releaseYear.innerText = movieReleaseYears[0]
    rating.innerText = movieRatings[0]
    votes.innerText = movieVotes[0]
  