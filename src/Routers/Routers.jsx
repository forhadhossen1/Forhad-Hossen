import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Layouts from "../Layouts/Layouts";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Layouts></Layouts>,
      children: [
        {
            path: "/",
            element : <Home></Home>
        }
      ]
    },
  ]);

  export default router