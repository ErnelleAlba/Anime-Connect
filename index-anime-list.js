// HEADER ON SCROLL SCRIPT

document.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  if (window.scrollY > 0) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

const APIURL = "https://api.jikan.moe/v4/anime";
const SEARCHAPI = "https://api.jikan.moe/v4/anime?q=";

const main = document.getElementById("content");
const form = document.getElementById("form");
const search = document.getElementById("search");
const result = document.getElementById("result");

getMovies(APIURL);

async function getMovies(url) {
  const resp = await fetch(url);
  const respData = await resp.json();
  showMovies(respData.data);
}

function showMovies(movies) {
  const movieEl = document.createElement("div");
  main.innerHTML = "";
  result.innerHTML = "";

  movies.forEach((movie) => {
    const movieEl = document.createElement("div");
    movieEl.classList.add("movie");

    movieEl.innerHTML = `<div class="card">
		  <img src="${movie.images.jpg.image_url}" alt="" class="card-img-top">
		  <div class="card-body">
			<h5 class="card-title">${movie.title_english}</h5>
			<!-- Add other anime information you want to display here -->
			<h6 class="Ratings">
				Ratings: ${movie.score}
			  <ul>
				  <li>${movie.year}</li>
			  </ul>
			</h6>
		  </div>
		</div>`;
    // }

    main.appendChild(movieEl);
  });

  movieEl.innerHTML = `<div>${movies.length} results</div>`;
  result.appendChild(movieEl);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const searchTerm = search.value;

  if (searchTerm) {
    getMovies(SEARCHAPI + searchTerm + "&limit=20");
    search.value = "";
  }
});

function selectItem(param1, param2, param3, param4) {
  const type = param1 === "" ? "" : `type=${param1}`;
  const status = param2 === "" ? "" : `&status=${param2}`;
  const ratings = param3 === "" ? "" : `&ratings=${param3}`;
  const order = param4 === "" ? "" : `&order=${param4}`;

  getMovies(APIURL + "?" + type + status + ratings + order);
}

document.getElementById("filter").addEventListener("click", function () {
  const select1Value = document.getElementById("type").value;
  const select2Value = document.getElementById("status").value;
  const select3Value = document.getElementById("ratings").value;
  const select4Value = document.getElementById("order").value;

  selectItem(select1Value, select2Value, select3Value, select4Value);
});
