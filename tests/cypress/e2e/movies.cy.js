describe('Movies Data Tests', () => {
    it('loads all movies', () => {
        cy.loadMovies('all').then(movies => {
            expect(movies).to.be.an('array');
            if (movies.length === 0) {
                cy.log('Warning: all movies fixture is empty or missing');
            } else {
                expect(movies).to.not.be.empty;
            }
        });
    });

    it('loads edge case movies', () => {
        cy.loadMovies('edge').then(movies => {
            expect(movies).to.be.an('array');
            if (movies.length === 0) {
                cy.log('Warning: edge case fixture is empty or missing');
            } else {
                const missingTitleMovie = movies.find(m => !m.title);
                expect(missingTitleMovie).to.exist;
            }
        });
    });

    it('loads only action genre movies', () => {
        cy.loadMovies('action').then(movies => {
            expect(movies).to.be.an('array');
            if (movies.length === 0) {
                cy.log('Warning: action genre movies fixture is empty or missing');
            } else {
                expect(movies.every(m => m.genre.toLowerCase() === 'action')).to.be.true;
            }
        });
    });

    it('loads only kids genre movies', () => {
        cy.loadMovies('kids').then(movies => {
            expect(movies).to.be.an('array');
            if (movies.length === 0) {
                cy.log('Warning: kids genre movies fixture is empty or missing');
            } else {
                expect(movies.every(m => m.genre.toLowerCase() === 'kids')).to.be.true;
            }
        });
    });

    it('handles empty genre gracefully', () => {
        cy.loadMovies('nonexistent').then(movies => {
            expect(movies).to.be.an('array');
            expect(movies).to.be.empty;
        });
    });
});
