import Post from "./pages/posts/Post";
import Users from "./pages/users/Users";
import { useRoutes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import UserDetails from "./pages/users/UserDetails";
import PostDetails from "./pages/posts/PostDetails";
import Login from "./pages/login/Login";
import React from "react";

export const BASE_URL = "https://jsonplaceholder.typicode.com";
const App = () => {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  const myRoutes = [
    { path: "/", element: <Post /> },
    { path: "/users", element: <Users /> },
    { path: "/users/:id", element: <UserDetails /> },
    { path: "/post/:id", element: <PostDetails /> },
  ];

  const openRoutes = [{ path: "/login", element: <Login /> }];
  
  const element = useRoutes(isAuthenticated ? myRoutes : openRoutes);
  return <>{element}</>;
};
export default App;
