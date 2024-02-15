import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="text-center p-3">
      <Link href={"/"}>GRAPHQL CRUD OPERATION</Link>
    </div>
  );
};

export default Navbar;
