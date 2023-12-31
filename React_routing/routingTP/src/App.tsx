import {
  RouterProvider,
  BrowserRouter,
  createBrowserRouter
} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Connection from "./Connexion";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/about",
    element: <About></About>,
  },
  {
    path: "/home",
    element: <Home></Home>,
  },
  {
    path: "/connection",
    element: <Connection></Connection>,
  }
]);


const App = () => {
  return (
    <RouterProvider router={router} />
  );
};


export default App
