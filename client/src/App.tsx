import { lazy } from "react";
import Layout from "./components/Layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const Homepage = lazy(() => import("./pages/Homepage"));

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
