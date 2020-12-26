import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { LayoutProvider } from "../../context/layout-context";
const Layout = ({ children }) => {
  return (
    <LayoutProvider>
      <Navbar />
      <Sidebar />
      {children}
    </LayoutProvider>
  );
};

export default Layout;
