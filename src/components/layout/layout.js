import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { LayoutProvider } from "../../context/layout-context";
const Layout = ({ children }) => {
  return (
    <LayoutProvider>
      <Navbar />
      <Sidebar />
      <main>{children}</main>
    </LayoutProvider>
  );
};

export default Layout;
