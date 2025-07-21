import Post from "./pages/posts/Post";
import Users from "./pages/users/Users";
import { useRoutes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import UserDetails from "./pages/users/UserDetails";
import PostDetails from "./pages/posts/PostDetails";

export const BASE_URL = "https://jsonplaceholder.typicode.com";
const App = () => {
  const myRoutes = [
    { path: "/", element: <Post /> },
    { path: "/users", element: <Users /> },
    { path: "/users/:id", element: <UserDetails /> },
    { path: "/post/:id", element: <PostDetails /> },
    
  ];
  const element = useRoutes(myRoutes);
  return <>{element}</>;
};

export default App;
