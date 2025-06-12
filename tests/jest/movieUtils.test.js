const { filterAndSortMovies } = require('./movieUtils');

const allMovies = require('./allMovies.mock.json'); // Save your movie data in a JSON file

describe("filterAndSortMovies", () => {
    it("returns all movies when no filters applied", () => {
        const result = filterAndSortMovies(allMovies);
        expect(result.length).toBe(allMovies.length);
    });

    it("filters by genre", () => {
        const kidsMovies = filterAndSortMovies(allMovies, '', 'kids');
        expect(kidsMovies.every(m => m.genre === 'kids')).toBe(true);
    });

    it("filters by search query (title)", () => {
        const result = filterAndSortMovies(allMovies, 'captain');
        expect(result.length).toBe(1);
        expect(result[0].title).toBe('Captain America');
    });

    it("filters by genre and search", () => {
        const result = filterAndSortMovies(allMovies, 'snow', 'kids');
        expect(result.length).toBe(1);
        expect(result[0].title).toBe('The Snow White');
    });

    it("sorts movies by year ascending", () => {
        const result = filterAndSortMovies(allMovies, '', 'all', 'asc');
        for (let i = 1; i < result.length; i++) {
            expect(result[i].year).toBeGreaterThanOrEqual(result[i - 1].year);
        }
    });

    it("sorts movies by year descending", () => {
        const result = filterAndSortMovies(allMovies, '', 'all', 'desc');
        for (let i = 1; i < result.length; i++) {
            expect(result[i].year).toBeLessThanOrEqual(result[i - 1].year);
        }
    });

    it("returns empty array for no matches", () => {
        const result = filterAndSortMovies(allMovies, 'nonexistenttitle');
        expect(result).toEqual([]);
    });
});
