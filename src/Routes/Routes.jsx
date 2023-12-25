import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/Layouts/MainLayout";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import About from "../pages/AboutPage/About";
import Home from "../pages/HomePage/Home";
import Pricing from "../pages/PricingPage/Pricing";
import Contact from "../pages/ContactPage/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,

    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/pricing",
        element: <Pricing />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);

export default router;
