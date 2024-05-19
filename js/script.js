'use strict';


document.addEventListener('DOMContentLoaded', () => {
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };
    
const adv = document.querySelectorAll('.promo__adv img'),
            promo = document.querySelector('.promo__bg'),
            genre = promo.querySelector('.promo__genre'),
            moviesList = document.querySelector('.promo__interactive-list'),
            addForm = document.querySelector('form.add'),
            addInput = addForm.querySelector('.adding__input'),
            checkBox = addForm.querySelector('[type = "checkbox"]');
    
    addForm.addEventListener('submit', (event) =>{
        event.preventDefault();

        let newFilm = addInput.value;
        const favorite = checkBox.checked;

        if (newFilm) {
            if(newFilm.length > 21) {
                newFilm = `${newFilm.substring(0, 22)}...`;
            }

            if(favorite) {
                console.log('Add fovorite film')
            }

            movieDB.movies.push(newFilm);
            sortArr(movieDB.movies);
            createMoviesList(movieDB.movies, moviesList);
        }

        event.target.reset(); 
    });

    const deleteAdv = (arr) => {
        arr.forEach((item) => {
            item.remove();
        });
    }


    const makeChanges = () => {
        genre.textContent = 'драма';
    
        promo.style.backgroundImage = "url(../img/bg.jpg)";
    }

   

    const sortArr = (arr) => {
        arr.sort();
    }
    
    
    function createMoviesList(films, parent) {
    parent.innerHTML = "";
    sortArr(films);
    films.forEach((films, i) => {
        parent.innerHTML += `
        <li class="promo__interactive-item">${i + 1} ${films}
        <div class="delete"></div>
        </li>
        `
    });
        document.querySelectorAll('.delete').forEach((btn, i)=>{
            btn.addEventListener('click', ()=>{
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);
                
                createMoviesList(films, parent);
            })
        })
    }

    createMoviesList(movieDB.movies, moviesList);
    makeChanges();
    deleteAdv(adv);
})