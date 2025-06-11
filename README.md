![movie-explorer-logo](assets/images/movie-explorer-logo.jpeg)

# Movie Explorer Website
Welcome to Movie Explorer, your ultimate destination for discovering and exploring movies. Browse through a curated collection of films across genres like Action, Comedy, Drama, and Kids. Whether you're searching for a classic favorite or the latest hit, Movie Explorer helps you find movies you’ll love—fast and easily. Dive in, search, filter, and enjoy the world of cinema at your fingertips.


Table of Contents
1. [Overview](#overview)
2. [Key Features](#key-features)
3. [Purpose](#purpose)
4. [Goal](#goal)
5. [Flow-Steps](#flow-steps)
6. [Rationale](#rationale)
7. [Testing](#testing)
8. [User Experience (UX Design)](#user-experience-ux-design)
9. [Balsamiq-Wireframe](#balsamiq-wireframe)
10. [Technologies Used](#technologies-used)
11. [Project Setup](#project-setup)
12. [Installation](#installation)
13. [Testing](#testing)
14. [Acknowledgements](#acknowledgements)



## Overview

The Interactive Movie Explorer is a responsive, user-friendly web application that allows users to browse, search, filter, and interact with a curated list of movies. Designed using HTML, CSS, and JavaScript, the site enables users to quickly find movies by title or genre, sort them by release year, and even subscribe to updates or contact the site owner through embedded forms.

## Key Features 

Search Functionality: Quickly find movies by typing keywords into the search bar.

Genre Filtering: Narrow down movie selections by choosing specific genres like Action, Drama, Comedy, or Kids.

Sorting Options: Sort movies by release year in ascending or descending order.

Responsive Design: Optimized for various devices, ensuring a consistent experience across desktops, tablets, and mobile phones.

Dynamic Rendering: Movie cards are dynamically generated based on user interactions, providing real-time feedback.

## Flow Steps

Description of Flow Steps:

- Load Homepage: The application initializes and displays the homepage with navigation and search/filter options.

- User Inputs Search Criteria: The user enters a movie title in the search bar, selects a genre from the dropdown menu, and chooses a sort order (e.g., by year ascending or descending).

- Application Processes Input: The application filters the movie dataset based on the search criteria and sorts the filtered list according to the selected order.

- Display Results: The application renders movie cards matching the criteria in the display section.

- User Selects a Movie: The user clicks on a movie card to view more details.

- Display Movie Details: The application shows detailed information about the selected movie, such as synopsis, cast, and reviews.

Future Improvement 

-  User Action: The user may choose to rent the movie, add it to a watchlist, or return to the search results.



## 🧪 Testing

This project uses **Jest** for unit testing and **Cypress** for end-to-end testing.  
All test-related files are organized under the `/tests` directory.

### 🔧 Scripts

 For full setup and usage details, see 📘 **Test Setup Guide**: [View TESTING.md](tests/setup/TESTING.md)

```bash
npm test           # Run Jest unit tests
npm run test:watch # Watch mode for Jest
npm run test:e2e   # Launch Cypress test runner

