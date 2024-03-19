import {createBrowserRouter} from "react-router-dom";
import MoviesPage from "./pages/MoviesPage";
import About from "./pages/About";
import App from "./App";
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
          element: <MoviesPage />
        }
      ],
    },
  ]);

  