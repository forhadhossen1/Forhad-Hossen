import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Layouts from "../Layouts/Layouts";
import Portfolio from "../Pages/Portfolio/Portfolio";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layouts></Layouts>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/portfolio",
        element: <Portfolio></Portfolio>
      },
      {
        path: "/about",
        element: <About></About>
      },
      {
        path: "/contact",
        element: <Contact></Contact>
      }
    ]
  },
]);

export default router