import {createBrowserRouter,RouterProvider} from "react-router-dom"
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Service } from "./pages/Service";
import { Movies } from "./pages/Movies";
import { Contact, getContactData } from "./pages/Contact";
import "./App.css"
import  AppLayout  from "./components/Ui/AppLayout";
import { ErrorPage } from "./pages/ErrorPage";
import { getApiData } from "./api/getApiData";
import { MoviesDetails } from "./components/Ui/MoviesDetails";
import { getMoviesData } from "./api/getMoviesData";
const App=()=>{
  const router=createBrowserRouter([
    {
      path: "/",
      element:<AppLayout />,
      errorElement:<ErrorPage />,
      children:[
    {
      path:"/",
      element:<Home />
    },
    {
      path:"/about",
       element:<About />
    },
    {
      path:"/service",
      element:<Service />
    },
    {
      path:"/movies",
      element:<Movies />,
      loader: getApiData,
    },
    {
      path:"/movies/:movieID",
      element:<MoviesDetails />,
      loader: getMoviesData,
    },
    {
      path:"/contact",
      element:<Contact />,
      action:getContactData,
    }
      ]
    }
  ]);
  return <RouterProvider router={router}/>
}

export default App;