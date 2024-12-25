import { Outlet } from "react-router";
import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const RootLayout = () => {
  return (
    <React.Fragment>
      <Navbar />
      <main className="container mx-auto px-6 lg:px-8">
        <Outlet />
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default RootLayout;
