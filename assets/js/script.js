// Cache DOM elements for interaction
const container = document.getElementById("dataContainer");
const searchInput = document.getElementById("searchInput");
const genreFilter = document.getElementById("genreFilter");
const sortOrder = document.getElementById("sortOrder");
const clearBtn = document.getElementById("clearBtn");

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
