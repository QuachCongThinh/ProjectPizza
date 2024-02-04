import { ROUTERS } from "./utils/route";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/homepage";
import Location from "./components/Location";
import ContactUs from "./components/Contact";
import Login from "./components/Login";
import SignUp from "./components/SignUp";

const RenderRouter = () => {
  const Routers = [
    {
      path: ROUTERS.HOME,
      component: <HomePage />,
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
