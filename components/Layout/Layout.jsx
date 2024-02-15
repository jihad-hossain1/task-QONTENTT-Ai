import React from "react";
import Navbar from "../ui/Navbar";
import Footer from "../ui/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen max-w-screen-xl mx-auto p-4">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
