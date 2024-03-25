import {createBrowserRouter} from "react-router-dom";
import AllMovies from "../pages/allMovies/AllMovies";
import About from "../pages/about";
import App from "../app/App";
import AddMovieForm from "../pages/addMovieForm/AddMovieForm";
export const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "/",
          element: <About />,
        },
        {
          path: '/movies',
          element: <AllMovies />
        },
        {
          path: '/addmovie',
          element: <AddMovieForm />
        }
      ],
    },
  ]);

  