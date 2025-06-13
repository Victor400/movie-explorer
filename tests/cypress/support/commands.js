// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//// -- This is a parent command --


Cypress.Commands.add('loadMovies', (type = 'all') => {
    if (type === 'edge') {
        return cy.fixture('movies.edge.fixture.json').then(
            (data) => data,
            (err) => {
                Cypress.log({ name: 'loadMovies', message: 'Edge fixture not found, returning empty array' });
                return [];
            }
        );
    } else if (type === 'all') {
        return cy.fixture('movies.fixture.json').then(
            (data) => data,
            (err) => {
                Cypress.log({ name: 'loadMovies', message: 'Movies fixture not found, returning empty array' });
                return [];
            }
        );
    } else {
        return cy.fixture('movies.fixture.json').then(
            (movies) => movies.filter(movie => movie.genre.toLowerCase() === type.toLowerCase()),
            (err) => {
                Cypress.log({ name: 'loadMovies', message: 'Movies fixture not found, returning empty array' });
                return [];
            }
        );
    }
});


//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })