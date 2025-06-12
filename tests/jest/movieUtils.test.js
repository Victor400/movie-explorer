function filterAndSortMovies(movies, search = "", genre = "all", sort = "default") {
    const filtered = movies.filter(movie => {
        const matchesGenre = genre === "all" || movie.genre.toLowerCase() === genre.toLowerCase();
        const matchesSearch = movie.title.toLowerCase().includes(search.toLowerCase());
        return matchesGenre && matchesSearch;
    });

    if (sort === "asc") return filtered.sort((a, b) => a.year - b.year);
    if (sort === "desc") return filtered.sort((a, b) => b.year - a.year);
    return filtered;
}

module.exports = { filterAndSortMovies };
