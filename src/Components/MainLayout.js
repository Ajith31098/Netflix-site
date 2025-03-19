import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './Navbar/NavBar';  // Ensure you have the correct path for NavBar

function MainLayout() {
  return (
    <div>
      <NavBar /> {/* NavBar will always be shown with the layout */}
        <div>
            <Outlet /> {/* This is where child routes like Home will be rendered */}
        </div>
    </div>
  );
}

export default MainLayout;
