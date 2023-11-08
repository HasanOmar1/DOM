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

    let movieId = movies.map(i => i.id)
    let movieTitle = movies.map(t => t.title)
    let movieGenre = movies.map(g => g.genre)
    let movieDirector = movies.map(d => d.director)
    let movieReleaseYears = movies.map(r => r.releaseYear)
    let movieRatings = movies.map(r => r.rating)
    let movieVotes = movies.map(v => v.votes)
    let movieCover = movies.map(c => c.cover)
    let movieAlt = movies.map(a => a.alt)

    
 
    
  function newCard(){
    body = document.querySelector('body')
    card = document.createElement('div')
    title = document.createElement('h2')
    img = document.createElement('img')
    info = document.createElement(`div`)
    genre = document.createElement('p')
    director = document.createElement('p')
    releaseYear = document.createElement('p')
    rating = document.createElement('p')
    votes = document.createElement('p')

    card.className = 'card'
    info.className = `info`
    title.className = 'title'

    
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


  function addMovieCard(id){
    
    newCard()

    title.innerText = movieTitle[id]
    genre.innerText = `Genre : ${movieGenre[id]}`
    director.innerText = `Director:  ${movieDirector[id]}`
    releaseYear.innerText = `Release Year : ${movieReleaseYears[id]}`
    rating.innerText = `Rating : ${movieRatings[id]}`
    votes.innerText = `Votes: ${movieVotes[id]}`
    img.src = movieCover[id]
    img.alt = movieAlt[id]
  }
  
  
  const form = document.querySelector('form')
  const titleInput = document.querySelector('#title')
  const genreInput = document.querySelector('#genre')
  const directorInput = document.querySelector('#director')
  const releaseInput = document.querySelector('#release')
  const ratingInput = document.querySelector('#rating')
  const votesInput = document.querySelector('#votes')
  const sourceInput = document.querySelector('#img-source')
  const altInput = document.querySelector('#img-alt')
  
  
  form.addEventListener('submit' , e => {
    e.preventDefault()
    let obj = {}
    obj.title = titleInput.value
    obj.genre = genreInput.value
    obj.director = directorInput.value
    obj.releaseYear = releaseInput.value
    obj.rating = ratingInput.value
    obj.votes = votesInput.value
    obj.cover = sourceInput.value
    obj.alt = altInput.value
    movies.push(obj)
    
    movieTitle = movies.map(t => t.title)
    movieGenre = movies.map(g => g.genre)
    movieDirector = movies.map(d => d.director)
    movieReleaseYears = movies.map(r => r.releaseYear)
    movieRatings = movies.map(r => r.rating)
    movieVotes = movies.map(v => v.votes)
    movieCover = movies.map(c => c.cover)
    movieAlt = movies.map(a => a.alt)
    
    newCard()
    
    function id(id){
    title.innerText = movieTitle[id]
    genre.innerText = `Genre : ${movieGenre[id]}`
    director.innerText = `Director:  ${movieDirector[id]}`
    releaseYear.innerText = `Release Year : ${movieReleaseYears[id]}`
    rating.innerText = `Rating : ${movieRatings[id]}`
    votes.innerText = `Votes: ${movieVotes[id]}`
    img.src = movieCover[id]
    img.alt = movieAlt[id]
  }
  for(let i = 0 ; i < movieTitle.length ; i++){
    id(i)
  }
  
    console.log(movies)
    
  })
  
  
  for(let i = 0 ; i < movieTitle.length ; i++){
    addMovieCard(i)
  }