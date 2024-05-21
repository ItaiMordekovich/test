import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Error from "./Error";
import Register from "./Register";
import Login from "./Login";
import Home from "./Home";
import Card from "./Card";
import NewCard from "./NewCard";
import UpdateCard from "./UpdateCard";
import About from "./About";
import FavCards from "./FavCards";
import MyCards from "./MyCards";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <Error />,
        children: [
            { path: "/", element: <Home /> },
            { path: "/about", element: <About /> },
            { path: "/favcards", element: <FavCards /> },
            { path: "/mycards", element: <MyCards /> },
            { path: "/register", element: <Register /> },
            { path: "/login", element: <Login /> },
            { path: "/cards/:id", element: <Card /> },
            { path: "/newCard", element: <NewCard /> },
            { path: "/update/:id", element: <UpdateCard /> },

        ]
    }
])