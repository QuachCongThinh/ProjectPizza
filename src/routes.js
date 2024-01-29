import { BrowserRouter as Route, Routes } from "react-router-dom";
import { ROUTERS } from "./routes/router";
import ContactUs from "./components/Contact";

const renderRouter = () => {
  const Routers = [
    {
      path: ROUTERS.CONTACT,
      component: <ContactUs />,
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

const RouterCustom = () => {
  return renderRouter();
};

export default RouterCustom;
