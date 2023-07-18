import { Link, Outlet, RootRoute, Route, Router } from "@tanstack/router"
import PeoplePage from './pages/PeoplePage'
import Index from "./pages/indexPage"
import UserPage from "./pages/UserPage"

const rootRoute = new RootRoute({
  component: Root,
})

const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Index,
})

const peopleRoute = new Route({
  getParentRoute: () => rootRoute,
  path: 'api/people',
  component: PeoplePage,
})

export const userRoute = new Route({
  getParentRoute: () => rootRoute,
  path: 'api/people/*',
  component: UserPage
})

const routeTree = rootRoute.addChildren([indexRoute, peopleRoute, userRoute])

export const router = new Router({ routeTree })

function Root() {
  return (
    <>
      <div>
        <Link to={'/'}>Home</Link> <Link to={"/api/people"}>People</Link>
      </div>
      <hr />
      <Outlet />
    </>
  )
}