const filmsList = document.getElementById("films-list");
let films = movies.map(element => element.Poster);


// Get link to imdb

let linksToFilms = movies.map(element => ("https://www.imdb.com/title/" + element.imdbID + "/"));


const addMoviesToDom = () => {

    for (let i = 0; i < films.length; i++) {
        let film = films[i];
        let li = document.createElement("li");
        let a = document.createElement("a");
        let img = document.createElement("img");
        img.value = film;
        img.src = film;

        a.href = linksToFilms[i];
        a.target = "_blank";
        li.appendChild(a);
        a.appendChild(img);
        filmsList.appendChild(li);
        li.classList.add("main__list-item")
        img.classList.add("main__list-item__img");
        a.classList.add("main__list-item__a")
    }
}

addMoviesToDom()



// Delete all films from ul

const deleteFilms = function () {
    while (filmsList.firstChild) {
        filmsList.firstChild.remove()
    }
}


// filter latest movies

const newMovies = movies.map(obj =>
    obj.Year >= "2014"
);

const filterLatestMovies = () => {

    if (newMovies.includes(true)) {
        let newMoviesPosters = movies.filter(obj => obj.Year >= "2014").map(element => element.Poster);
        films = newMoviesPosters;

        //console.log(newMoviesPosters);

        let linksToNewFilms = movies.filter(obj => obj.Year >= "2014").map(element => ("https://www.imdb.com/title/" + element.imdbID + "/"));
        linksToFilms = linksToNewFilms;
        addMoviesToDom()
    }
}




// Events on the buttons

const handleOnChangeEvent = event => {
    //console.log(event.target);

    switch (event.target.value) {
        case "x-men":
            // console.log("hey ik ben x-men film")
            filterMovies = movies.filter(element => element.Title.includes("X-Men")).map(element => element.Poster);
            films = filterMovies;
            linksToFilms = movies.filter(element => element.Title.includes("X-Men")).map(element => ("https://www.imdb.com/title/" + element.imdbID + "/"));
            // console.log(filterMovies);
            deleteFilms()
            addMoviesToDom("x-men")

            break;

        case event.target.value = "princess":
            // console.log("hey ik ben princess film")
            filterMovies = movies.filter(element => element.Title.includes("Princess")).map(element => element.Poster);
            films = filterMovies;
            linksToFilms = movies.filter(element => element.Title.includes("Princess")).map(element => ("https://www.imdb.com/title/" + element.imdbID + "/"));
            // console.log(filterMovies);
            deleteFilms()
            addMoviesToDom("princess")

            break;

        case event.target.value = "batman":
            // console.log("hey ik ben batman film")
            filterMovies = movies.filter(element => element.Title.includes("Batman")).map(element => element.Poster);
            films = filterMovies;
            linksToFilms = movies.filter(element => element.Title.includes("Batman")).map(element => ("https://www.imdb.com/title/" + element.imdbID + "/"));
            // console.log(filterMovies);
            deleteFilms()
            addMoviesToDom("batman")

            break;

        case event.target.value = "avengers":
            // console.log("hey ik ben avengers film")
            filterMovies = movies.filter(element => element.Title.includes("Avengers")).map(element => element.Poster);
            films = filterMovies;
            linksToFilms = movies.filter(element => element.Title.includes("Avengers")).map(element => ("https://www.imdb.com/title/" + element.imdbID + "/"));
            // console.log(filterMovies);
            deleteFilms()
            addMoviesToDom("avengers")

            break;

        case event.target.value = "nieuwste-films":
            // console.log("hey ik ben nieuwste films")
            deleteFilms()
            filterLatestMovies()

            break;

        case event.target.value = "all-films":
            // console.log("hey ik ben All films")
            films = movies.map(element => element.Poster);
            linksToFilms = movies.map(element => ("https://www.imdb.com/title/" + element.imdbID + "/"));
            deleteFilms()
            addMoviesToDom("all-films")

            break;


        default:
            //console.log("default")
    }
}



// search films

const searchedFilms = function () {
    let input = document.getElementById("searchbar").value
    input = input.toLowerCase();
    console.log(input)

    const movieTitles = movies.map(element => element.Title.toLowerCase().includes(input));
    console.log(movieTitles)
    if (movieTitles) {
        let moviePosters = movies.filter(element => element.Title.toLowerCase().includes(input)).map(element => element.Poster);
        console.log(moviePosters)
        films = moviePosters;
        linksToFilms = movies.filter(element => element.Title.toLowerCase().includes(input)).map(element => ("https://www.imdb.com/title/" + element.imdbID + "/"));
        deleteFilms()
        addMoviesToDom()

    } else {
        console.log("else is here")
    }
}


// enter Btn

input = document.getElementById("searchbar")
input.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("searchBtn").click();
    }
});