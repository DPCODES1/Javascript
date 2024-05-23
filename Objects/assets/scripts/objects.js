// const age = "Age"

// const obj = {
//     name:"Deepak",
//     [age]:23,
//     occupation:"Developer",
// }

// obj.greet()

const newMovies = []
const addMovieBtn = document.getElementById("add-movie-btn")
const searchMovieBtn = document.getElementById("search-btn")
const renderMovies = () => {
    const moviesUl = document.getElementById("movie-list")
    moviesUl.innerHTML = ""
    let text = ''
    if(newMovies.length == 0) {
        moviesUl.classList.remove("visible")
    } else {
        moviesUl.classList.add("visible")
    }
    for(const data of newMovies) {
        const li = document.createElement("li")

        for(const key in data) {
            if(key != "title" && key!= "id") {
                text = key
            }
        }
        li.innerHTML = `
           <h1>${data.title}</h1><p>${text} : ${data[text]}</p> 
         
        `
        moviesUl.append(li)
    }

   
}
const addMovie = ()=> {
     const title = document.getElementById("title").value
     const extraName = document.getElementById("extra-name").value
     const extraValue = document.getElementById("extra-value").value

     const newMovie = {
        title,
        id:Math.random(),
        [extraName]:extraValue
     }
     newMovies.push(newMovie)
     renderMovies()
}
addMovieBtn.addEventListener("click",addMovie)
