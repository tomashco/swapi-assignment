import { RootRoute, Route, Router } from "@tanstack/router"
import PeoplePage from './pages/PeoplePage'
import Index from "./pages/IndexPage"
import UserPage from "./pages/UserPage"
import StarshipsPage from "./pages/StarshipsPage"
import StarshipPage from "./pages/StarshipPage"
import Layout from "./pages/Layout"

const rootRoute = new RootRoute({
  component: Layout,
})

const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Index,
})

const prodRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/swapi-assignment',
  component: Index,
})

const peopleRoute = new Route({
  getParentRoute: () => rootRoute,
  path: 'api/people',
  component: PeoplePage,
})

const starshipsRoute = new Route({
  getParentRoute: () => rootRoute,
  path: 'api/starships',
  component: StarshipsPage,
})

export const starshipRoute = new Route({
  getParentRoute: () => rootRoute,
  path: 'api/starships/*',
  component: StarshipPage
})

export const userRoute = new Route({
  getParentRoute: () => rootRoute,
  path: 'api/people/*',
  component: UserPage
})

const routeTree = rootRoute.addChildren([indexRoute, prodRoute, peopleRoute, userRoute,starshipsRoute,starshipRoute])

export const router = new Router({ routeTree })