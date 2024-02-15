import React from "react";
import Navbar from "../ui/Navbar";
import Footer from "../ui/Footer";

const Layout = ({ children }) => {
  return (
    <main className="bg-zinc-800 text-white">
      <Navbar />
      <main className="min-h-screen max-w-screen-xl mx-auto p-4">
        {children}
      </main>
      <Footer />
    </main>
  );
};

export default Layout;
