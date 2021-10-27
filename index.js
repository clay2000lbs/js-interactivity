console.log("hello world")

const message = document.querySelector('#message')

const addMovie = (e) => {

    e.preventDefault();

    let inputField = document.querySelector("input");
    

    let movie = document.createElement('li')  

    let movieTitle = document.createElement('span') 

    movieTitle.textContent = inputField.value;

    movieTitle.addEventListener('clicked', e => {
        crossOffMovie()
    })

    movie.appendChild(movieTitle) 

    let deleteBtn = document.createElement('button')
    deleteBtn.textContent = "X"
    deleteBtn.addEventListener('click', e => {
        deleteMovie()
    })
    movie.appendChild(deleteBtn)

    let unOrederdList = document.querySelector('ul');
    unOrederdList.appendChild(movie);

}


let formField = document.querySelector('form')

formField.addEventListener('submit', addMovie)

let deleteMovie = (e) => {
    e.target.parentNode.remove()
    message.textContent = `Movie deleted!`
}

let crossOffMovie = (e) => {
    e.target.classList.toggle('.checked')
    if (e.target.classList.contains('.checked')) {
        message.textContent = 'Movie watched!' 
    } else {
        message.textContent = 'Movie added back!'
    }
}