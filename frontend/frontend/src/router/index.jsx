import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register"
import Dashboard from "../pages/Chatbot";

const router = createBrowserRouter([
    {
    path: "/",
    element: <Home />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/register",
    element:<Register />
  },
  {
    path: "/chatbot",
    element:<Dashboard />
  },
  
])

export default router