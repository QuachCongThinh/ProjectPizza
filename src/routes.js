import { BrowserRouter as Route, Routes } from "react-router-dom";
import { ROUTERS } from "./routes/router";
import ContactUs from "./components/Contact";
import MasterLayout from "./pages/masterLayout";

const renderRouter = () => {
  const userRouters = [
    {
      path: ROUTERS.USER.CONTACT,
      component: <ContactUs />,
    },
  ];

  return (
    <MasterLayout>
      <Routes>
        {userRouters.map((item, key) => (
          <Route key={key} path={item.path} element={item.component} />
        ))}
      </Routes>
    </MasterLayout>
  );
};

const RouterCustom = () => {
  return renderRouter();
};

export default RouterCustom;
