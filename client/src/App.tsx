import Layout from "./components/Layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./pages/Homepage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [{ path: "/", element: <Homepage /> }],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
