'use strict';


const personalMovieDB = {
    count: 0,
    movie: {
        
    },
    actors: {

    },
    genres: [],
    private: false,
    start: function() {
       personalMovieDB.count = +prompt('How many movies do you already watched?', '');
        while(personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('How many movies do you already watched?', '');
        }
    },
    rememberMyFilms: function() {
        for(let i = 0; i < 2; i++) {
            const lastFilm = prompt('What movie did you watch last?', '').trim(),
                pointOfFilm = prompt('How much do you rate this movie?', '');
                if(lastFilm != '' && pointOfFilm != '' && lastFilm != null && pointOfFilm != null  && lastFilm.length < 50) {
                    personalMovieDB.movie[lastFilm] = pointOfFilm;
                    console.log('done');
                }else {
                    console.log('error');
                    i--;
                }
        }
    },
    detectPersonalLevel: function() {
        if(personalMovieDB.count < 10){
            alert('Просмотренно довольно мало фильмов');
        }else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30){
            alert('Вы классический зритель');
        }else if(personalMovieDB.count >= 30){
            alert('Вы киноман');
        }else{
            alert('Произошла ошибка');
        }
    },
    showMyDB: function(hidden) {
        if(!hidden){
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function () {
        personalMovieDB.private = !personalMovieDB.private;
    },
    writeYourGenres: function(){
        for(let i = 1; i < 2; i++){
            let genres = prompt(`Enter your favorite genres`); 
            if(genres == '' || genres == null){
                console.log('You did not enter the data at all');
                i--;
            }else
            personalMovieDB.genres = genres.split(' '); 
        }

        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Favorite ganre ${i + 1} - it's ${item}`)
        })
    }
};


    
    