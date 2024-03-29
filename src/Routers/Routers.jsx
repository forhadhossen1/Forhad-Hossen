import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Layouts from "../Layouts/Layouts";
import Portfolio from "../Pages/Portfolio/Portfolio";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import Dashboard from "../Layouts/Dashboard";
import AddProject from "../Pages/Dashboard/AddProject";
import AddTestimonials from "../Pages/Dashboard/AddTestimonials";
import ManageProject from "../Pages/Dashboard/ManageProject";
import UpdateProject from "../Pages/Dashboard/UpdateProject";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layouts></Layouts>,
    errorElement: <ErrorPage></ErrorPage>,
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
  {
    path: 'dashboard',
    element: <PrivateRoute>
      <Dashboard />
    </PrivateRoute>,
    children: [
      {
        path: 'addProject',
        element: <AddProject></AddProject>
      },
      {
        path: 'addTestimonials',
        element: <AddTestimonials></AddTestimonials>
      },
      {
        path: 'manageProject',
        element: <ManageProject></ManageProject>
      },

      {
        path: 'updateProject/:id',
        element: <UpdateProject></UpdateProject>,
        loader: ({ params }) => fetch(`https://forhad-hossen-server.vercel.app/project/${params.id}`)
      }
    ]
  }
]);

export default router