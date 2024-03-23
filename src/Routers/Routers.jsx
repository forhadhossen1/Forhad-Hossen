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
import ManageTestimonials from "../Pages/Dashboard/ManageTestimonials";
import UpdateProject from "../Pages/Dashboard/UpdateProject";


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
  {
    path: 'dashboard',
    element: <Dashboard></Dashboard>,
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
        path: 'manageTestimonials',
        element: <ManageTestimonials></ManageTestimonials>
      },
      {
        path: 'updataProject',
        element: <UpdateProject></UpdateProject>,
        loader: ({ params }) => fetch(`http://localhost:5000/project/${params.id}`)
      }
    ]
  }
]);

export default router