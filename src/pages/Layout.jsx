import React from "react";
import { Link, Outlet } from "react-router-dom";
import '../css/layout.css';

const Layout = () => {
  return (
    <>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
          </ul>
        </nav>
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
