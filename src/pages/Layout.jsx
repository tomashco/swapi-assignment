import { Outlet } from "@tanstack/router";
import Header from "../components/Header";
export default function Layout() {

  return (
    <main className="w-screen h-screen">

      <Header />
      <hr />
      <div className="m-6 p-6">
      <Outlet />
      </div>
    </main>
  )
}