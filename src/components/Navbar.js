import Logo from "../assets/LogoPizza.png";
import "../pages/Navbar/style.scss";
import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [menus] = useState([
    {
      name: "Home",
      path: "",
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
          path: "",
        },
        {
          name: "Sign Up",
          path: "",
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
      path: "",
    },
    {
      name: "Contact Us",
      path: "",
    },
  ]);
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
          <div className="icon-cart">
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
    </div>
  );
}
export default Navbar;
