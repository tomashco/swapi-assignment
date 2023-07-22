import { RootRoute, Route, Router } from "@tanstack/router"
import SingleViewPage from "./pages/SingleViewPage"
import Layout from "./pages/Layout"
import InitialPage from "./pages/InitialPage"
import TablePage from "./pages/TablePage"

const rootRoute = new RootRoute({
  component: Layout,
})

const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/',
  component: InitialPage,
})

const prodRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/swapi-assignment',
  component: InitialPage,
})

const peopleRoute = new Route({
  getParentRoute: () => rootRoute,
  path: 'api/people',
  component: () => <TablePage pageTitle='people page'/>,
})

export const userRoute = new Route({
  getParentRoute: () => rootRoute,
  path: 'api/people/*',
  component: () => <SingleViewPage pageTitle='User page'/>,
})

const starshipsRoute = new Route({
  getParentRoute: () => rootRoute,
  path: 'api/starships',
  component: () => <TablePage pageTitle='Starships page'/>,
})

export const starshipRoute = new Route({
  getParentRoute: () => rootRoute,
  path: 'api/starships/*',
  component: () => <SingleViewPage pageTitle='Starship page'/>,
})

const filmsRoute = new Route({
  getParentRoute: () => rootRoute,
  path: 'api/films',
  component: () => <TablePage pageTitle='Films page'/>,
})

export const filmRoute = new Route({
  getParentRoute: () => rootRoute,
  path: 'api/films/*',
  component: () => <SingleViewPage pageTitle='Film page'/>,
})

//  {title: 'planets', url: '/api/planets'},
const planetsRoute = new Route({
  getParentRoute: () => rootRoute,
  path: 'api/planets',
  component: () => <TablePage pageTitle='Planets page'/>,
})

export const planetRoute = new Route({
  getParentRoute: () => rootRoute,
  path: 'api/planets/*',
  component: () => <SingleViewPage pageTitle='Planet page'/>,
})
// {title: 'species', url: '/api/species'},
const speciesRoute = new Route({
  getParentRoute: () => rootRoute,
  path: 'api/species',
  component: () => <TablePage pageTitle='Species page'/>,
})

export const specieRoute = new Route({
  getParentRoute: () => rootRoute,
  path: 'api/species/*',
  component: () => <SingleViewPage pageTitle='Specie page'/>,
})

// {title: 'vehicles', url: '/api/vehicles'},
const vehiclesRoute = new Route({
  getParentRoute: () => rootRoute,
  path: 'api/vehicles',
  component: () => <TablePage pageTitle='Vehicles page'/>,
})

export const vehicleRoute = new Route({
  getParentRoute: () => rootRoute,
  path: 'api/vehicles/*',
  component: () => <SingleViewPage pageTitle='Vehicle page'/>,
})

const routeTree = rootRoute.addChildren([
  indexRoute, 
  prodRoute, 
  peopleRoute, 
  userRoute,
  starshipsRoute,
  starshipRoute,
  filmsRoute,
  filmRoute,
  planetsRoute,
  planetRoute,
  speciesRoute,
  specieRoute,
  vehiclesRoute,
  vehicleRoute,
])

export const router = new Router({ routeTree })