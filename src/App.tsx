import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Lands from "./pages/Lands";
import Apartments from "./pages/Apartments";
import Shortlets from "./pages/Shortlets";
import ContactUs from "./pages/ContactUs";
import Login from "./pages/Login";
import Details from "./pages/Details";
import Profile from "./pages/Profile";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import Error from "./pages/Error";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "lands",
      element: <Lands />,
    },
    {
      path: "apartments",
      element: <Apartments />,
    },
    {
      path: "shortlets",
      element: <Shortlets />,
    },
    {
      path: "contact-us",
      element: <ContactUs />,
    },
    {
      path: "login",
      element: <Login />,
    },
    {
      path: "details",
      element: <Details />,
    },
    {
      path: "profile/:username",
      element: <Profile />,
    },
    {
      path: "terms",
      element: <Terms />,
    },
    {
      path: "privacy",
      element: <Privacy />,
    },
    {
      path: "*",
      element: <Error />,
    },
  ],
  {
    future: {
      v7_skipActionErrorRevalidation: true,
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_relativeSplatPath: true,
    },
  }
);

export default router;
