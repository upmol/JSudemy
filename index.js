'use strict';

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('How many movies do you already watched?', '');
    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('How many movies do you already watched?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movie: {
        
    },
    actors: {

    },
    genres: [],
    private: false
};

function rememberMyFilms() {
    for(let i = 0; i < 2; i++) {
        const lastFilm = prompt('What movie did you watch last?', ''),
            pointOfFilm = prompt('How much do you rate this movie?', '');
            if(lastFilm != '' && pointOfFilm != '' && lastFilm != null && pointOfFilm != null  && lastFilm.length < 50) {
                personalMovieDB.movie[lastFilm] = pointOfFilm;
                console.log('done');
            }else {
                console.log('error');
                i--;
            }
    }
}

rememberMyFilms();
    

    function detectPersonalLevel() {
        if(personalMovieDB.count < 10){
            alert('Просмотренно довольно мало фильмов');
        }else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30){
            alert('Вы классический зритель');
        }else if(personalMovieDB.count >= 30){
            alert('Вы киноман');
        }else{
            alert('Произошла ошибка');
        }
    }

    detectPersonalLevel();
    
    function showMyDB (hidden) {
        if(!hidden){
            console.log(personalMovieDB);
        }
    }

    showMyDB(personalMovieDB.private);

    function writeYourGenres() {
        for(let i = 1; i <= 3; i++){
            personalMovieDB.genres[i - 1] = prompt(`Your favorite genres number ${i}`); 
        }
    }

    writeYourGenres();

    console.log(personalMovieDB);

    
    