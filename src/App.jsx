import Post from "./pages/posts/Post";
import Users from "./pages/users/Users";
import { useRoutes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import UserDetails from "./pages/users/UserDetails";

export const BASE_URL = "https://jsonplaceholder.typicode.com";
const App = () => {
  const myRoutes = [
    { path: "/", element: <Post /> },
    { path: "/users", element: <Users /> },
    { path: "/users/:id", element: <UserDetails /> },
  ];
  const element = useRoutes(myRoutes);
  return <>{element}</>;
};

export default App;
