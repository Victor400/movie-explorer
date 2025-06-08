// Cache DOM elements for interaction
const container = document.getElementById("dataContainer");
const searchInput = document.getElementById("searchInput");
const genreFilter = document.getElementById("genreFilter");
const sortOrder = document.getElementById("sortOrder");
const clearBtn = document.getElementById("clearBtn");

// Function to render movie cards
function renderMovies(data) {
    const container = document.getElementById("dataContainer");
    container.innerHTML = "";

    if (data.length === 0) {
        container.innerHTML = "<p class='text-center'>No movies found.</p>";
        return;
    }

    data.forEach(movie => {
        const col = document.createElement("div");
        col.className = "col-md-3 movie-card";
        col.innerHTML = `
      <img src="${movie.image}" alt="${movie.title}" class="img-fluid" />
      <div class="movie-title">${movie.title}</div>
      <div class="movie-details">${movie.genre.toUpperCase()} | ${movie.year}</div>
    `;
        container.appendChild(col);
    });
}

// Function to filter and sort movies
function filterAndSortMovies(movies) {
    const search = searchInput.value.toLowerCase();
    const genre = genreFilter.value;
    const sort = sortOrder.value;

    let filtered = movies.filter(m =>
        (genre === "all" || m.genre.toLowerCase() === genre) &&
        m.title.toLowerCase().includes(search)
    );

    if (sort === "asc") filtered.sort((a, b) => a.year - b.year);
    else if (sort === "desc") filtered.sort((a, b) => b.year - a.year);

    renderMovies(filtered);
}

// Global movie data
let allMovies = [];

async function fetchMoviesData() {
    try {
        const response = await fetch('assets/js/json/movies-data.json');
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();

        if (Array.isArray(data)) {
            allMovies = data;
            renderMovies(allMovies);
        } else {
            throw new Error('Invalid movie data format. Expected an array.');
        }
    } catch (error) {
        console.error("Failed to load movie data:", error);
    }
}

// Setup event listeners
searchInput.addEventListener("input", () => filterAndSortMovies(allMovies));
genreFilter.addEventListener("change", () => filterAndSortMovies(allMovies));
sortOrder.addEventListener("change", () => filterAndSortMovies(allMovies));
clearBtn.addEventListener("click", () => {
    searchInput.value = "";
    genreFilter.value = "all";
    sortOrder.value = "default";
    renderMovies(allMovies);
});



// Initial data fetch
fetchMoviesData();