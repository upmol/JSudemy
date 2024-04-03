const numberOfFilms = +prompt('How many movies do you already watched?', 'answer');

const personalMovieDB = {
    count: numberOfFilms,
    movie: {
        
    },
    actors: {

    },
    genres: [],
    private: false
};

const lastFilm = prompt('What movie did you watch last?', ''),
    pointOfFilm = prompt('How much do you rate this movie?', ''),
    lastFilmSecond = prompt('What movie did you watch last?', ''),
    pointOfFilmSecond = prompt('How much do you rate this movie?', '');

    personalMovieDB.movie[lastFilm] = pointOfFilm;
    personalMovieDB.movie[lastFilmSecond] = pointOfFilmSecond;
    
    console.log(personalMovieDB);