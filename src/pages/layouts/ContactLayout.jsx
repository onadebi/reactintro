import React from 'react';
import {Link, Outlet} from 'react-router-dom';

// Ctrl + Space: to see the available snippets
const ContactLayout = () => {
  return (
    <>
    <h1 style={{fontSize:45}}>Contact Layout</h1>
    <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <Outlet />
      </div>
    </>
  )
}

export default ContactLayout