import Logo from "../assets/LogoPizza.png";
import "../pages/Navbar/style.scss";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ROUTERS } from "../utils/route";
import { MenuCart } from "./MenuCart";

function Navbar() {
  const [menus] = useState([
    {
      name: "Home",
      path: ROUTERS.HOME,
    },
    {
      name: "Blog",
      path: "",
      child: [
        {
          name: "Blog Archive",
          path: "",
          subMenu: [
            {
              name: "Grid View",
              path: "",
            },
            {
              name: "List View",
              path: "",
            },
            {
              name: "Masonry",
              path: "",
            },
            {
              name: "Full Width",
              path: "",
            },
          ],
        },
        {
          name: "Blog Single",
          path: "",
        },
      ],
    },
    {
      name: "Pages",
      path: "",
      child: [
        {
          name: "About Us",
          path: "",
        },
        {
          name: "Login",
          path: ROUTERS.LOGIN,
        },
        {
          name: "Sign Up",
          path: ROUTERS.SIGNUP,
        },
        {
          name: "Checkout",
          path: "",
        },
        {
          name: "Cart",
          path: "",
        },
        {
          name: "Legal",
          path: "",
        },
        {
          name: "Error 404",
          path: "",
        },
      ],
    },
    {
      name: "Locations",
      path: ROUTERS.LOCATION,
    },
    {
      name: "Contact Us",
      path: ROUTERS.CONTACT,
    },
  ]);
  const [isMenuShow, setIsMenuShow] = useState(false);
  const handleClick = () => {
    setIsMenuShow(true);
  };
  const handleClose = () => {
    setIsMenuShow(false);
  };

  return (
    <div className="navbar">
      <div className="container-navbar">
        <div className="leftSide">
          <img src={Logo} alt="Logo Pizza" />
        </div>
        <div className="centerSide">
          <ul className="menu">
            {menus.map((menu, menuKey) => (
              <li key={menuKey} className="list-menu">
                <Link to={menu.path}>{menu.name}</Link>
                {menu.child && (
                  <ul className="child-menu">
                    {menu.child?.map((childItem, childKey) => (
                      <li key={childKey} className="list-child-menu">
                        <Link
                          to={childItem.path}
                          className={`${childItem.subMenu ? "arrow" : ""}`}
                        >
                          {childItem.name}
                        </Link>
                        {childItem.subMenu && (
                          <ul className="sub-menu">
                            {childItem.subMenu?.map(
                              (subMenuItem, subMenuKey) => (
                                <li key={subMenuKey} className="list-sub-menu">
                                  <Link to={subMenuItem.path}>
                                    {subMenuItem.name}
                                  </Link>
                                </li>
                              )
                            )}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className="rightSide">
          <div className="icon-cart" onClick={handleClick}>
            <i className="flaticon-shopping-bag"></i>
            <span className="cart-item-count">
              <p>0</p>
            </span>
          </div>
          <div className="icon-search">
            <i className="flaticon-search"></i>
          </div>
        </div>
      </div>
      <MenuCart isMenuShow={isMenuShow} handleClose={handleClose} />
    </div>
  );
}
export default Navbar;
