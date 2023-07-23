import { Outlet } from "@tanstack/router";
import Header from "../components/Header";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const lightTheme = createTheme({
  palette: {
    mode: 'light',
  },
});

export default function Layout() {

  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
    <main className="w-screen h-screen">

      <Header />
      <hr />
      <div className="m-6 p-6">
      <Outlet />
      </div>
      </main>
      </ThemeProvider>
  )
}