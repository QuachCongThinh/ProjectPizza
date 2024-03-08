import { ROUTERS } from "./utils/route";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/Homepages";
import Location from "./pages/Location/Location";
import ContactUs from "./pages/Contact/Contact";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import About from "./pages/AboutUs/AboutUs";
import Error from "./pages/Error404/Error";

const RenderRouter = () => {
  const Routers = [
    {
      path: ROUTERS.HOME,
      component: <HomePage />,
    },
    {
      path: ROUTERS.ABOUT,
      component: <About />,
    },
    {
      path: ROUTERS.LOCATION,
      component: <Location />,
    },
    {
      path: ROUTERS.CONTACT,
      component: <ContactUs />,
    },
    {
      path: ROUTERS.LOGIN,
      component: <Login />,
    },
    {
      path: ROUTERS.SIGNUP,
      component: <SignUp />,
    },
    {
      path: ROUTERS.ERROR,
      component: <Error />,
    },
  ];

  return (
    <Routes>
      {Routers.map((item, key) => (
        <Route key={key} path={item.path} element={item.component} />
      ))}
    </Routes>
  );
};

export default RenderRouter;
