const addMoviebtn = document.querySelector("header button");
const backdrop = document.getElementById("backdrop");
const modal = document.querySelector("#add-modal");
const cancelBtn = modal.querySelector(".modal__actions").children[0];
const addBtn = modal.querySelector(".modal__actions").children[1];
const moviesul = document.getElementById("movie-list")
const movies = [];
const elementEle = document.querySelector("#delete-modal")
function addMovieModalHandler() {
  backdrop.style.display = "block";
  modal.style.display = "block";
}

function deleteHandler(id) {
    let idx = 0
    for(const movie of movies) {
      if(movie.id == id) {
        break
      }
      idx++
    }
    
    movies.splice(idx,1)
    moviesul.children[idx].remove() 
    closeDeleteModal()
}

function deleteUi(id) {
  
  const yesEle = document.getElementById("yes")
  const noele = document.getElementById("cancel")
  elementEle.style.display = "block"
  backdrop.style.display = "block"
  console.log(yesEle)
  yesEle.addEventListener("click",()=> {
    deleteHandler(id)
  })

  noele.addEventListener("click",()=> {
    closeDeleteModal()
  })
}

function closeDeleteModal() {
  elementEle.style.display = "none"
  backdrop.style.display = "none"
}

function updateUi(movie) {
    const newLi = document.createElement("li")
    newLi.innerHTML = `
       <div class="movie-element__image">
         <img src="${movie.imageurl}" alt="image">
       </div>

       <div class="movie-element_info">
         <h2>${movie.movieName}</h2><p>${movie.rating}/5</p>
       </div>
    `
    newLi.addEventListener("click",()=> {
      deleteUi(movie.id)
    })
    newLi.className = "movie-element"
    moviesul.append(newLi)
}


function addMovie() {
  const name = document.getElementById("title");
  const url = document.getElementById("image-url");
  const rating = document.getElementById("rating");
  
  function clearInput() {
      name.value = ""
      url.value = ""
      rating.value = ""
  }

  if (
    name.value.trim().length == 0 ||
    url.value.trim().length == 0 ||
    rating.value.trim().length == 0 ||
    parseInt(rating.value) < 0 ||
    parseInt(rating.value) > 5
  ) {
    alert("Please Input a value");
    return;
  }
  const newMovie = {
    movieName: name.value,
    imageurl: url.value,
    rating:rating.value,
    id:Math.random().toString()
  }
  movies.push(newMovie);
  
  clearInput()
  updateUi(newMovie)
  closeHandler()
}

function closeHandler() {
  backdrop.style.display = "none";
  modal.style.display = "none";
}
console.log(backdrop, cancelBtn);
addMoviebtn.addEventListener("click", addMovieModalHandler);

backdrop.addEventListener("click", () => {
  console.log("Hello");
});

addBtn.addEventListener("click", addMovie);
cancelBtn.addEventListener("click", closeHandler);
