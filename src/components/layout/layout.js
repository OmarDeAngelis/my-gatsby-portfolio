import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { LayoutProvider } from "../../context/layout-context";
import Footer from "./Footer";
const Layout = ({ children }) => {
  return (
    <LayoutProvider>
      <Navbar />
      <Sidebar />
      <main>{children}</main>
      <Footer />
    </LayoutProvider>
  );
};

export default Layout;
