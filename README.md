# Star Wars API inspector

a very simple and lightweight inspector for [The Star Wars API](https://swapi.dev)

## How to start the project

- clone the repository
- move inside the folder
- install dependencies: ```npm install```
- run the project locally: ```npm run dev```

if you want to see a live example, just head to: [https://tomashco.github.io/swapi-assignment/](https://tomashco.github.io/swapi-assignment/)

## Features
- Fetch data from the Star Wars API using all the endpoints available;
- Display the fetched data in a paginated list with a fixed number of items per page (10);
- Pagination controls through page numbers to navigate between pages;
- Unique page dedicated to that result displayed in the fetched data, displaying additional details and information;
- Menu navigation to return to the paginated list or navigate towards other pages.

## technical details
- React.js SPA scaffolded with (Vite)[https://vitejs.dev/];
- creation of a custom hook useAxios to integrate simple state management for axios calls;
- addition of a router system that allows to move between pages, using (tanstack Router)[https://tanstack.com/router/v1];
- use of (Tailwind CSS)[https://tailwindcss.com/] for rapidly build the template, then used (MUI)[https://mui.com/material-ui/] components for more complex parts (i.e. tables, menu);
- Implemented search functionality to allow users to search for specific items inside the specified category;
- Addition of skeleton screens to improve the user experience during API requests.
