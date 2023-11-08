let movies = [
    {
      id: 1,
      title: "The Shawshank Redemption",
      genre: "Drama",
      director: "Frank Darabont",
      releaseYear: 1994,
      rating: 9.3,
      votes: 2345890,
      cover: "https://m.media-amazon.com/images/I/51rXi2SXCXL._AC_UF894,1000_QL80_.jpg",
      alt: "The Shawshank Redemption (Movie Cover)"
    },
    {
      id: 2,
      title: "The Godfather",
      genre: "Crime, Drama",
      director: "Francis Ford Coppola",
      releaseYear: 1972,
      rating: 9.2,
      votes: 1620360,
      cover: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
      alt: "The Godfather (Movie Cover)"
    
    },
    {
      id: 3,
      title: "The Godfather: Part II",
      genre: "Crime, Drama",
      director: "Francis Ford Coppola",
      releaseYear: 1974,
      rating: 9.0,
      votes: 1133175,
      cover: "https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
      alt: "The Godfather: Part II (Movie Cover)"
    },
    {
      id: 4,
      title: "The Dark Knight",
      genre: "Action, Crime, Drama",
      director: "Christopher Nolan",
      releaseYear: 2008,
      rating: 9.0,
      votes: 2303232,
      cover: "https://musicart.xboxlive.com/7/abb02f00-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080",
      alt: "The Dark Knight (Movie Cover)"
    },
    {
      id: 5,
      title: "12 Angry Men",
      genre: "Crime, Drama",
      director: "Sidney Lumet",
      releaseYear: 1957,
      rating: 9.0,
      votes: 689845,
      cover: "https://ih1.redbubble.net/image.1856219220.0238/flat,750x,075,f-pad,750x1000,f8f8f8.jpg",
      alt: "12 Angry Men (Movie Cover)"
    },
  ];

    const movieTitle = movies.map(t => t.title)
    const movieGenre = movies.map(g => g.genre)
    const movieDirector = movies.map(d => d.director)
    const movieReleaseYears = movies.map(r => r.releaseYear)
    const movieRatings = movies.map(r => r.rating)
    const movieVotes = movies.map(v => v.votes)
    const movieCover = movies.map(c => c.cover)
    const movieAlt = movies.map(a => a.alt)

 
    // let title = document.querySelector('h2')
    // let genre = document.querySelector('#genre')
    // let director = document.querySelector('#director')
    // let releaseYear = document.querySelector('#release-year')
    // let rating = document.querySelector('#rating')
    // let votes = document.querySelector('#votes')
    // let cover = document.querySelector('img')

    
    
    // function changeMovie(id){
      // title.innerText = movieTitle[id]
    // genre.innerText = movieGenre[id]
    // director.innerText = movieDirector[id]
    // releaseYear.innerText = movieReleaseYears[id]
    // rating.innerText = movieRatings[id]
    // votes.innerText = movieVotes[id]
    // cover.src = movieCover[id]
    // cover.alt = movieAlt[id]
    // }
    // changeMovie(0)
    



  function addMovieCard(id){
    
    let body = document.querySelector('body')
    let card = document.createElement('div')
    let title = document.createElement('h2')
    let img = document.createElement('img')
    let info = document.createElement(`div`)
    let genre = document.createElement('p')
    let director = document.createElement('p')
    let releaseYear = document.createElement('p')
    let rating = document.createElement('p')
    let votes = document.createElement('p')

    card.className = 'card'
    info.className = `info`
    title.className = 'title'
    
    title.innerText = movieTitle[id]
    genre.innerText = `Genre : ${movieGenre[id]}`
    director.innerText = `Director:  ${movieDirector[id]}`
    releaseYear.innerText = `Release Year : ${movieReleaseYears[id]}`
    rating.innerText = `Rating : ${movieRatings[id]}`
    votes.innerText = `Votes: ${movieVotes[id]}`
    img.src = movieCover[id]
    img.alt = movieAlt[id]


    body.appendChild(card)
    card.appendChild(title)
    card.appendChild(img)
    card.appendChild(info)
    info.appendChild(genre)
    info.appendChild(director)
    info.appendChild(releaseYear)
    info.appendChild(rating)
    info.appendChild(votes)

  }
    
  for(let i = 0 ; i < movieTitle.length ; i++){
    addMovieCard(i)
  }
