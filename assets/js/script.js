
/* jshint esversion: 8 */

// Cache DOM elements for interaction
const container = document.getElementById("data-container");
const searchInput = document.getElementById("search-input");
const genreFilter = document.getElementById("genre-filter");
const sortOrder = document.getElementById("sort-order");
const clearBtn = document.getElementById("clear-btn");

console.log("DOM elements loaded:", {
    container,
    searchInput,
    genreFilter,
    sortOrder,
    clearBtn
});


// Reuse already-declared DOM references at the top
// Function to check if Clear button should be enabled
function updateClearButtonState() {
    const isSearchFilled = searchInput.value.trim() !== '';
    const isGenreFiltered = genreFilter.value !== 'all';
    const isSortFiltered = sortOrder.value !== 'default';

    clearBtn.disabled = !(isSearchFilled || isGenreFiltered || isSortFiltered);
}

// Clear input and reset filters on Clear button click
clearBtn.addEventListener('click', () => {
    console.log("Clear button clicked.");
    searchInput.value = '';
    genreFilter.value = 'all';
    sortOrder.value = 'default';
    updateClearButtonState();  // Re-evaluate state
    renderMovies(allMovies);
    searchInput.focus();
});

// Update clear button state whenever any filter changes
searchInput.addEventListener("input", () => {
    console.log("Search input changed:", searchInput.value);
    updateClearButtonState();
    filterAndSortMovies(allMovies);
});

genreFilter.addEventListener("change", () => {
    console.log("Genre changed:", genreFilter.value);
    updateClearButtonState();
    filterAndSortMovies(allMovies);
});

sortOrder.addEventListener("change", () => {
    console.log("Sort order changed:", sortOrder.value);
    updateClearButtonState();
    filterAndSortMovies(allMovies);
});


// Function to render movie cards
function renderMovies(data) {
    console.log("Rendering movies:", data);
    container.innerHTML = "";

    if (data.length === 0) {
        container.innerHTML = "<p class='text-center'>No movies found.</p>";
        return;
    }

    data.forEach(movie => {
        const col = document.createElement("div");
        col.className = "col-md-3 movie-card";
        col.innerHTML = `
            <img src="${movie.image}" alt="${movie.title}" class="img-fluid movie-image"width="600" height="400"loading="lazy" />
            <div class="movie-title">${movie.title}</div>
            <div class="movie-details">${movie.genre.toUpperCase()} | ${movie.year}</div>
            <div class="movie-description">${movie.description || "No description available."}</div>
        `;
        container.appendChild(col);
    });
}

// Function to filter and sort movies
function filterAndSortMovies(movies) {
    const search = searchInput.value.toLowerCase();
    const genre = genreFilter.value;
    const sort = sortOrder.value;

    console.log("Filtering with:", { search, genre, sort });

    let filtered = movies.filter(m =>
        (genre === "all" || m.genre.toLowerCase() === genre) &&
        m.title.toLowerCase().includes(search)
    );

    console.log("Filtered movies:", filtered);

    if (sort === "asc") filtered.sort((a, b) => a.year - b.year);
    else if (sort === "desc") filtered.sort((a, b) => b.year - a.year);

    console.log("Sorted movies:", filtered);

    renderMovies(filtered);
}

// Global movie data
let allMovies = [];

// Fetch data
async function fetchMoviesData() {
    try {
        const response = await fetch('assets/js/json/movies-data.json');
        console.log("Fetch response:", response);

        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();

        console.log("Fetched movie data:", data);

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

// Event listeners
searchInput.addEventListener("input", () => {
    console.log("Search input changed:", searchInput.value);
    filterAndSortMovies(allMovies);
});

genreFilter.addEventListener("change", () => {
    console.log("Genre changed:", genreFilter.value);
    filterAndSortMovies(allMovies);
});

sortOrder.addEventListener("change", () => {
    console.log("Sort order changed:", sortOrder.value);
    filterAndSortMovies(allMovies);
});

clearBtn.addEventListener("click", () => {
    console.log("Clear button clicked.");
    searchInput.value = "";
    genreFilter.value = "all";
    sortOrder.value = "default";
    renderMovies(allMovies);
});

// Initial data fetch
fetchMoviesData();
